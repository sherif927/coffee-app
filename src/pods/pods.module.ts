import { Module } from '@nestjs/common';
import { PodsController } from './pods.controller';

@Module({
  controllers: [PodsController]
})
export class PodsModule {}
