const PORT = process.env.PORT || 8080;
const express = require("express");
const { Pool, Client } = require('pg')
const session = require('cookie-session');
// const knex = require('knex')(knexConfig[env]);
const app = express();
const bodyParser = require("body-parser");
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://userone:123@localhost:5432/userone'
})
// app.use(knexLogger(knex));

app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  name: 'session',
  keys: ['key']
}));

//



var database = {};

app.get("/", (req, res) => {
 knex('items').select('*')
   .then((results) => {
     templateVars = {
       data: results
     };
     // console.log("help:", templateVars.data); //getting database
     res.render("index_page", templateVars);
   });
});


 category= "appetizer"
app.get("/test", (req, res) => {
  // knex('items').where({category: 'appetizer'}).select('id')
   // .then((data) => res.json(data))
   // .then((data) => {console.log(data)})
   // .catch(ex => res.json({ error: ex.message }));

   knex.select('name').from('items').where('id', 5)
   .then(function(data) {
    console.log(data);
  })
  res.end("this is test page");

});


// select category from items where category='appetizer';

// app.get('/menu/appetizer', (req, res) => {
// knex('items').select('category').where(category, 'appetizer')
//    .then((data) => res.json(data))
//    .catch(ex => res.json({ error: ex.message }));

// })

// app.get('/menu/sashimi', (req, res) => {
// knex('items').select('category').where(category, 'sashimi')
//    .then((data) => res.json(data))
//    .catch(ex => res.json({ error: ex.message }));
// })

// app.get('/menu/bowl', (req, res) => {
// knex('items').select('category').where(category, 'bowl')
//    .then((data) => res.json(data))
//    .catch(ex => res.json({ error: ex.message }));
// })

// app.get('/menu/OshiSushi', (req, res) => {
// knex('items').select('category').where(category, 'OshiSushi')
//    .then((data) => res.json(data))
//    .catch(ex => res.json({ error: ex.message }));
// })

// app.get('/menu/roll', (req, res) => {
// knex('items').select('category').where(category, 'roll')
//    .then((data) => res.json(data))
//    .catch(ex => res.json({ error: ex.message }));
// })



app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


