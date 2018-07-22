const { Model } = require('objection')
const Knex = require('knex');
const env = process.env["NODE_ENV"] === "dev" ? "development" : "local";
const knexfile = require('../knexfile')[env];
const knex = Knex(knexfile);

// bind model to knex's instance
Model.knex(knex)

class Phone extends Model {
  static get tableName() {
    return "phones"
  }

  static get relationMappings() {
    const User = require("./User");
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "phones.user_id",
          to: "users.id"
        }
      }
    };
  }
}

module.exports = Phone