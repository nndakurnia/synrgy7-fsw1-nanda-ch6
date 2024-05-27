import { Model, ModelObject } from "objection";
import { BillModel } from "./bill";

export class UserModel extends Model {
  id!: number;
  name!: string;
  role!: string;
  email!: string;
  password!: string;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "users";
  }
  static get relationMappings() {
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: BillModel,
        join: {
          from: "bills.user_id",
          to: "users.id",
        },
      },
    };
  }
}

export type Users = ModelObject<UserModel>;
