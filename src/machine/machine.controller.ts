import { Controller, Get, Query } from '@nestjs/common';
import { MachineService } from './machine.service';
import { Machine } from 'src/models/machine';

@Controller('machine')
export class MachineController {
  constructor(private machineService: MachineService) { }

  /**
   *
   * @param {*} queryObj
   * @example /api/machines?water=true&productType=COFFEE_MACHINE_LARGE
   * @returns {Promise<Machine[]>}
   * @memberof MachineController
   */
  @Get()
  getMachines(@Query() queryObj): Promise<Machine[]> {
    return this.machineService.getMachines(queryObj);
  }
}
