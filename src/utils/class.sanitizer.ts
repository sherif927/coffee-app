import { Document } from 'mongoose';

export class ModelSanatizer {

  /**
   *
   * @static
   * @template T
   * @param {T} model
   * @param {string[]} fields
   * @returns {T}
   * @memberof ModelSanatizer
   */
  static desanatizeModel<T extends Document>(model: T, fields: string[]): T {
    const sanitizedObj = model.toObject();
    fields.forEach(field => delete sanitizedObj[field])
    return sanitizedObj;
  }
}