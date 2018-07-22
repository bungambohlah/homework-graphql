module.exports = {
  local: {
    client: "postgresql",
    connection: {
      database: "homework_db",
      user: "postgres",
      password: "postgres",
      host: "localhost",
      port: 5432
    },
    pool: {
      min: 10,
      max: 100
    },
    migrations: {
      tableName: "knex_migrations"
    },
    debug: true
  },
  development: {
    client: "postgresql",
    connection: {
      database: "homework_db",
      user: "postgres",
      password: "postgres",
      host: "localhost",
      port: 5432
    },
    pool: {
      min: 10,
      max: 100
    },
    migrations: {
      tableName: "knex_migrations"
    },
    debug: true
  }
};