import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Machine } from 'src/models/machine';

@Injectable()
export class MachineService {
  constructor(@InjectModel('Machine') private machineModel: Model<Machine>) { }

  public getMachines(queryObj: any): Promise<Machine[]> {
    if (queryObj['water'] === 'true') queryObj['waterLineCompatible'] = true;
    delete queryObj['water'];
    return this.machineModel.find({ queryObj }).exec();
  }
}
