import { Module } from '@nestjs/common';
import { Security } from './security';

@Module({
    exports:[Security],
    providers:[Security]
})
export class SecurityModule {}
