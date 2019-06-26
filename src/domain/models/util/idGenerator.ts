'use strict';

import { v1 as uuidV1} from 'uuid';

const generate = () => {
  const tokens = uuidV1().split('-');
  return `${tokens[0]}_${tokens[1]}`;
}

export { generate };
