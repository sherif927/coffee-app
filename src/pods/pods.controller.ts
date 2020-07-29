import { Controller, Post, Query, Get } from '@nestjs/common';
import { PodsService } from './pods.service';
import { Pod } from 'src/models/pod';

@Controller('pods')
export class PodsController {
  constructor(private podService: PodsService) { }

  /**
   *
   * @param {*} queryObj
   * @example /api/pods?packSize=7&productType=COFFEE_POD_LARGE
   * @returns {Promise<Pod[]>}
   * @memberof PodsController
   */
  @Get()
  getPods(@Query() queryObj): Promise<Pod[]> {
    return this.podService.getPods(queryObj);
  }
}
