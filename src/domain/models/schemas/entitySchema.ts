'use strict';

import TypeHierarchySchema from './typeHierarchySchema';

const EntitySchema = {
  id: {
    type: 'string'
  },
  resourceId: {
    type: 'string'
  },
  version: {
    type: 'number'
  },

  createdAt: {
    type: 'string'
  },

  updatedAt: {
    type: 'string'
  },

  typeHierarchy: TypeHierarchySchema
};

const entityRequiredFields: string[] = ['typeHierarchy'];

export { EntitySchema, entityRequiredFields };
