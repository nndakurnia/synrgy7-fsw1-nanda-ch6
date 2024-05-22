import { Request, Response } from 'express';
import { CarsModel, Car } from '../models/car';


export const getCars = async (_: Request, res: Response) => {
  try {
    const cars = await CarsModel.query();
    if (!cars) {
      return res.status(404).json({ error: 'Cars not found' });
    }
    return res.json(cars);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCarsById = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const car = await CarsModel.query().findById(id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    return res.json(car);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createCar = async (req: Request<{}, {}, Car>, res: Response) => {
  try {
    const body = req.body;
    const car = await CarsModel.query().insert(body).returning('*');
    res.status(201).json(car);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCarsById = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const car = await CarsModel.query().findById(id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    await CarsModel.query().deleteById(id); // Menghapus mobil berdasarkan ID 
    return res.json({ message: 'Car deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCarsById = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const body = req.body;
        const articles = await CarsModel.query()
        .findById(id)
        .patch(body)
        .returning("*");
        return res.json(articles);
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
};
