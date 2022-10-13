import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { ProfileController } from './profile.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Profile])],
    providers: [ProfileService],
    exports: [ProfileService],
    controllers: [ProfileController],
})
export class ProfileModule {}
