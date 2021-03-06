
exports.up = function(knex) {
    //create schema 
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();

        tbl
            .string('name', 256)
            .notNullable()
            .unique();

        tbl.string('description', 256);

        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();

        tbl
          .string('name', 256)
          .notNullable()
          .unique();

        tbl.string('description', 256);
      })

      .createTable('task', tbl => {
        tbl.increments();

        tbl.string('description', 256).notNullable();

        tbl.string('notes', 256);

        tbl.boolean('completed').defaultTo(false);

        tbl
          .integer('project_id')
          .notNullable()
          .unsigned()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })

      .createTable('projectResources', tbl => {
        
        tbl.primary(['project_id', 'resource_id']);

        tbl
          .integer('project_id')
          .notNullable()
          .unsigned()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl
          .integer('resource_id')
          .notNullable()
          .unsigned()
          .references('resources.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
};

exports.down = function(knex) {
    //recall schema
    return knex.schema
    .dropTableIfExists('project')

    .dropTableIfExists('resources')

    .dropTableIfExists('task')

    .dropTableIfExists('projectResources');
};
