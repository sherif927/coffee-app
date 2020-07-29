import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pod } from 'src/models/pod';
import { Model } from 'mongoose';

@Injectable()
export class PodsService {
  constructor(@InjectModel('Pod') private podModel: Model<Pod>) { }

  public getPods(queryObj: any): Promise<Pod[]> {
    if (queryObj['pack']) queryObj['packSize'] = parseInt(queryObj['pack']);
    delete queryObj['pack'];
    return this.podModel.find({ queryObj }).exec();
  }
}
