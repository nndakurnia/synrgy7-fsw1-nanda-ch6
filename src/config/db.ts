import Knex from 'knex';
import { Model } from 'objection';

const knexInstance = Knex({
  client: 'pg',
  connection: {
    database: 'latihan_ch6',
    user: 'postgres',
    password: '020402',
  },
});

Model.knex(knexInstance);

export default knexInstance;
