'use strict';

import Repository from '../../domain/repositories/repository';
import SubscriptionService from '../../domain/services/subscription/subscriptionService';

export default interface Factory {
  createSubscriptionRepository(): Repository;
  createSubscriptionService(): SubscriptionService;
}
