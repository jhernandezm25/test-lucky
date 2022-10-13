import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Auth {
    constructor(private jwtService: JwtService) { }
    async encrypt(password: string) {
        const saltOrRounds = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash
    }

    async validatePassword(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }

    async generateJWT(username: string) {
        console.log('1')
        const payload = { username};
        return {
            access_token: this.jwtService.sign(payload,{secret:process.env.JWT_SECRET}),
        };
    }
}