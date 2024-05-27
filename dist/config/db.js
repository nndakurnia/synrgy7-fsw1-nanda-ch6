"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const knexInstance = (0, knex_1.default)({
    client: 'pg',
    connection: {
        database: 'latihan_ch6',
        user: 'postgres',
        password: '020402',
    },
});
objection_1.Model.knex(knexInstance);
exports.default = knexInstance;
