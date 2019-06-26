'use strict';

import { EntitySchema, entityRequiredFields } from './entitySchema';
import ConfigSchema from './configSchema';

const ApplicationSchema: object = {
  type: 'object',
  title: 'Application',
  description: 'A application to hold all the subscriptions',
  properties: {
    ...EntitySchema,

    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      description: "The application's name"
    },

    description: {
      type: 'string',
      maxLength: 255,
      description: "The application's description"
    },

    config: ConfigSchema
  },

  required: ['name', 'typeHierarchy', 'config'].concat(entityRequiredFields),
  additionalProperties: false
};

export default ApplicationSchema;
