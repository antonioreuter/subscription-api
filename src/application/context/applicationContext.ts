'use strict';

import Factory from '../factories/factory';
import CloudFactory from '../factories/cloud/cloudFactory';
import LocalFactory from '../factories/local/localFactory';

import Repository from '../../domain/repositories/repository';
import SubscriptionService from '../../domain/services/subscription/subscriptionService';

export default class ApplicationContext {
  private factory: Factory;
  private _subscriptionRepository: Repository;
  private _subscriptionService: SubscriptionService;

  constructor(env: String) {
    this.factory = (env === 'local') ? new LocalFactory() : new CloudFactory();
  }

  subscriptionRepository(): Repository {
    if (!this._subscriptionRepository) {
      this._subscriptionRepository = this.factory.createSubscriptionRepository();
    }
    return this._subscriptionRepository;
  }

  subscriptionService(): SubscriptionService {
    if (!this._subscriptionService) {
      this._subscriptionService = this.factory.createSubscriptionService();
    }
    return this._subscriptionService;
  }
};
