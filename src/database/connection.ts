import knex from 'knex';

const connection = knex({
    client: 'postgresql',
    connection: {
      database: 'todoapp',
      user: 'admin',
      password: 'admin'
    }
});

export default connection;
