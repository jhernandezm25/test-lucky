import { Module } from '@nestjs/common';
import { Auth } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
process.env.JWT_SECRET = 'abcdABCD1234554321' //TODO variables de entorno
process.env.JWT_EXP_H = '1h'



@Module({
  imports: [PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET ,
    signOptions: { expiresIn: process.env.JWT_EXP_H },
  }),
  ],
  exports: [Auth],
  providers: [Auth, JwtService, ConfigService, JwtStrategy],
  controllers: [],
})
export class AuthModule { }