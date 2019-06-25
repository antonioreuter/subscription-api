'use strict';

export default interface Repository<T> {
  findById(id: string): Promise<T[]>;
  find(params: any): Promise<T[]>
  save(data: T): Promise<T>;
  delete(id: string): Promise<void>;
}
