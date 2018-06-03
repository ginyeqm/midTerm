const PORT = process.env.PORT || 8080;
const express = require("express");
const { Pool, Client } = require('pg')
const cookiesSession = require('cookie-session');
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
app.use(cookiesSession({
  name: 'session',
  keys: ['key'],
  maxAge: 60*1000*10 //10mins
}));

var accountSid = 'ACccf76ed2c2aae37e1cacb8fa0a929d19'; // Your Account SID from www.twilio.com/console
var authToken = '8c9832a287ef0c97b2bea9cbc112705d';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

// client.messages.create({
//     body: 'Your Order is ready!',
//     to: '+17809323406',  // Text this number
//     from: '+15878555187' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid));
// //


// //
// orderObj is req.session.orderObj


function sendText(orderObj, customerPhone) {
 // do something to orderObj to get only name & price
 let orderObjString = "orderObj";
 // send text to owner
 client.messages.create({
   body: orderObjString,
   to: '+17809323406',  // Text this number
   from: '+15878555187' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

 let customerPhone = '+17789548377';
 // send text message to customer
 client.messages.create({
   body: orderObjString,
   to: customerPhone,
   from: '+15878555187'
 })
 .then((message) => console.log(message.sid));
}
//
app.get("/" , (req, res) => {
    setSession(req);
    res.render("index_page");
});

// app.get("/menu/appetizer" , (req, res)=> {
//    res.render("item_page")
// })

// app.get("/test", (req, res) => {
//   req.session = null;
//   // req.session.test = '10';
//     // knex('items').where({category: 'appetizer'}).select('id')
//    // .then((data) => res.json(data))
//    // .then((data) => {console.log(data)})
//    // .catch(ex => res.json({ error: ex.message }));
//    console.log(req.session);
//    if(req.session) {
//    console.log("yes session");
//  } else {
//    console.log("no session");
//  }

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

app.get('/menu/roll', (req, res) => {
knex.select('id','name','price', 'description','picture').from('items').where('category', 'roll')
    .then(function(data) {
     res.send(JSON.stringify(data));
  })
})

app.post("/set_phone_number", (req, res) => {

  req.session.userName = req.body.userName;
  req.session.phoneNumber = req.body.phoneNumber;

});

app.post("/orders", (req, res) => {
 let name = req.body.itemName;
 let price = req.body.itemPrice;
 let quantity = req.body.itemCount;
 console.log(req.body);
 let obj = {
   name: name,
   price: price,
   quantity: quantity
 }
 console.log(obj);
 if(!req.session.orders) {
   let orders = [];
   orders.push(obj);
   req.session.orders = orders;
 } else {
   req.session.orders.push(obj);
 }
});
function setSession(req) {
 if(req.session) {
   console.log("yes session");
 } else {
   console.log("no session");
 }
}


app.post("/set_phone_number", (req, res) => {
  req.session.phoneNumber = res.body.phoneNumber;
  req.session.userName = res.body.userName;
  console.log(res.body.phoneNumber);
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


