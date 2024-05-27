"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillModel = void 0;
const objection_1 = require("objection");
const billDetail_1 = require("./billDetail");
const user_1 = require("./user");
class BillModel extends objection_1.Model {
    static get tableName() {
        return "bills";
    }
    static get relationMappings() {
        return {
            billDetails: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: billDetail_1.BillDetailModel,
                join: {
                    from: "bill_details.bill_id",
                    to: "bills.id",
                },
            },
            user: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: user_1.UserModel,
                join: {
                    from: "users.id",
                    to: "bills.user_id",
                },
            },
        };
    }
}
exports.BillModel = BillModel;
