'use strict';

import AuditableSchema from './auditableSchema';
import TypeHierarchySchema from './typeHierarchySchema';
import SubscriptionSQLSchema from './subscriptionSQLSchema';

const SubscriptionSchema: object = {
  type: 'object',
  title: 'Subscription',
  description: 'A subscription to define an iot-rule',
  properties: {
    id: {
      type: 'string'
    },

    ...AuditableSchema,

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

    dataTypeName: {
      type: 'string',
      minLength: 3
    },

    typeHierarchy: TypeHierarchySchema
  },

  required: ['name', 'sql', 'dataTypeName', 'typeHierarchy'],
  additionalProperties: false
};

export default SubscriptionSchema;
