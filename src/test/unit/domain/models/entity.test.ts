'use strict';

import * as moment from 'moment';

import Entity from '../../../../domain/models/entity';

import IllegalArgumentError from "../../../../domain/errors/illegalArgumentError";

class Foo extends Entity {
  constructor(data: any) {
    super(data)
  }

  generateResourceId(): string {
    return "foo_1234";
  }
};

describe('Entity', () => {
  describe('.constructor', () => {
    it('When we create a new entity object', () => {
      const data = {
        version: 2,
        createdAt: moment.utc().format(),
        updatedAt: moment.utc().format(),
        typeHierarchy: {
          organization: '123',
          proposition: '456',
          application: '7890'
        },
      };

      const foo = new Foo(data);

      expect(foo).toBeDefined();
      expect(foo).toMatchObject(data);
      expect(foo.id).toEqual(`org_${data.typeHierarchy.organization}#prop_${data.typeHierarchy.proposition}#app_${data.typeHierarchy.application}`);
      expect(foo.version).toEqual(2);
    });

    it('When the payload does not have entity fields', () => {
      const data = {
        typeHierarchy: {
          organization: '123',
          proposition: '456',
          application: '7890'
        },
      };

      const foo = new Foo(data);

      expect(foo).toBeDefined();
      expect(foo.version).toEqual(1);
      expect(foo.createdAt).toBeDefined();
      expect(foo.updatedAt).toBeDefined();
    });

    it('When the payload is undefined', () => {
      const data = undefined;

      try {
        const foo = new Foo(data);
        expect(false).toBe(true);
      } catch (err) {
        expect(err instanceof IllegalArgumentError).toBe(true);
      }
    });
  });
});
