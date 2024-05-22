import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        { name: "Toyota Camry", price: 250000, img: "toyota_camry.jpg", status: false },
        { name: "Honda Civic", price: 220000, img: "honda_civic.jpg", status: false },
        { name: "Ford Mustang", price: 350000, img: "ford_mustang.jpg", status: false },
        { name: "BMW 3 Series", price: 300000, img: "bmw_3_series.jpg", status: false },
        { name: "Mercedes-Benz C-Class", price: 320000, img: "mercedes_c_class.jpg", status: false },
        { name: "Audi A4", price: 280000, img: "audi_a4.jpg", status: false },
        { name: "Tesla Model 3", price: 450000, img: "tesla_model_3.jpg", status: false },
        { name: "Nissan Altima", price: 230000, img: "nissan_altima.jpg", status: false },
    ]);
};
