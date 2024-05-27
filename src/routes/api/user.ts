const router = require("express").Router();
import { register } from '../../controllers/authController';
import { auth } from '../../middlewares/auth';

router.post('/register', auth, register);


export default router;
