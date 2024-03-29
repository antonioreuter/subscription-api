'use strict';

import schemaValidator from './validators/schemaValidator';

import Auditable from './auditable';
import SubscriptionSQL from './subscriptionSQL';
import TypeHierarchy from './typeHierarchy';

import SubscriptionSchema from './schemas/subscriptionSchema';

import IllegalArgumentError from '../errors/illegalArgumentError';

export default class Subscription extends Auditable {
  id: string;
  name: string;
  description: string;
  dataTypeName: string;
  sql: SubscriptionSQL;
  typeHierarchy: TypeHierarchy;

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed!') ;
    Subscription.validate(data);

    super(data);

    this.id = data.id;
    this.name = data.name;
    this.dataTypeName = data.dataTypeName;
    this.description = data.description;
    this.sql = data.sql;
    this.typeHierarchy = new TypeHierarchy(data.typeHierarchy);
  }

  static validate(payload: object): boolean {
    return schemaValidator(SubscriptionSchema, payload);
  }
}
