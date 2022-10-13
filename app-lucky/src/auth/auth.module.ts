import { forwardRef, Module } from '@nestjs/common';
import { Auth } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
process.env.JWT_SECRET = 'abcdABCD1234554321' //TODO variables de entorno
process.env.JWT_EXP_H = '60'


export const jwtConstants = {
  secret: 'abcdABCD1234554321',
};

@Module({
  imports: [PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '1h'},
  }), 
  ],
  exports: [Auth],
  providers: [Auth, JwtService, ConfigService, JwtStrategy],
  controllers: [],
})
export class AuthModule { }