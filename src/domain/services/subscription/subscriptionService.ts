'use strict';

import Subscription from '../../models/subscription';

export default interface SubscriptionInterface {
  save(data: Subscription): Promise<Subscription>;
  findById(id: String): Promise<Subscription>;
  delete(id: String): Promise<void>;
}
