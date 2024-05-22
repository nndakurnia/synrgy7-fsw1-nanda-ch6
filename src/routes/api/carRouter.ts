import { Router } from 'express';
import { getCars, createCar, getCarsById, deleteCarsById, updateCarsById } from '../../controllers/carsController';

const router = Router();

router.get('/cars', getCars);
router.get('/cars/:id', getCarsById)
router.post('/cars', createCar);
router.delete('/cars/:id', deleteCarsById);
router.patch('/cars/:id', updateCarsById);


export default router;
