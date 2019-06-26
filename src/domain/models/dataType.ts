'use strict';

import { v1 as uuidV1 } from 'uuid';
import schemaValidator from './validators/schemaValidator';

import Entity from './entity';

import DataTypeSchema from './schemas/dataTypeSchema';

import IllegalArgumentError from '../errors/illegalArgumentError';

export default class DataType extends Entity {
  name: string;
  description: string;
  schema: string;
  config: object

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed - Data Type!');
    DataType.validate(data);

    super(data);

    this.name = data.name;
    this.description = data.description;
    this.schema = data.schema;
    this.config = data.config;
  }

  topic(): string {
    const topicPrefix = [this.typeHierarchy.organization, this.typeHierarchy.proposition, this.typeHierarchy.application, this.name].join('/');
    return `${topicPrefix}/+`;
  }

  generateResourceId(data: any): string {
    return `dt_${uuidV1()}`;
  }

  static validate(payload: object): boolean {
    return schemaValidator(DataTypeSchema, payload);
  }
};
