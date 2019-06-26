'use strict';

import { v1 as uuidV1 } from 'uuid';

import schemaValidator from './validators/schemaValidator';

import Entity from './entity';
import SubscriptionSQL from './subscriptionSQL';

import SubscriptionSchema from './schemas/subscriptionSchema';

import IllegalArgumentError from '../errors/illegalArgumentError';

export default class Subscription extends Entity {
  name: string;
  description: string;
  dataTypeResourceId: string;
  sql: SubscriptionSQL;
  config: object;

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed!') ;
    Subscription.validate(data);

    super(data);

    this.name = data.name;
    this.dataTypeResourceId = data.dataTypeResourceId;
    this.description = data.description;
    this.sql = data.sql;
    this.config = data.config;
  }

  generateResourceId(data: any):string {
    return `${data.dataTypeResourceId}#sub_${uuidV1()}`;
  }

  static validate(payload: object): boolean {
    return schemaValidator(SubscriptionSchema, payload);
  }
}
