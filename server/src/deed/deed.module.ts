import { Module } from '@nestjs/common';
import { DeedService } from './deed.service';
import { DeedController } from './deed.controller';

@Module({
  providers: [DeedService],
  controllers: [DeedController]
})
export class DeedModule {}
