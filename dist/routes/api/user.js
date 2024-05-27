"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const authController_1 = require("../../controllers/authController");
const auth_1 = require("../../middlewares/auth");
router.post('/register', auth_1.auth, authController_1.register);
exports.default = router;
