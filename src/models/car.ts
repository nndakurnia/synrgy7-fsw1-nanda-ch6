

import { Model } from 'objection';

export class CarsModel extends Model {
  static tableName = 'cars';

  id!: number;
  name!: string;
  price!: number;
  img!: string;
  status!: boolean;
}

export interface Car {
  name: string;
  price: number;
  status: boolean;
}

