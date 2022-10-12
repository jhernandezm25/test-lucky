import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { City } from './entities/city.entity';

@Module({
    exports: [CityService],
    imports:[TypeOrmModule.forFeature([City])],
    providers:[CityService]
})
export class CityModule {}
