exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {  description: 'Build a WireFrame and A User Experience Map', notes: 'take color scheme and logos into consideration', project_id: 1  },
        {  description: 'Build a FrontEnd for the App', notes: 'UseState, UseEffect, and redux are a must', project_id: 2  },
        {  description: 'Build a BackEnd for the App', notes: 'Express, Knex, and Sqlite are preferable', project_id: 3  },
      ]);
    });
};

