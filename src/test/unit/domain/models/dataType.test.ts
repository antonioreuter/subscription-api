'use strict';

import DataType from "../../../../domain/models/dataType";
import InvalidSchemaError from "../../../../domain/errors/invalidSchemaError";
import IllegalArgumentError from "../../../../domain/errors/illegalArgumentError";

describe('DataType', () => {
  describe('.constructor', () => {
    it('When we create a new data type', () => {
      const data = {
        name: 'AirQuality',
        description: 'Datatype to measure the air quality',
        typeHierarchy: {
          organization: '123',
          proposition: '456',
          application: '7890'
        },
        schema: "add meta schema",
        config: {
          prop: true
        }
      };

      const dataType = new DataType(data);

      expect(dataType).toBeDefined();
      expect(dataType.id).toEqual('org_123#prop_456#app_7890');
      expect(dataType.resourceId).toMatch(/dt_.*/);
      expect(dataType).toMatchObject(data);
    });

    it('When the payload is undefined', () => {
      const data = undefined;
      try {
        const dataType = new DataType(data);
        expect(true).toBe(false); //if pass it will fail
      } catch (err) {
        expect(err instanceof IllegalArgumentError).toBe(true);
      }
    });
  });

  describe('.validate', () => {
    it('Validate schema for dataType - Happy Flow', () => {
      const data = {
        id: 'airpurifier#air_quality',
        name: 'AirQuality',
        description: 'Datatype to measure the air quality',
        typeHierarchy: {
          organization: '4kj23l-l3k4j5l34-lk3j4lkj5l',
          proposition: 'proposition-1',
          application: 'application-1'
        },
        schema: "add meta schema",
        config: {
          prop: true
        }
      };

      const result = DataType.validate(data);
      expect(result).toBe(true);
    });

    it('Validate schema for dataType - Alternate Flow', () => {
      const data = {
        id: 'airpurifier#air_quality',
        name: 'AirQuality',
        description: 'Datatype to measure the air quality',
        typeHierarchy: {
          organization: '123',
          proposition: '456',
          application: '789'
        }
      };

      try {
        DataType.validate(data);
        expect(false).toBe(true);
      } catch (err) {
        expect(err instanceof InvalidSchemaError).toBe(true);
        expect(err.message).toMatch("Invalid schema: data should have required property 'schema'");
      }
    });
  });

  describe('#topic', () => {
    it('Return the topic name', () => {
      const data = {
        id: 'org_123-456#prop_456-789#app_789-123',
        resourceId: 'dt_123-789',
        name: 'AirQuality',
        description: 'Datatype to measure the air quality',
        typeHierarchy: {
          organization: '123-456',
          proposition: '456-789',
          application: '789-123'
        },
        schema: "add meta schema",
        config: {
          prop: true
        }
      };

      const dataType = new DataType(data);
      expect(dataType.topic()).toEqual('org_123_456/prop_456_789/app_789_123/dt_123_789/+');
    });
  });
});
