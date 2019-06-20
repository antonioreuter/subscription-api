'use strict';

import { TypeHierarchy, TypeHierarchySchema } from "./typeHierarchy";

class DataType {
  name: string;
  description: string;
  typeHierarchy: TypeHierarchy;
  schema: string;

  validate(): void {

  }
};

const DataTypeSchema: any = {
  title: 'Represents a definition of the type of message that is expected by a subscription',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minimum: 3,
      maximum: 100
    },
    description: {
      type: 'string',
      maximum: 255
    },
    schema: {
      type: 'string'
    },
  }
};

export { DataType, DataTypeSchema };


