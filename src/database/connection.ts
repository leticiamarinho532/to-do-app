// import knex from 'knex';
//
// const connection = knex({
//     client: 'postgresql',
//     connection: {
//       database: 'todoapp',
//       user: 'admin',
//       password: 'admin'
//     }
// });
//
// export default connection;

const environment = process.env.ENVIRONMENT || 'development'
const config = require('../../knexfile')[environment];

module.exports = require('knex')(config);
