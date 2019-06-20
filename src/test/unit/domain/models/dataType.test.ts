'use strict';

import { DataType } from "../../../../domain/models/dataType";
import InvalidSchemaError from "../../../../domain/errors/invalidSchemaError";

describe('DataType', () => {
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
        schema: "add meta schema"
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
          organization: '4kj23l-l3k4j5l34-lk3j4lkj5l',
          proposition: 'proposition-1',
          application: 'application-1'
        }
      };

      try {
        DataType.validate(data);
        fail();
      } catch (err) {
        expect(err instanceof InvalidSchemaError).toBeTruthy;
        expect(err.message).toMatch("Invalid data type: data should have required property 'schema'");
      }
    });
  });

  describe('#topic', () => {
    it('Return the topic name', () => {
      const data = {
        id: 'airpurifier#air_quality',
        name: 'AirQuality',
        description: 'Datatype to measure the air quality',
        typeHierarchy: {
          organization: '4kj23l-l3k4j5l34-lk3j4lkj5l',
          proposition: 'proposition-1',
          application: 'application-1'
        },
        schema: "add meta schema"
      };

      const dataType = new DataType(data);
      expect(dataType.topic()).toEqual(`${data.typeHierarchy.organization}/${data.typeHierarchy.proposition}/${data.typeHierarchy.application}/${data.name}/+`);
    });
  });
});
