'use strict';

import * as moment from 'moment';
import IllegalArgumentError from '../errors/illegalArgumentError';
import TypeHierarchy from './typeHierarchy';

const defaultObject = {
  version: 1,
  createdAt: moment.utc().format(),
  updatedAt: moment.utc().format()
}

export default abstract class Entity {
  id: string;
  resourceId: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  typeHierarchy: TypeHierarchy;

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed - Entity');
    if (!data.typeHierarchy) throw new IllegalArgumentError('The type hierarchy property cannot be empty.');

    this.id = data.id || this.generateId(data);
    this.resourceId = data.resourceId || this.generateResourceId(data);
    this.version = data.version || defaultObject.version;
    this.createdAt = data.createdAt || defaultObject.createdAt;
    this.updatedAt = data.updatedAt || defaultObject.updatedAt;
    this.typeHierarchy = data.typeHierarchy
  }

  private generateId(data: any): string {
    return `org_${data.typeHierarchy.organization}#prop_${data.typeHierarchy.proposition}#app_${data.typeHierarchy.application}`;
  }

  abstract generateResourceId(data: any): string;
};
