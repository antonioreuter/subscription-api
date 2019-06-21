'use strict';

import Subscription from "../../../../domain/models/subscription";
import InvalidSchemaError from "../../../../domain/errors/invalidSchemaError";
import IllegalArgumentError from "../../../../domain/errors/illegalArgumentError";

describe('Subscription', () => {
  describe('.constructor', () => {
    it('When we create a new subscription', () => {
      const data = {
        id: 'airpurifier#air_quality',
        createdAt: '2019-06-18T19:30:00+1:00',
        version: 1,
        name: 'AirQuality',
        description: 'Measure the air quality',
        dataTypeName: 'airpurifier#air_quality#air',
        sql: {
          projection: 'id, clientId(), msg.air as air',
          condition: 'air > 60'
        },
        typeHierarchy: {
          organization: '4kj23l-l3k4j5l34-lk3j4lkj5l',
          proposition: 'rjwelkrjwe',
          application: 'rjelwkjrlwe'
        }
      };

      const subscription = new Subscription(data);

      expect(subscription).toBeDefined();
      expect(subscription).toMatchObject(data);
    });

    it('When the payload is undefined', () => {
      const data = undefined;
      try {
        const subscription = new Subscription(data);
        expect(true).toBe(false); //if pass it will fail
      } catch (err) {
        expect(err instanceof IllegalArgumentError).toBe(true);
      }
    });
  });

  describe('.validate', () => {
    it('Validate schema for subscription - Happy Flow', () => {
      const data = {
        id: 'airpurifier#air_quality',
        createdAt: '2019-06-18T19:30:00+1:00',
        version: 1,
        name: 'AirQuality',
        description: 'Measure the air quality',
        dataTypeName: 'airpurifier#air_quality#air',
        sql: {
          projection: 'id, clientId(), msg.air as air',
          condition: 'air > 60'
        },
        typeHierarchy: {
          organization: '4kj23l-l3k4j5l34-lk3j4lkj5l',
          proposition: 'rjwelkrjwe',
          application: 'rjelwkjrlwe'
        }
      };

      const result = Subscription.validate(data);
      expect(result).toBe(true);
    });

    it('Validate schema for subscription - Alternate Flow', () => {
      const data = {
        id: 'airpurifier#air_quality',
        createdAt: '2019-06-18T19:30:00+1:00',
        version: 1,
        name: 'AirQuality',
        description: 'Measure the air quality',
        sql: {
          projection: 'id, clientId(), msg.air as air',
          condition: 'air > 60'
        },
        typeHierarchy: {
          organization: 'organization1',
          proposition: 'proposition1',
          application: 'application1'
        }
      };

      try {
        Subscription.validate(data);
        expect(true).toBe(false);
      } catch(err) {
        expect(err instanceof InvalidSchemaError).toBe(true);
        expect(err.message).toBe("Invalid schema: data should have required property 'dataTypeName'");
      }
    });
  });
});
