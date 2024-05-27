"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const objection_1 = require("objection");
const bill_1 = require("./bill");
class UserModel extends objection_1.Model {
    static get tableName() {
        return "users";
    }
    static get relationMappings() {
        return {
            orders: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: bill_1.BillModel,
                join: {
                    from: "bills.user_id",
                    to: "users.id",
                },
            },
        };
    }
}
exports.UserModel = UserModel;
