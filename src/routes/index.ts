const router = require("express").Router();
const UserRouter = require("./api/user");
const AdminRouter = require("./api/makeBill");
const CustomerRouter = require("./api/listPayment");
import { register, login } from '../controllers/authController';
import { auth } from '../middlewares/auth';

router.post('/register', register);
router.post('/login', login);

// router.use("/user", UserRouter);
// router.use("/admin", AdminRouter);
// router.use("/customer", CustomerRouter);

export default router;
