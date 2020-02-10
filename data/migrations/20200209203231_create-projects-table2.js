
exports.up = function(knex) {
    //create schema 
    return knex.schema.createTable('projectResources', tbl => {
        
        tbl.primary(['project_id', 'resource_id']);

        tbl
          .integer('project_id')
          .notNullable()
          .unsigned()
          .references('project.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl
          .integer('resource_id')
          .notNullable()
          .unsigned()
          .references('resource.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
};

exports.down = function(knex) {
    //recall schema
    return knex.schema
    .dropTableIfExists('projectResources');
};
