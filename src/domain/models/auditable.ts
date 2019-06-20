'use strict';

import * as moment from 'moment';

const defaultObject = {
  version: 1,
  createdAt: moment.utc().format(),
  updatedAt: moment.utc().format()
}

const AuditableSchema = {
  version: {
    type: 'string'
  },

  createdAt: {
    type: 'string'
  },

  updatedAt: {
    type: 'string'
  }
};

abstract class Auditable {
  version: number;
  createdAt: string;
  updatedAt: string;

  constructor(data = defaultObject) {
    if (!data) throw new Error('There is no data to be parsed');
    this.version = data.version;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
};

export { AuditableSchema, Auditable };
