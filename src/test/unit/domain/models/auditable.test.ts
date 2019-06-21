'use strict';

import * as moment from 'moment';

import Auditable from '../../../../domain/models/auditable';

import IllegalArgumentError from "../../../../domain/errors/illegalArgumentError";

class Foo extends Auditable {
  constructor(data: any) {
    super(data)
  }
};


describe('Auditable', () => {
  describe('.constructor', () => {
    it('When we create a new auditable object', () => {
      const data = {
        version: 2,
        createdAt: moment.utc().format(),
        updatedAt: moment.utc().format()
      };

      const foo = new Foo(data);

      expect(foo).toBeDefined();
      expect(foo).toMatchObject(data);
      expect(foo.version).toEqual(2);
    });

    it('When the payload does not have auditable fields', () => {
      const data = {};

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
