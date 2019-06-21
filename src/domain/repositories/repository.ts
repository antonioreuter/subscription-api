'use strict';

export default interface Repository {
  findById(id: string): Promise<any>;
  save(data: any): Promise<any>;
  delete(id: string): Promise<void>;
}
