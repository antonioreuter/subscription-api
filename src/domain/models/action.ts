'use strict';

import { v1 as uuidV1 } from 'uuid';

import schemaValidator from './validators/schemaValidator';
import ActionSchema from './schemas/actionSchema';

import Entity from './entity';
import ActionType from './actionType';

import IllegalArgumentError from '../errors/illegalArgumentError';


export default abstract class Action extends Entity {
  type: ActionType;
  subscriptionResourceId: string;
  config: any;

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed - Data Type!');
    Action.validate(data);

    super(data);

    this.type = data.type;
    this.subscriptionResourceId = data.subscriptionResourceId
    this.config = data.config;
  }

  abstract schema(): boolean;
  abstract configTemplate(): any;

  generateResourceId(data: any):string {
    return `${data.subscriptionResourceId}#act_${uuidV1()}`;
  }

  static validate(payload: object): boolean {
    return schemaValidator(ActionSchema, payload);
  }
}
