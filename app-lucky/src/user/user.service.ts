import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AddressService } from '../address/address.service';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { CreateProfileDto } from '../profile/dto/create-profile.dto';
import { ProfileService } from '../profile/profile.service';
import { StatusMessage, Response, StatusCode, CustomizeMessage } from '../utils/response';
import { Security } from '../security/security';
import { Console } from 'console';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,
    private addressService: AddressService,
    private profileService: ProfileService,
    private security: Security
  ) { }

  async create(createUserDto: CreateUserDto) {
    const response: Response = {}
    try {
      const username = await this.findByUserName(createUserDto.username);
      if (username) {
        response.statusCode = StatusCode.BadRequest;
        response.message = [StatusMessage.BadRequest]
        response.error = CustomizeMessage.UserExist
        return response
      }
      const createAddressDto: CreateAddressDto = { cityId: createUserDto.cityId, street: createUserDto.address }
      const address = await this.addressService.create(createAddressDto);
      const encryptPassword = await this.security.encrypt(createUserDto.password)
      const user = await this.usersRepository.save({ username: createUserDto.username, password: encryptPassword });
      const createProfileDto: CreateProfileDto = { userId: user.id, addressId: address.id, name: createUserDto.name };
      await this.profileService.create(createProfileDto)
      return user;
    } catch (error) {
      response.statusCode = StatusCode.InternalError;
      response.message = [StatusMessage.InternalError]
      response.error = error
      return response
    }
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async findByUserName(userName: string) {
    const query = `select * from user u where u.username = '${userName}'`
    const queryResult = await this.usersRepository.query(query);
    const result = queryResult.length > 0 ? queryResult[0] : null
    return result
  }

  async testMethod(userName: string, password:string) {
    const user = await this.findByUserName(userName)
    const isMatch = await this.security.validatePassword(password,user.password)
    return isMatch
  }
}
