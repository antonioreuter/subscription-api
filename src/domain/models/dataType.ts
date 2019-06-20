'use strict';

import Ajv from 'ajv';

import { TypeHierarchy, TypeHierarchySchema } from "./typeHierarchy";
import InvalidSchemaError from '../errors/invalidSchemaError';
import { AuditableSchema, Auditable } from './auditable';

class DataType extends Auditable {
  id: string;
  name: string;
  description: string;
  typeHierarchy: TypeHierarchy;
  schema: string;

  constructor(data: any) {
    if (!data) throw new Error('There is no data to be parsed - Data Type!');
    DataType.validate(data);

    super(data);

    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.typeHierarchy = new TypeHierarchy(data.typeHierarchy);
    this.schema = data.schema;
  }

  topic(): string {
    if (!this.name || !this.typeHierarchy) throw new Error('It is not possible to define the topic name. The type hierarchy and dataType name must be defined first.');
    const topicPrefix = [this.typeHierarchy.organization, this.typeHierarchy.proposition, this.typeHierarchy.application, this.name].join('/');
    return `${topicPrefix}/+`;
  }

  static validate(payload): Boolean {
    const ajv = new Ajv();
    const valid = ajv.validate(DataTypeSchema, payload);
    if (!valid) {
      const errorMsg = `Invalid data type: ${ajv.errorsText()}`;
      throw new InvalidSchemaError(errorMsg);
    }

    return true;
  }
};

const DataTypeSchema: any = {
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
  required: [ 'name', 'typeHierarchy', 'schema'],
  additionalProperties: false
};

export { DataType, DataTypeSchema };


