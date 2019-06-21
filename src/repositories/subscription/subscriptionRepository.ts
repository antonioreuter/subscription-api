'use strict';

import Repository from '../../domain/repositories/repository';

export default class SubscriptionRepository implements Repository {
  async findById(id: string): Promise<any> {
    throw new Error('Not implemented yet!');
  }

  async save(data: any): Promise<any> {
    console.log(`Saving in the cloud: ${JSON.stringify(data)}`);

    return data;
  };

  async delete(id: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }
}
