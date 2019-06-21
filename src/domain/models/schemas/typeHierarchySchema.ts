'use strict';

const TypeHierarchySchema = {
  type: 'object',
  title: 'Define the type hierarchy structure',
  properties: {
    organization: {
      type: 'string',
      minimum: 3
    },
    proposition: {
      type: 'string',
      minimum: 3
    },
    application: {
      type: 'string',
      minimum: 3
    }
  },
  required: ['organization', 'proposition', 'application']
};

export default TypeHierarchySchema;
