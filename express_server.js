const express = require("express");
const { Pool, Client } = require('pg')
const session = require('cookie-session');
// const knex = require('knex');
const app = express();
const bodyParser = require("body-parser");
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://userone:123@localhost:5432/userone'
});

app.set('view engine', 'ejs');

var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  name: 'session',
  keys: ['key']
}));

function aquireData(table) {
  // var result = [];
  // knex.connect();
  knex('items').select('*')
    .then((results) => {
      console.log(results);
      return results;
    });
}


var database = {};

app.get("/", (req, res) => {
 knex('items').select('*')
   .then((results) => {
     // console.log(results);
     // return results;
     templateVars = {
       data: JSON.stringify(results)
     };
     console.log("help:", templateVars.data);
     res.render("index_page", templateVars);
   });
 // templateVars =
 // {
 //   data: database
 // };
 // console.log("god help me", templateVars.data);
 // res.render("index_page", templateVars);
});

app.get('/menu_by_category/:category', (req, res) => {
  knex('items')
    .select('*')
    // .where('price < 9.00')
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log("incomprehensible DB problem:", err);
      res.status(500).json({'error': 'db ded, fool'});
    })
})


app.get("/test", (req, res) => {
  console.log("testing:", aquireData('items'));
  res.end("this is test page");
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});