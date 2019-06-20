'use strict';

import * as ajv from 'ajv';

import Auditable from './auditable';
import { SubscriptionSQL, SubscriptionSQLSchema } from './subscriptionSQL';
import { TypeHierarchy, TypeHierarchySchema } from './typeHierarchy';
import InvalidSchemaError from 'domain/errors/invalidSchemaError';

const schema = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  '$id': 'http://example.com/product.schema.json',
  type: 'object',
  title: 'Subscription',
  description: 'A subscription to define an iot-rule',
  properties: {
    id: {
      type: 'string',
    },

    alias: {
      type: 'string',
      minimum: 3,
      maximum: 100,
      description: 'An alias to reference a subscription'
    },

    description: {
      type: 'string',
      maximum: 255
    },

    sql: SubscriptionSQLSchema,

    dataTypeName: {
      type: 'string',
      minimum: 3
    },

    typeHierarchy: TypeHierarchySchema
  },

  required: [ 'alias', 'sql', 'dataTypeName', 'typeHierarchy' ]
};

const _ajv = new ajv();

export default class Subscription extends Auditable {
  id: string;
  alias: string;
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
    this.alias = data.alias;
    this.dataTypeName = data.dataTypeName;
    this.sql = data.sql;
    this.typeHierarchy = new TypeHierarchy(data.typeHierarchy);
  }

  topic(): string {
    if (!this.dataTypeName || !this.typeHierarchy) throw new Error('It is not possible to define the topic name. The type hierarchy and dataType must be defined first.');
    const topicPrefix = [this.typeHierarchy.organization, this.typeHierarchy.proposition, this.typeHierarchy.application, this.dataTypeName].join('/');
    return `${topicPrefix}/+`;
  }

  static validate(payload): void {
    try {
      console.log('Validating subscriptions schema');
      console.log(`Schema: ${JSON.stringify(schema)}`);
      _ajv.validate(schema, payload);
    } catch (error) {
      throw new InvalidSchemaError(error.message);
    }
  }
}
