import { Document } from 'mongoose';

export interface Machine extends Document {
  productType: string;
  waterLineCompatible: boolean;
  modelName: string;
}