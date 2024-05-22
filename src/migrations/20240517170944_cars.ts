import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cars', (table: Knex.TableBuilder)=>{
        table.increments('id').primary();
        table.string('name', 255).notNullable()
        table.integer('price').notNullable()
        table.string('img').notNullable()
        table.boolean('status').notNullable().defaultTo(false)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cars')
}

