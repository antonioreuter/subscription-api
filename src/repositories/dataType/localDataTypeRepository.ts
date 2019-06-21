'use strict';

import Repository from "domain/repositories/repository";

export default class LocalDataTypeRepository implements Repository {
  findById(id: string): Promise<any> {
    throw new Error('Not implemented yet!');
  }

  save(data: any): Promise<any> {
    console.log(`Saving in the local env: ${JSON.stringify(data)}`);

    return data;
  };

  delete(id: string): Promise<void> {
    throw new Error('Not implemented yet!');
  }
};
