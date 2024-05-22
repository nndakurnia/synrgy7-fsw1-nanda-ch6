const router = require("express").Router();
import { login } from '../../controllers/carsController';

router.post('/login', login);


export default router;
