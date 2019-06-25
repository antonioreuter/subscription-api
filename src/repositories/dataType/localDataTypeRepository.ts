'use strict';

import Repository from "domain/repositories/repository";
import DataType from 'domain/models/dataType';

export default class LocalDataTypeRepository implements Repository<DataType> {
  async findById(id: string): Promise<DataType[]> {
    throw new Error('Not implemented yet!');
  }

  async find(params: any): Promise<DataType[]> {
    throw new Error('Not implemented yet!');
  }

  async save(data: DataType): Promise<DataType> {
    console.log(`Saving in the local env: ${JSON.stringify(data)}`);

    return data;
  };

  async delete(id: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }
};
