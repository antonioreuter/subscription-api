'use strict';

import Repository from '../../domain/repositories/repository';
import SubscriptionService from '../../domain/services/subscription/subscriptionService';
import Subscription from '../../domain/models/subscription';

export default interface Factory {
  createSubscriptionRepository(): Repository<Subscription>;
  createSubscriptionService(): SubscriptionService;
}
