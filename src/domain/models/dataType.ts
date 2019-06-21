'use strict';

import schemaValidator from './validators/schemaValidator';

import Auditable from './auditable';

import TypeHierarchy from "./typeHierarchy";
import DataTypeSchema from './schemas/dataTypeSchema';
export default class DataType extends Auditable {
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

  static validate(payload: object): boolean {
    return schemaValidator(DataTypeSchema, payload);
  }
};
