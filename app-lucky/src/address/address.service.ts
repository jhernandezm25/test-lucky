import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { CityService } from '../city/city.service';

@Injectable()
export class AddressService {
    constructor(@InjectRepository(Address) private addressRepository: Repository<Address>,
        private cityService: CityService
    ) { }

    create(createAddressDto: CreateAddressDto) {
        const city = this.cityService.findOne(createAddressDto.cityId);
        if (!city) {
          //  return {status:'error', message:"city not found"}
        }
        return this.addressRepository.save(createAddressDto)
    }
}
