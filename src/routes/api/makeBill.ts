const router = require("express").Router();
import { login } from '../../controllers/carsController';
const middleware = require('../../middlewares/auth')

router.get('/admin', middleware.auth, getBills)
router.post('/admin', middleware.auth, middleware.is_admin, addBill)

export default router;
