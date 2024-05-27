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
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_admin = exports.auth = void 0;
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY = 'secret' } = process.env;
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.sendStatus(401);
        }
        const data = jwt.verify(authorization.split(' ')[1], JWT_SECRET_KEY);
        req.user = {
            id: data.id,
            role: data.role,
        };
        next();
    }
    catch (error) {
        throw error;
    }
});
exports.auth = auth;
const is_admin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = req.user;
    if (role != "admin") {
        return res.sendStatus(403);
    }
    next();
});
exports.is_admin = is_admin;
