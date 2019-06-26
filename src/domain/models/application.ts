'use strict';

import schemaValidator from './validators/schemaValidator';
import ApplicationSchema from './schemas/applicationSchema';

import Entity from './entity';

import IllegalArgumentError from '../errors/illegalArgumentError';

export default class Application extends Entity {
  name: string;
  description: string;
  config: object

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed!') ;
    Application.validate(data);

    super(data);

    this.name = data.name;
    this.description = data.description;
    this.config = data.config;
  }

  generateResourceId():string {
    return '#';
  }

  static validate(payload: object): boolean {
    return schemaValidator(ApplicationSchema, payload);
  }
}
