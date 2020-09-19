const path = require('path');
// Update with your config settings.

module.exports = {

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./dev.sqlite3"
  //   }
  // },

  development: {
    client: 'postgresql',
    connection: {
      database: 'todoapp',
      user: 'admin',
      password: 'admin'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'todoapp-test',
      user: 'admin',
      password: 'admin'
    },
  }

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

};
