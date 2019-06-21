'use strict';

import DataTypeService from "./dataTypeService";
import DataType from "domain/models/dataType";

export default class DataTypeServiceImpl implements DataTypeService {
  async save(data: object): Promise<DataType>  {
    return new DataType(data);
  }
};
