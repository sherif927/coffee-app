import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';
import { MachineSchema } from 'src/schema/machine.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Machine', schema: MachineSchema }])],
  controllers: [MachineController],
  providers: [MachineService]
})
export class MachineModule { }
