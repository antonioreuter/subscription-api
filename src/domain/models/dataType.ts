'use strict';

import { generate as idGenerator} from './util/idGenerator';
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
    const topicPrefix = this.id.replace(/#/g, '/');
    const topic = `${topicPrefix}/${this.resourceId}/+`.replace(/-/g,'_');

    return topic;
  }

  generateResourceId(data: any): string {
    return `dt_${idGenerator()}`;
  }

  static validate(payload: object): boolean {
    return schemaValidator(DataTypeSchema, payload);
  }
};
