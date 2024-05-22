const router = require("express").Router();
const UserRouter = require("./api/user");
const AdminRouter = require("./api/makeBill");
const CustomerRouter = require("./api/listPayment");

router.use("/user", UserRouter);
router.use("/admin", AdminRouter);
router.use("/customer", CustomerRouter);

module.exports = router;
