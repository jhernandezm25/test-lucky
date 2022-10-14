import { Controller, Get, Param, UseGuards, CacheInterceptor, UseInterceptors, CacheTTL } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

    constructor(private readonly profileService: ProfileService) { }

    @UseInterceptors(CacheInterceptor)
    @CacheTTL(30) // override TTL to 30 seconds
    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.profileService.findOneByUserId(id);
    }
}
