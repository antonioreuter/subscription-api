'use strict';

import { EntitySchema, entityRequiredFields} from './entitySchema';
import ConfigSchema from './configSchema';

const DataTypeSchema: object = {
  title: 'Represents a definition of the type of message that is expected by a subscription',
  type: 'object',
  properties: {
    ...EntitySchema,

    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100
    },
    description: {
      type: 'string',
      maxLength: 255
    },

    schema: {
      type: 'string'
    },

    config: ConfigSchema
  },
  required: ['name', 'schema', 'config'].concat(entityRequiredFields),
  additionalProperties: false
};

export default DataTypeSchema;
