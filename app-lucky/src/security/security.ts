import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

@Injectable()
export class Security {
    
    private iv: Buffer = randomBytes(16);
    private password = 'Password used to generate key'; //TODO

    private async createKey() {
        return (await promisify(scrypt)(this.password, 'salt', 32)) as Buffer;
    }
    async encrypt(passwordText: string) {
        const cipher = createCipheriv('aes-256-ctr', await this.createKey(), this.iv);
        const encryptedText = Buffer.concat([
            cipher.update(passwordText),
            cipher.final(),
        ]);
        return encryptedText.toString('hex')
    }

    async decrypt(passwordText: Buffer) {
        const decipher = createDecipheriv('aes-256-ctr', await this.createKey(), this.iv);
        const decryptedText = Buffer.concat([
            decipher.update(passwordText),
            decipher.final(),
        ]);
        return decryptedText.toString('hex')
    }
}