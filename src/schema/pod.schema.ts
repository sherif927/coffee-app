import * as mongoose from 'mongoose';

export const PodSchema = new mongoose.Schema({
  productType: {
    type: String,
    enum: ['COFFEE_FLAVOR_VANILLA', 'COFFEE_FLAVOR_CARAMEL', 'COFFEE_FLAVOR_PSL', 'COFFEE_FLAVOR_MOCHA', 'COFFEE_FLAVOR_HAZLENUT'],
    default: 'COFFEE_FLAVOR_VANILLA'
  },
  packSize: {
    type: Number
  },
  model: {
    type: String
  }
});