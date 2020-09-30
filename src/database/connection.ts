const knex = require('knex');
const configuration = require('../../knexfile');

const env = process.env.NODE_ENV == 'test'? configuration.test : configuration.development ;

export default knex(env);

// const environment = process.env.ENVIRONMENT || 'development' || 'test';
// const config = require('../../knexfile')[environment];
//
// export default knex(config);

