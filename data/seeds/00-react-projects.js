
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'App WireFrame', description: 'Design a WireFrame and A User Experience Map'},
        {name: 'App FrontEnd', description: 'Code a FrontEnd for the App'},
        {name: 'App BackEnd', description: 'Design a BackEnd and database for the App'}
      ]);
    });
};
