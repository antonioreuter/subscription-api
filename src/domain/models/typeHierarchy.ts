'use strict';

class TypeHierarchy {
  organization: string;
  proposition: string;
  application: string;

  constructor(data: any) {
    if (!data) throw new Error('There is no data to be parsed');
    TypeHierarchy.validate(data);

    this.organization = data.organization;
    this.proposition = data.proposition;
    this.application = data.application;
  }

  static validate(payload: any): void {

  }
}

const TypeHierarchySchema = {
  type: 'object',
  title: 'Define the type hierarchy structure',
  properties: {
    organization: {
      type: 'string',
      minimum: 3
    },
    proposition: {
      type: 'string',
      minimum: 3
    },
    application: {
      type: 'string',
      minimum: 3
    }
  },
  required: [ 'organization', 'proposition', 'application' ]
};

export { TypeHierarchy, TypeHierarchySchema };
