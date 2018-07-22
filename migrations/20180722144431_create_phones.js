
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phones', function(t) {
    t.increments('id').unsigned().primary();
    t.dateTime('createdAt').notNull().defaultTo(knex.raw('now()'));
    t.dateTime('updatedAt').nullable();

    t.string('phoneNumber').notNull();
    t.integer('user_id').references('id').inTable('users').notNull().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('phones');
};
