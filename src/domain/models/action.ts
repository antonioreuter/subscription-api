'use strict';

import Auditable from './auditable';
import ActionType from './actionType';

export default interface Action extends Auditable {
  id: String;
  type: ActionType; //create an enum
  config: any;
}
