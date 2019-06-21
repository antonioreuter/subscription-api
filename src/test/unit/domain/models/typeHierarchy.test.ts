'use strict';

import TypeHierarchy from "../../../../domain/models/typeHierarchy";
import InvalidSchemaError from "../../../../domain/errors/invalidSchemaError";
import IllegalArgumentError from "../../../../domain/errors/illegalArgumentError";

describe('TypeHierarchy', () => {
  describe('.constructor', () => {
    it('When we create a new type hierarchy', () => {
      const data = {
        organization: 'organization-1',
        proposition: 'proposition-1',
        application: 'application-1'
      };

      const typeHierarchy = new TypeHierarchy(data);

      expect(typeHierarchy).toBeDefined();
      expect(typeHierarchy).toMatchObject(data);
    });

    it('When the payload is undefined', () => {
      const data = undefined;
      try {
        const typeHierarchy = new TypeHierarchy(data);
        expect(true).toBe(false); //if pass it will fail
      } catch (err) {
        expect(err instanceof IllegalArgumentError).toBeTruthy;
      }
    });
  });

  describe('.validate', () => {
    it('Validate schema for type hierarchy - Happy Flow', () => {
      const data = {
        organization: 'organization-1',
        proposition: 'proposition-1',
        application: 'application-1'
      };

      const result = TypeHierarchy.validate(data);
      expect(result).toBe(true);
    });

    it('Validate schema for type hierarchy - Alternate Flow', () => {
      const data = {
        proposition: 'proposition-1',
        application: 'application-1'
      };

      try {
        TypeHierarchy.validate(data);
        expect(true).toBe(false);
      } catch (err) {
        expect(err instanceof InvalidSchemaError).toBeTruthy;
        expect(err.message).toBe("Invalid schema: data should have required property 'organization'");
      }
    });
  });
});
