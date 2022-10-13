import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {User} from './user/entities/user.entity'
import { City } from './city/entities/city.entity';
import { Address } from './address/entities/address.entity';
import { Profile } from './profile/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', //TODO - PONER VARIABLES DE ENTORNO
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'user',
    database: 'lucky',
    entities: [User,City,Address,Profile],
    synchronize: true,
  }), UserModule, ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
