
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items')
      .returning('*')
      .insert([

      { picture:'./picture/appetizer/black_cod.jpg', price: '10.99' , name: 'Black Cod', description: 'Black Cod', category: 'appetizer'},
      { picture:'./picture/appetizer/edamame.jpg', price: '3.99' , name: 'Edamame', description: 'edamame', category: 'appetizer'},
      { picture:'./picture/appetizer/mussels_yaki.jpg', price: '7.99' , name: 'Mussels yaki', description: 'Mussels yaki', category: 'appetizer'},
      { picture:'./picture/appetizer/Sushi_pizza.jpg', price: '14.99' , name: 'Sushi Pizza', description: 'Sushi Pizza', category: 'appetizer'},
      { picture:'./picture/appetizer/Tuna_tataki.jpg', price: '9.99' , name: 'Tuna Tataki', description: 'Tuna Tataki', category: 'appetizer'},

      { picture:'./picture/sashimi/tuna.jpg', price: '9.99' , name: 'Tuna', description: 'tuna sashimi', category: 'sashimi'},
      { picture:'./picture/sashimi/salmon.jpg', price: '10.99' , name: 'Salmon', description: 'salmon sashimi', category: 'sashimi'},
      { picture:'./picture/sashimi/combo1.jpg', price: '12.99' , name: 'Combo1', description: 'combo1', category: 'sashimi'},
      { picture:'./picture/sashimi/combo2.jpg', price: '24.99' , name: 'Combo2', description: 'combo2', category: 'sashimi'},
      { picture:'./picture/sashimi/combo3.jpg', price: '18.99' , name: 'Combo3', description: 'combo3', category: 'sashimi'},
      { picture:'./picture/sashimi/combo4.jpg', price: '21.99' , name: 'Combo4', description: 'combo4', category: 'sashimi'},
      { picture:'./picture/sashimi/CaterpilarRoll.jpg', price: '12.99' , name: 'TunaTataki', description: 'Tuna Tataki Sashimi', category: 'sashimi'},

      { picture:'./picture/roll/CaterpilarRoll.jpg', price: '12.99' , name: 'Caterpilar Roll', description:'food dis', category: 'roll'},
      { picture:'./picture/roll/DragonRoll.jpg', price: '10.99' , name: 'Dragon Roll', description: 'food dis', category: 'roll'},
      { picture:'./picture/roll/MonsterRoll.jpg', price: '12.99' , name: 'Monster Roll', description:'food dis', category: 'roll'},
      { picture:'./picture/roll/OvenBakedDragonRoll.jpg', price: '14.99' , name: 'OvenBaked Dragon Roll', description:'food dis', category: 'roll'},
       { picture:'./picture/roll/Rainbow.jpg', price: '14.99' , name: 'Rainbow', description: 'Some rainbow stuffs', category: 'roll'},
       { picture:'./picture/roll/RedDragonRoll.jpg', price: '0.99' , name: 'Red Dragon Roll', description: 'food dis', category: 'roll'},
       { picture:'./picture/roll/SmokyYamRoll.jpg', price: '11.99' , name: 'SmokyYam Roll', description:'food dis', category: 'roll'},
       { picture:'./picture/roll/TsukiDynamiteRoll.jpg', price: '13.99' , name: 'Tsuki Dynamite Roll', description: 'food dis', category: 'roll'},
       { picture:'./picture/roll/UnatamaRoll.jpg', price: '8.99' , name: 'Unatama Roll', description:'food dis', category: 'roll'},
       { picture:'./picture/roll/WestCoastRoll.jpg', price: '12.99' , name: 'WestCoast Roll', description:'food dis', category: 'roll'},

       { picture:'./picture/bowl/SpicyTunaSashimiDon.jpg', price: '17.99' , name:'Spicy Tuna Sashimi Don', description:'food dis', category: 'bowl'},
       { picture:'./picture/bowl/SpicySalmonSashimiDon.jpg', price: '15.99' , name: 'Spicy Salmon Sashimi Don', description:'food dis', category: 'bowl'},

       { picture:'./picture/OshiSushi/EbiOshi.jpg', price: '14.99' , name: 'Ebi Oshi', description:'food dis', category: 'OshiSushi'},
       { picture:'./picture/OshiSushi/SabaOshi.jpg', price: '15.99' , name: 'Saba Oshi', description:'food dis', category: 'OshiSushi'},
       { picture:'./picture/OshiSushi/SalmonOshi.jpg', price: '12.99' , name: 'Salmon Oshi', description:'food dis', category: 'OshiSushi'},
       { picture:'./picture/OshiSushi/UnagiOshi.jpg', price: '12.99' , name: 'Unagi Oshi', description:'food dis', category: 'OshiSushi'},
      ]);
    });
};

// <img src=" ../picture/sashimi/tuna.jpg">