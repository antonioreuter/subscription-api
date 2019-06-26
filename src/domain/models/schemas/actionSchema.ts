'use strict';

import { EntitySchema, entityRequiredFields} from './entitySchema';
import ConfigSchema from './configSchema';

const ActionSchema = {
  type: 'object',
  title: 'Action',
  description: 'A action to specify how to broker a message to another endpoint',
  properties: {
    ...EntitySchema,

    config: ConfigSchema
  },
  required: ['config'].concat(entityRequiredFields),
  additionalProperties: false
};

export default ActionSchema;
