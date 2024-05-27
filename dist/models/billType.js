"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillTypeModel = void 0;
const objection_1 = require("objection");
const billDetail_1 = require("./billDetail");
class BillTypeModel extends objection_1.Model {
    static get tableName() {
        return "bill_types";
    }
    static get relationMappings() {
        return {
            orders: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: billDetail_1.BillDetailModel,
                join: {
                    from: "bill_details.bill_type_id",
                    to: "bill_types.id",
                },
            },
        };
    }
}
exports.BillTypeModel = BillTypeModel;
