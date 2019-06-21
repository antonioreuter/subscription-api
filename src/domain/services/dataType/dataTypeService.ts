'use strict';

import { DataType } from "domain/models/dataType";

export default interface DataTypeService {
  save(data: object): Promise<DataType>;
};
