'use strict';

import Subscription from '../../models/subscription';

export default interface SubscriptionInterface {
  save(data: Subscription): Promise<Subscription>;
  findById(id: string): Promise<Subscription>;
  delete(id: string): Promise<void>;
}
