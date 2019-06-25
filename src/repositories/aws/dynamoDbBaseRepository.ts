'use strict';

import AWS from 'aws-sdk';
import Repository from '../../domain/repositories/repository';

export default abstract class DynamoDbBaseRepository<T>  implements Repository<T> {

  private _dbClientFactory: AWS.DynamoDB.DocumentClient;

  constructor(dbClientFactory: any) {
    if (!(dbClientFactory instanceof AWS.DynamoDB.DocumentClient)) throw new Error('Is expected an DynamoDB DocumentClient as dbClientFactory');
    this._dbClientFactory = dbClientFactory;
  }

  abstract async findById(id: string): Promise<T[]>;
  abstract async find(id: string): Promise<T[]>;
  abstract async save(data: T): Promise<T>;
  abstract delete(id: string): Promise<void>;
};
