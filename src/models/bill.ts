import { Model, ModelObject } from "objection";
import { BillDetailModel } from "./billDetail";
import { UserModel } from "./user";

export class BillModel extends Model {
  id!: number;
  user_id!: number;
  status!: boolean;
  total_price!: number;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "bills";
  }
  static get relationMappings() {
    return {
      billDetails: {
        relation: Model.HasManyRelation,
        modelClass: BillDetailModel,
        join: {
          from: "bill_details.bill_id",
          to: "bills.id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "users.id",
          to: "bills.user_id",
        },
      },
    };
  }
}

export type Bills = ModelObject<BillModel>;