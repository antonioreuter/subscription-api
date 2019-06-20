'use strict';
interface SubscriptionSQL {
  projection: string;
  condition: string;
};

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

  required: [ 'projection' ]
}

export { SubscriptionSQL, SubscriptionSQLSchema };
