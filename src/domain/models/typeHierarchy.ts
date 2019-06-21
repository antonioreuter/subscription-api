'use strict';

import schemaValidator from './validators/schemaValidator';
import TypeHierarchySchema from './schemas/typeHierarchySchema';

import IllegalArgumentError from '../errors/illegalArgumentError';


export default class TypeHierarchy {
  organization: string;
  proposition: string;
  application: string;

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed');
    TypeHierarchy.validate(data);

    this.organization = data.organization;
    this.proposition = data.proposition;
    this.application = data.application;
  }

  static validate(payload: object): boolean {
    return schemaValidator(TypeHierarchySchema, payload);
  }
};
