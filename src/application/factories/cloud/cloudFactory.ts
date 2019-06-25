'use strict';

import AWS from 'aws-sdk';

import Factory from '../factory';

import SubscriptionService from '../../../domain/services/subscription/subscriptionService';
import SubscriptionServiceImpl from '../../../domain/services/subscription/subscriptionServiceImpl';

import Repository from '../../../domain/repositories/repository';
import SubscriptionRepository from '../../../repositories/subscription/subscriptionRepository';

import Subscription from '../../../domain/models/subscription';

export default class CloudFactory implements Factory {
  createSubscriptionRepository(): Repository<Subscription> {
    const dbClientFactory = this.createDBClientFactory();
    return new SubscriptionRepository(dbClientFactory);
  }

  createSubscriptionService(): SubscriptionService {
    return new SubscriptionServiceImpl(this.createSubscriptionRepository());
  }

  private createDBClientFactory(): any {
    const dynamoDBOptions = {
      region: process.env.AWS_DEFAULT_REGION,
      retryDelayOptions: {
        base: 100
      }
    };

    return new AWS.DynamoDB.DocumentClient(dynamoDBOptions);
  }
}
