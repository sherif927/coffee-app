import { Document } from 'mongoose';

export interface Pod extends Document {
  coffeeFlavor: string;
  productType: string;
  packSize: number;
  modelName: string;
}