
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments('id').unsigned().primary();
    t.dateTime('createdAt').notNull().defaultTo(knex.raw('now()'));
    t.dateTime('updatedAt').nullable();

    t.string('name').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
