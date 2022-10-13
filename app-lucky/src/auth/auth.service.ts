import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { StatusMessage, Response, StatusCode, CustomizeMessage } from '../utils/response';

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
        const payload = { username};
        return {
            access_token: this.jwtService.sign(payload,{secret:'abcdABCD1234554321'}),
        }; //TODO colocar variable de entorno
    }
}