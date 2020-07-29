import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PodsController } from './pods.controller';
import { PodsService } from './pods.service';
import { PodSchema } from 'src/schema/pod.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pod', schema: PodSchema }])],
  controllers: [PodsController],
  providers: [PodsService]
})
export class PodsModule { }
