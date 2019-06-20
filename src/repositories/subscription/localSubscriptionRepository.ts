'use strict';
import Repository from '../../domain/repositories/repository';

export default class LocalSubscriptionRepository implements Repository {
  findById(): Promise<any> {
    throw new Error('Not implemented yet!');
  }

  save(data: any): Promise<any> {
    console.log(`Saving in the local env: ${JSON.stringify(data)}`);

    return data;
  };

  delete(id: String): Promise<void> {
    throw new Error('Not implemented yet!');
  }
}
