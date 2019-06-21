'use strict';

const SubscriptionSQLSchema = {
  type: 'object',
  title: 'SubscriptionSQL',
  description: 'A sql to query the message that is sent to an iot topic',
  properties: {
    projection: {
      type: 'string',
      minimum: 5,
      maximum: 500
    },
    condition: {
      type: 'string'
    }
  },

  required: ['projection']
};

class SubscriptionSQL {
  projection: string;
  condition: string;

  constructor(data: any) {
    if (!data) throw new Error('There is no data to be parsed - SubscriptionSQL');

    this.projection = data.projection;
    this.condition = data.condition;
  }
};



export { SubscriptionSQL, SubscriptionSQLSchema };
