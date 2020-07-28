import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PodsModule } from './pods/pods.module';
import { MachineModule } from './machine/machine.module';

@Module({
  imports: [ConfigModule.forRoot(), PodsModule, MachineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
