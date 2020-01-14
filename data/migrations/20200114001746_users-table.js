exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users
      .string("username", 125)
      .notNullable()
      .unique();
    users.string("phone", 125).notNullable();
    users.string("password", 125).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
