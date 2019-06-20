'use strict';

import SubscriptionService from '../../domain/services/subscription/subscriptionService';
import ApplicationContext from '../../application/context/applicationContext';

const applicationContext = new ApplicationContext(process.env.NODE_ENV);

const subscriptionService: SubscriptionService = applicationContext.subscriptionService();

export const main = async (event: any, context: any) => {
  console.log(`Payload: ${JSON.stringify(event)}`);
  const result = await subscriptionService.save(event);
  console.log(`Result: ${JSON.stringify(result)}`);
};
