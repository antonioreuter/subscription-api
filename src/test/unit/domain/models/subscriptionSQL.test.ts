'use strict';

import SubscriptionSQL from '../../../../domain/models/subscriptionSQL';
import IllegalArgumentError from "../../../../domain/errors/illegalArgumentError";


describe('SubscriptionSQL', () => {
  describe('.constructor', () => {
    it('When we create a new subscription sql', () => {
      const data = {
        projection: 'id, clientId(), msg.air as air',
        condition: 'air > 60'
      };

      const subscriptionSQL = new SubscriptionSQL(data);

      expect(subscriptionSQL).toBeDefined();
      expect(subscriptionSQL).toMatchObject(data);
    });

    it('When the payload is undefined', () => {
      const data = undefined;
      try {
        const subscription = new SubscriptionSQL(data);
        expect(true).toBe(false); //if pass it will fail
      } catch (err) {
        expect(err instanceof IllegalArgumentError).toBe(true);
      }
    });
  });
});
