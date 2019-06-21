'use strict';

import SubscriptionService from '../../domain/services/subscription/subscriptionService';
import ApplicationContext from '../../application/context/applicationContext';

const env: string = process.env.NODE_ENV || ''

const applicationContext = new ApplicationContext(env);

const subscriptionService: SubscriptionService = applicationContext.subscriptionService();

export const main = async (event: any, context: any): Promise<any> => {
  console.log(`Payload: ${JSON.stringify(event)}`);
  const result = await subscriptionService.save(event);
  console.log(`Result: ${JSON.stringify(result)}`);

  return true;
};
