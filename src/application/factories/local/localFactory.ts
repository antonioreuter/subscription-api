'use strict';

import Factory from '../factory';

import SubscriptionService from '../../../domain/services/subscription/subscriptionService';
import SubscriptionServiceImpl from '../../../domain/services/subscription/subscriptionServiceImpl';

import Repository from '../../../domain/repositories/repository';
import LocalSubscriptionRepository from '../../../repositories/subscription/localSubscriptionRepository';

export default class CloudFactory implements Factory {
  createSubscriptionRepository(): Repository {
    return new LocalSubscriptionRepository();
  }

  createSubscriptionService(): SubscriptionService {
    return new SubscriptionServiceImpl(new LocalSubscriptionRepository());
  }
}
