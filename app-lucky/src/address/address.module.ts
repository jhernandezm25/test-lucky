import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from '../city/city.module'; 
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';

@Module({
    exports:[AddressService],
    imports:[CityModule,TypeOrmModule.forFeature([Address])],
    providers:[AddressService]
})
export class AddressModule {}
