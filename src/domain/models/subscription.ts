'use strict';

import Auditable from './auditable';
import SubscriptionSQL from './subscriptionSQL';
import TypeHierarchy from './typeHierarchy';

export default interface Subscription extends Auditable {
  id: String;
  alias: String;
  description: String;
  sql: SubscriptionSQL;
  topic: String;
  typeHierarchy: TypeHierarchy;
}
