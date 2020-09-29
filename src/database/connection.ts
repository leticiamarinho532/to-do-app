import knex from 'knex';

const environment = process.env.ENVIRONMENT || 'development';
const config = require('../../knexfile')[environment];

// const connection = knex({
//     client: 'postgresql',
//     connection: {
//       database: 'todoapp',
//       user: 'admin',
//       password: 'admin'
//     }
// });

// export default connection;

export default knex(config);
// module.exports = require('knex')(config);
