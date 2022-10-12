import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Security {

    async encrypt(password: string) {
        const saltOrRounds = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash
    }

    async validatePassword(password: string, hash:string) {
        return await bcrypt.compare(password, hash);
    }
}