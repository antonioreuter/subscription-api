'use strict';

import DynamoDbBaseRepository from '../aws/dynamoDbBaseRepository';
import DataType from "domain/models/dataType";

export default class DataTypeRepository extends DynamoDbBaseRepository<DataType> {
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
