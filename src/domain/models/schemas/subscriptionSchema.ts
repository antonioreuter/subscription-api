'use strict';

import { EntitySchema, entityRequiredFields } from './entitySchema';
import SubscriptionSQLSchema from './subscriptionSQLSchema';
import ConfigSchema from './configSchema';

const SubscriptionSchema: object = {
  type: 'object',
  title: 'Subscription',
  description: 'A subscription to define an iot-rule',
  properties: {
    ...EntitySchema,

    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      description: "The subscription's name"
    },

    description: {
      type: 'string',
      maxLength: 255
    },

    sql: SubscriptionSQLSchema,

    dataTypeResourceId: {
      type: 'string',
      minLength: 5
    },

    config: ConfigSchema
  },

  required: ['name', 'sql', 'dataTypeResourceId', 'config'].concat(entityRequiredFields),
  additionalProperties: false
};

export default SubscriptionSchema;
