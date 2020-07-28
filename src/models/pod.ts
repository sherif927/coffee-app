import { Document } from 'mongoose';

export interface Pod extends Document {
  productType: string;
  packSize: number;
  modelName: string;
}