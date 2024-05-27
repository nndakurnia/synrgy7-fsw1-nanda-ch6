import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
     client: "pg",
    connection: {
      user: "postgres",
      password: "kurnia03",
      port: 5432,
      host: "127.0.0.1",
      database: "postgres"
    },

    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds', 
    },
  },

};

module.exports = config;
