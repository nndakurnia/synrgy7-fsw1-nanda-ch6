"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillDetailModel = void 0;
const objection_1 = require("objection");
const bill_1 = require("./bill");
const billType_1 = require("./billType");
class BillDetailModel extends objection_1.Model {
    static get tableName() {
        return "bill_details";
    }
    static get relationMappings() {
        return {
            bill: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: bill_1.BillModel,
                join: {
                    from: "bills.id",
                    to: "bill_details.bill_id",
                },
            },
            billType: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: billType_1.BillTypeModel,
                join: {
                    from: "bill_types.id",
                    to: "bill_details.bill_type_id",
                },
            },
        };
    }
}
exports.BillDetailModel = BillDetailModel;
