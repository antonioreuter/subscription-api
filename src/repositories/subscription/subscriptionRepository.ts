'use strict';

import Subscription from '../../domain/models/subscription';
import DynamoDbBaseRepository from '../aws/dynamoDbBaseRepository';

export default class SubscriptionRepository extends DynamoDbBaseRepository<Subscription> {
  constructor(dbClientFactory: any) {
    super(dbClientFactory);
  }

  async findById(id: string): Promise<Subscription[]> {
    throw new Error('Not implemented yet!');
  }

  async find(params: any): Promise<Subscription[]> {
    throw new Error('Not implemented yet!');
  }

  async save(data: Subscription): Promise<Subscription> {
    console.log(`Saving in the cloud: ${JSON.stringify(data)}`);

    return data;
  };

  async delete(id: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }
}
