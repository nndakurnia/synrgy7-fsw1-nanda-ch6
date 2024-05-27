import { Model, ModelObject } from "objection";
import { BillDetailModel } from "./billDetail";

export class BillTypeModel extends Model {
  id!: number;
  name!: string;
  price!: number;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "bill_types";
  }
  static get relationMappings() {
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: BillDetailModel,
        join: {
          from: "bill_details.bill_type_id",
          to: "bill_types.id",
        },
      },
    };
  }
}

export type BillTypes = ModelObject<BillTypeModel>;
