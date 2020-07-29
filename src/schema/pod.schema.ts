import * as mongoose from 'mongoose';

export const PodSchema = new mongoose.Schema(
  {
    productType: {
      type: String,
      enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'],
      default: 'COFFEE_POD_LARGE'
    },
    coffeeFlavor: {
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
  },
  {
    timestamps: true
  }
);