
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'React', description: 'Library for building Single Page Applications' },
        { name: 'Figma', description: 'An online tool for building WireFrames and UX' },
        { name: 'Express', description: 'A BackEnd framework for NodeJs' },
      ]);
    });
};