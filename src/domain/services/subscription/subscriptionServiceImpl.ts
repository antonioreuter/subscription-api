'use strict';

import Repository from '../../repositories/repository';
import SubscriptionService from './subscriptionService';
import Subscription from '../../models/subscription';

export default class SubscriptionServiceImpl implements SubscriptionService {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  save(data: any): Promise<Subscription> {
    console.log('Invoking subscription service impl...');
    const subscription = new Subscription(data);

    console.log(`Type: ${subscription.constructor.name}`)


    return this.repository.save(subscription);
  }

  findById(id: String): Promise<Subscription> {
    throw new Error('Method findById not implemented yet!');
  }
  delete(id: String): Promise<void> {
    throw new Error('Method delete not implemented yet!');
  }
}
