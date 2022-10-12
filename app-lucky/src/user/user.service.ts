import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AddressService } from '../address/address.service';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { ProfileService } from '../profile/profile.service';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,
    private addressService: AddressService,
    private profileService: ProfileService
  ) { }

  async create(createUserDto: CreateUserDto,) {
    console.log('createUser', createUserDto)
    const createAddressDto: CreateAddressDto = { cityId: createUserDto.cityId, street: createUserDto.address }
    const address = await this.addressService.create(createAddressDto);
    const user = await this.usersRepository.save({username:createUserDto.username, password:createUserDto.password});
    const createProfileDto: CreateProfileDto = {userId: user.id, addressId: address.id, name:createUserDto.name};
    const profile = await this.profileService.create(createProfileDto)
    return user;
  }

  async findAll() {
    const response = await this.usersRepository.find()
    console.log('response====>', response)
    return await this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
