'use strict';

import Repository from '../../repositories/repository';
import SubscriptionService from './subscriptionService';
import Subscription from '../../models/subscription';

export default class SubscriptionServiceImpl implements SubscriptionService {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  save(data: Subscription): Promise<Subscription> {
    console.log('Invoking subscription service impl...');
    return this.repository.save(data);
  }

  findById(id: String): Promise<Subscription> {
    throw new Error('Method findById not implemented yet!');
  }
  delete(id: String): Promise<void> {
    throw new Error('Method delete not implemented yet!');
  }
}
