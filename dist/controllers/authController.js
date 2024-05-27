"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_1 = require("../models/user");
const uuid_1 = require("uuid");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcryptjs_1.default.hash(password, 10, (err, result) => {
            if (!err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};
const checkPassword = (encryptPassword, password) => {
    return new Promise((resolve, reject) => {
        bcryptjs_1.default.compare(password, encryptPassword, (err, result) => {
            if (!err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = Object.assign(Object.assign({}, req.body), { password: yield encryptPassword(req.body.password), id: (0, uuid_1.v4)() });
        yield user_1.UserModel.query().insert(payload);
        res.status(201).json({
            status: true,
            message: 'success',
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: JSON.stringify(err),
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_1.UserModel.query().findOne({ email });
        if (!user) {
            res.status(400).json({
                status: false,
                message: 'User tidak ditemukan!',
            });
        }
        else {
            const isPasswordCorrect = yield checkPassword(user.password, password);
            if (!isPasswordCorrect) {
                res.status(400).json({
                    status: false,
                    message: 'Password salah!',
                });
            }
            else {
                res.status(200).json({
                    status: true,
                    message: 'success',
                    data: user,
                });
            }
        }
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: JSON.stringify(err),
        });
    }
});
exports.login = login;
