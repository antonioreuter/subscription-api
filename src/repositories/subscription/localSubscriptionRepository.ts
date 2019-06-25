'use strict';
import Repository from '../../domain/repositories/repository';
import Subscription from '../../domain/models/subscription';

export default class LocalSubscriptionRepository implements Repository<Subscription> {
  async findById(id: string): Promise<Subscription[]> {
    throw new Error('Not implemented yet!');
  }

  async find(params: any): Promise<Subscription[]> {
    throw new Error('Not implemented yet!');
  }

  async save(data: Subscription): Promise<Subscription> {
    console.log(`Saving in the local env: ${JSON.stringify(data)}`);

    return data;
  };

  async delete(id: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }
};
