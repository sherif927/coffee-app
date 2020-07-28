import * as mongoose from 'mongoose';

export const MachineSchema = new mongoose.Schema({
  productType: {
    type: String,
    enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'],
    default: 'COFFEE_MACHINE_LARGE'
  },
  waterLineCompatible: {
    type: Boolean
  },
  model: {
    type: String
  }
});