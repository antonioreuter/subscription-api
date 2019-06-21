'use strict';

import Auditable from './auditable';
import ActionType from './actionType';

export default abstract class Action extends Auditable {
  id: string;
  type: ActionType;
  subscriptionId: string;
  config: any;

  abstract schema(): boolean;
  abstract configTemplate(): any;
}
