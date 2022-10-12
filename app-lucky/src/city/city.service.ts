import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
    constructor( @InjectRepository(City) private cityRepository: Repository<City>){}

    findOne(id:number){
        return this.cityRepository.findOne({where:{id:id}})
    }
}
