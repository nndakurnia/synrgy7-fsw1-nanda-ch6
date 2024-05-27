import { Model, ModelObject } from "objection";
import { BillModel } from "./bill";
import { BillTypeModel } from "./billType";

export class BillDetailModel extends Model {
  id!: number;
  bill_id!: number;
  bill_type_id!: number;
  amount!: number;
  total_price!: number;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "bill_details";
  }
  static get relationMappings() {
    return {
      bill: {
        relation: Model.BelongsToOneRelation,
        modelClass: BillModel,
        join: {
          from: "bills.id",
          to: "bill_details.bill_id",
        },
      },
      billType: {
        relation: Model.BelongsToOneRelation,
        modelClass: BillTypeModel,
        join: {
          from: "bill_types.id",
          to: "bill_details.bill_type_id",
        },
      },
    };
  }
}

export type BillDetails = ModelObject<BillDetailModel>;
