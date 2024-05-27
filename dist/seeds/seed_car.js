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
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("cars").del();
        // Inserts seed entries
        yield knex("cars").insert([
            { name: "Toyota Camry", price: 250000, img: "toyota_camry.jpg", status: false },
            { name: "Honda Civic", price: 220000, img: "honda_civic.jpg", status: false },
            { name: "Ford Mustang", price: 350000, img: "ford_mustang.jpg", status: false },
            { name: "BMW 3 Series", price: 300000, img: "bmw_3_series.jpg", status: false },
            { name: "Mercedes-Benz C-Class", price: 320000, img: "mercedes_c_class.jpg", status: false },
            { name: "Audi A4", price: 280000, img: "audi_a4.jpg", status: false },
            { name: "Tesla Model 3", price: 450000, img: "tesla_model_3.jpg", status: false },
            { name: "Nissan Altima", price: 230000, img: "nissan_altima.jpg", status: false },
        ]);
    });
}
exports.seed = seed;
;
