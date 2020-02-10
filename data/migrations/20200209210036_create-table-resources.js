
exports.up = function(knex) {
    knex.schema.createTable('resources', tbl => {
        tbl.increments();

        tbl
          .string('name', 256)
          .notNullable()
          .unique();

        tbl.string('description', 256);
      })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('resources')
};
