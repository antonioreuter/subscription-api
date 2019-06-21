'use strict';

import * as moment from 'moment';
import IllegalArgumentError from '../errors/illegalArgumentError';


const defaultObject = {
  version: 1,
  createdAt: moment.utc().format(),
  updatedAt: moment.utc().format()
}

export default abstract class Auditable {
  version: number;
  createdAt: string;
  updatedAt: string;

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed - Auditable');

    this.version = data.version || defaultObject.version;
    this.createdAt = data.createdAt || defaultObject.createdAt;
    this.updatedAt = data.updatedAt || defaultObject.updatedAt;
  }
};
