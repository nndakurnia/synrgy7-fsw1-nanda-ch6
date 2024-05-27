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
exports.updateCarsById = exports.deleteCarsById = exports.createCar = exports.getCarsById = exports.getCars = void 0;
const car_1 = require("../models/car");
const getCars = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield car_1.CarsModel.query();
        if (!cars) {
            return res.status(404).json({ error: 'Cars not found' });
        }
        return res.json(cars);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getCars = getCars;
const getCarsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const car = yield car_1.CarsModel.query().findById(id);
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        return res.json(car);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getCarsById = getCarsById;
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const car = yield car_1.CarsModel.query().insert(body).returning('*');
        res.status(201).json(car);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.createCar = createCar;
const deleteCarsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const car = yield car_1.CarsModel.query().findById(id);
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        yield car_1.CarsModel.query().deleteById(id); // Menghapus mobil berdasarkan ID 
        return res.json({ message: 'Car deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteCarsById = deleteCarsById;
const updateCarsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const body = req.body;
        const articles = yield car_1.CarsModel.query()
            .findById(id)
            .patch(body)
            .returning("*");
        return res.json(articles);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.updateCarsById = updateCarsById;
