exports.up = function(knex) {
  return knex.schema.createTable("plants", plants => {
    plants.increments();
    plants
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    plants.string("nickname", 255).notNullable();
    plants.string("species", 255).notNullable();
    plants.string("h2oFrequency", 255);
    plants.boolean("h2oWeekly", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("plants");
};
