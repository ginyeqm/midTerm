
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, picture:'../picture/sashimi/tuna.jpg', price: '9.99' , name: 'Tuna', description: 'tuna sashimi'},
        {id: 2, picture:'../picture/sashimi/salmon.jpg', price: '10.99' , name: 'Salmon', description: 'salmon sashimi'},
        {id: 3, picture:'../picture/sashimi/combo1.jpg', price: '12.99' , name: 'Combo1', description: 'combo1'},
      ]);
    });
};
