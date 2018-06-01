
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([

        {id: 1, picture:'./picture/appetizer/black_cod.jpg', price: '10.99' , name: 'Black Cod', description: 'Black Cod', category: 'sushi'},
        {id: 2, picture:'./picture/appetizer/edamame.jpg', price: '3.99' , name: 'Edamame', description: 'edamame', category: 'appetizer'},
        {id: 3, picture:'./picture/appetizer/mussels_yaki.jpg', price: '7.99' , name: 'Mussels yaki', description: 'Mussels yaki', category: 'appetizer'},
        {id: 4, picture:'./picture/appetizer/Sushi_pizza.jpg', price: '14.99' , name: 'Sushi Pizza', description: 'Sushi Pizza', category: 'sushi'},
        {id: 5, picture:'./picture/appetizer/Tuna_tataki.jpg', price: '9.99' , name: 'Tuna Tataki', description: 'Tuna Tataki', category: 'sashimi'},

        {id: 6, picture:'./picture/sashimi/tuna.jpg', price: '9.99' , name: 'Tuna', description: 'tuna sashimi', category: 'sashimi'},
        {id: 7, picture:'./picture/sashimi/salmon.jpg', price: '10.99' , name: 'Salmon', description: 'salmon sashimi', category: 'sashimi'},
        {id: 8, picture:'./picture/sashimi/combo1.jpg', price: '12.99' , name: 'Combo1', description: 'combo1', category: 'sashimi'},
        {id: 9, picture:'./picture/sashimi/combo2.jpg', price: '24.99' , name: 'Combo2', description: 'combo2', category: 'sashimi'},
        {id: 10, picture:'./picture/sashimi/combo3.jpg', price: '18.99' , name: 'Combo3', description: 'combo3', category: 'sashimi'},
        {id: 11, picture:'./picture/sashimi/combo4.jpg', price: '21.99' , name: 'Combo4', description: 'combo4', category: 'sashimi'},
        {id: 12, picture:'./picture/sashimi/CaterpilarRoll.jpg', price: '12.99' , name: 'TunaTataki', description: 'Tuna Tataki Sashimi', category: 'sashimi'},

        {id: 13, picture:'./picture/roll/CaterpilarRoll.jpg', price: '12.99' , name: 'Caterpilar Roll', description:'food dis', category: 'sushi'},
        {id: 14, picture:'./picture/roll/DragonRoll.jpg', price: '10.99' , name: 'Dragon Roll', description: 'food dis', category: 'sushi'},
        {id: 15, picture:'./picture/roll/MonsterRoll.jpg', price: '12.99' , name: 'Monster Roll', description:'food dis', category: 'sushi'},
        {id: 16, picture:'./picture/roll/OvenBakedDragonRoll.jpg', price: '14.99' , name: 'OvenBaked Dragon Roll', description:'food dis', category: 'sushi'},
        {id: 17, picture:'./picture/roll/Rainbow.jpg', price: '14.99' , name: 'Rainbow', description: 'Some rainbow stuffs', category: 'sushi'},
        {id: 18, picture:'./picture/roll/RedDragonRoll.jpg', price: '0.99' , name: 'Red Dragon Roll', description: 'food dis', category: 'sushi'},
        {id: 19, picture:'./picture/roll/SmokyYamRoll.jpg', price: '11.99' , name: 'SmokyYam Roll', description:'food dis', category: 'sushi'},
        {id: 20, picture:'./picture/roll/TsukiDynamiteRoll.jpg', price: '13.99' , name: 'Tsuki Dynamite Roll', description: 'food dis', category: 'sushi'},
        {id: 21, picture:'./picture/roll/UnatamaRoll.jpg', price: '8.99' , name: 'Unatama Roll', description:'food dis', category: 'sushi'},
        {id: 22, picture:'./picture/roll/WestCoastRoll.jpg', price: '12.99' , name: 'WestCoast Roll', description:'food dis', category: 'sushi'},

        {id: 23, picture:'./picture/bowl/SpicyTunaSashimiDon.jpg', price: '17.99' , name:'Spicy Tuna Sashimi Don', description:'food dis', category: 'bowl'},
        {id: 24, picture:'./picture/bowl/SpicySalmonSashimiDon.jpg', price: '15.99' , name: 'Spicy Salmon Sashimi Don', description:'food dis', category: 'bowl'},

        {id: 25, picture:'./picture/OshiSushi/EbiOshi.jpg', price: '14.99' , name: 'Ebi Oshi', description:'food dis', category: 'sushi'},
        {id: 26, picture:'./picture/OshiSushi/SabaOshi.jpg', price: '15.99' , name: 'Saba Oshi', description:'food dis', category: 'sushi'},
        {id: 27, picture:'./picture/OshiSushi/SalmonOshi.jpg', price: '12.99' , name: 'Salmon Oshi', description:'food dis', category: 'sushi'},
        {id: 28, picture:'./picture/OshiSushi/UnagiOshi.jpg', price: '12.99' , name: 'Unagi Oshi', description:'food dis', category: 'sushi'},
      ]);
    });
};

// <img src=" ../picture/sashimi/tuna.jpg">