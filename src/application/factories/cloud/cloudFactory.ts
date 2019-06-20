'use strict';

import Factory from '../factory';

import SubscriptionService from '../../../domain/services/subscription/subscriptionService';
import SubscriptionServiceImpl from '../../../domain/services/subscription/subscriptionServiceImpl';

import Repository from '../../../domain/repositories/repository';
import SubscriptionRepository from '../../../repositories/subscription/subscriptionRepository';

export default class CloudFactory implements Factory {
  createSubscriptionRepository(): Repository {
    return new SubscriptionRepository();
  }

  createSubscriptionService(): SubscriptionService {
    return new SubscriptionServiceImpl(new SubscriptionRepository());
  }
}
