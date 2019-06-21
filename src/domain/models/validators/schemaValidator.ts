'use strict';

import Ajv from 'ajv';
import InvalidSchemaError from '../../errors/invalidSchemaError';

const schemaValidator = (schema: object, payload: object): boolean => {
  const ajv = new Ajv({ allErrors: true });
  const valid = ajv.validate(schema, payload);
  if (!valid) {
    const errorMsg = `Invalid schema: ${ajv.errorsText()}`;
    throw new InvalidSchemaError(errorMsg);
  }

  return true;
}

export default schemaValidator;
