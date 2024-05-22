import { Router } from 'express';
import carsRoutes from './api/carRouter';
import customersRoutes from './api/customerRouter'

const router = Router();

router.use(carsRoutes);

router.use(customersRoutes);

export default router;
