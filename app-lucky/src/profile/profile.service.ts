import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>){}

    create(createProfileDto:CreateProfileDto) {
        return this.profileRepository.save(createProfileDto)
    }
}
