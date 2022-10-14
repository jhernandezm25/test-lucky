import { CacheModule, Module } from '@nestjs/common';
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
import { join } from 'node:path';
//import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  }), TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost',
    port: +process.env.PORT,
    username: 'user',
    password: 'user',
    database: 'lucky',
    entities: [join(__dirname, '/**/*.entity.{js,ts}')],
    synchronize: false,
  }), UserModule,
  // CacheModule.register({
  //   isGlobal: true,
  //   store: redisStore,
  //   host: process.env.REDIS_HOST,
  //   port: process.env.REDIS_PORT,
  // }),
],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
