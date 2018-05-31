const settings = require("./knexfile.js"); // settings.json
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.select('picture', 'price', 'name', 'description').from('items')
.asCallback(function(err, rows) {
  if (err) {
    return console.error(err);
  }else {
      console.log(rows);
    }
 });
