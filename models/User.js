const { Model } = require('objection')
const Knex = require('knex');
const env = process.env["NODE_ENV"] === "dev" ? "development" : "local";
const knexfile = require('../knexfile')[env];
const knex = Knex(knexfile);

// bind model to knex's instance
Model.knex(knex)

class User extends Model {
  static get tableName() {
    return "users"
  }

  static get relationMappings() {
    const Phone = require('./Phone')
    return {
      phones: {
        relation: Model.HasManyRelation,
        modelClass: Phone,
        join: {
          from: 'users.id',
          to: 'phones.user_id'
        }
      },
    }
  }
}

module.exports = User