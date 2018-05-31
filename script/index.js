

knex.select("*").from("items").where('price')
.then(function (items) {
   items.forEach(function(value){
     console.log(value);
   });
  });




//  }).catch(function(err) {
//    // All the error can be checked in this piece of code
//    console.log(err);
//  }).finally(function() {
//    // To close the connection pool
//    knex.destroy();
//  });
// }