'use strict';

import IllegalArgumentError from '../errors/illegalArgumentError';

export default class SubscriptionSQL {
  projection: string;
  condition: string;

  constructor(data: any) {
    if (!data) throw new IllegalArgumentError('There is no data to be parsed - SubscriptionSQL');

    this.projection = data.projection;
    this.condition = data.condition;
  }
};
