'use strict';

import Ajv from 'ajv';

import { AuditableSchema, Auditable } from './auditable';
import { SubscriptionSQL, SubscriptionSQLSchema } from './subscriptionSQL';
import { TypeHierarchy, TypeHierarchySchema } from './typeHierarchy';
import InvalidSchemaError from '../errors/invalidSchemaError';

const schema: object = {
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

  required: [ 'name', 'sql', 'dataTypeName', 'typeHierarchy' ],
  additionalProperties: false
};

export default class Subscription extends Auditable {
  id: string;
  name: string;
  description: string;
  dataTypeName: string;
  sql: SubscriptionSQL;
  typeHierarchy: TypeHierarchy;

  constructor(data: any) {
    if (!data) throw new Error('There is no data to be parsed!') ;
    Subscription.validate(data);

    console.log(`Calling super of Subscription`);
    super(data);

    this.id = data.id;
    this.name = data.name;
    this.dataTypeName = data.dataTypeName;
    this.sql = data.sql;
    this.typeHierarchy = new TypeHierarchy(data.typeHierarchy);
  }

  static validate(payload: object): boolean {
    const ajv = new Ajv({ allErrors: true });
    const valid = ajv.validate(schema, payload);
    if (!valid) {
      const errorMsg = `Invalid subscription: ${ajv.errorsText()}`;
      throw new InvalidSchemaError(errorMsg);
    }

    return true;
  }
}
