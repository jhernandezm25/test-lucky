import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './entities/user.entity'
import { AddressModule } from '../address/address.module';
import { ProfileModule } from '../profile/profile.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AddressModule, ProfileModule, AuthModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule,UserService]
})
export class UserModule {}
