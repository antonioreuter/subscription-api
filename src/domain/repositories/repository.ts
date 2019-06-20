'use strict';

export default interface Repository {
  findById(id: String): Promise<any>;
  save(data: any): Promise<any>;
  delete(id: String): Promise<void>;
}
