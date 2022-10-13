import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity'
import { City } from './city/entities/city.entity';
import { Address } from './address/entities/address.entity';
import { Profile } from './profile/entities/profile.entity';
import { ConfigModule } from "@nestjs/config";
import configuration from '../config/configuration';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  }), TypeOrmModule.forRoot({
    type: 'mysql', //TODO - PONER VARIABLES DE ENTORNO
    host: process.env.HOST,
    port: +process.env.PORT,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    entities: [User,City,Address,Profile],
    synchronize: true,
  }), UserModule,],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
