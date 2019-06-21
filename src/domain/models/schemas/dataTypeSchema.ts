'use strict';

import AuditableSchema from './auditableSchema';
import TypeHierarchySchema from './typeHierarchySchema';

const DataTypeSchema: object = {
  title: 'Represents a definition of the type of message that is expected by a subscription',
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100
    },
    description: {
      type: 'string',
      maxLength: 255
    },

    ...AuditableSchema,

    typeHierarchy: TypeHierarchySchema,
    schema: {
      type: 'string'
    },
  },
  required: ['name', 'typeHierarchy', 'schema'],
  additionalProperties: false
};

export default DataTypeSchema;
