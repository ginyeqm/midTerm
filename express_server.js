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

var accountSid = 'ACccf76ed2c2aae37e1cacb8fa0a929d19'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Your Order is ready!',
    to: '+17809323406',  // Text this number
    from: '+15878555187' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
//



app.get("/" , (req, res) => {
     res.render("index_page");
});

// app.get("/menu/appetizer" , (req, res)=> {
//    res.render("item_page")
// })

// app.get("/test", (req, res) => {
//   // knex('items').where({category: 'appetizer'}).select('id')
//    // .then((data) => res.json(data))
//    // .then((data) => {console.log(data)})
//    // .catch(ex => res.json({ error: ex.message }));
//    knex.select('name','price', 'description').from('items').where('category', 'appetizer')
//    .then(function(data) {
//     return data
//   })
//   res.end("this is test page");

// });

app.get("/menu/appetizer", (req, res) => {
  knex.select('id','name','price', 'description','picture').from('items').where('category', 'appetizer')
   .then(function(data) {
    res.send(JSON.stringify(data));

  })
 })

app.get('/menu/sashimi', (req, res) => {
  knex.select('id','name','price', 'description','picture').from('items').where('category', 'sashimi')
    .then(function(data) {
     res.send(JSON.stringify(data));
  })
})

app.get('/menu/roll', (req, res) => {
  knex.select('id','name','price', 'description','picture').from('items').where('category', 'roll')
    .then(function(data) {
    res.send(JSON.stringify(data));
  })
})

app.get('/menu/bowl', (req, res) => {
knex.select('id','name','price', 'description','picture').from('items').where('category', 'bowl')
    .then(function(data) {
     res.send(JSON.stringify(data));
  })
})

app.get('/menu/OshiSushi', (req, res) => {
  knex.select('id','name','price', 'description','picture').from('items').where('category', 'OshiSushi')
    .then(function(data) {
    res.send(JSON.stringify(data));
  })
})

app.get('/menu/bowl', (req, res) => {
knex.select('id','name','price', 'description','picture').from('items').where('category', 'bowl')
    .then(function(data) {
     res.send(JSON.stringify(data));
  })
})


app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


