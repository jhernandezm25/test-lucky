import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Response, StatusCode, } from '../utils/response';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>) { }

    create(createProfileDto: CreateProfileDto) {
        return this.profileRepository.save(createProfileDto)
    }

    async findOneByUserId(userId: number) {
        const response: Response = {}
        const query = `select p.id, p.name, a.street, c.name as city , d.name as country from lucky.profile p
        inner join lucky.address a
        inner join lucky.city c
        inner join lucky.country d
        on  p.addressId = a.id
        and a.cityId = c.id
        and c.countryId = d.id
        and p.userId = '${userId}';`
        const queryResult = await this.profileRepository.query(query);
        response.statusCode = StatusCode.Success
        queryResult.length > 0 ? response.data = this.formatProfileData(queryResult[0]) : response.data = {}
        return response
    }

    private formatProfileData(data: any) {
        const response: any = {};
        response.id = data.id
        response.name = data.name;
        response.address = {
            "street": data.street,
            "city": data.city,
            "country": data.country
        }
        return response
    }
}
