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
// AC40663532238e5b2113a28111776cc907
// 517a18d274061e5a21f51bd4327d6506
var accountSid = 'AC40663532238e5b2113a28111776cc907'; // Your Account SID from www.twilio.com/console
var authToken = '517a18d274061e5a21f51bd4327d6506';   // Your Auth Token from www.twilio.com/console

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
// function generateRandomString() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxya0123456789";
//     for(var i = 0; i < 6; i++){
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// };

function sendText(resultStr, customerPhone) {
// do something to orderObj to get only name & price
// send text to owner
client.messages.create({
  body: resultStr,
  to: '+17789534883',  // Text this number
  from: '+15876000387' // From a valid Twilio number // From a valid Twilio number
}).then((message) => console.log(message.sid)).done();

// send text message to customer
client.messages.create({
  body: resultStr,
  to: customerPhone,
  from: '+15876000387'
}).then((message) => console.log(message.sid)).done();
}
//
app.get("/" , (req, res) => {
    setSession(req);
    res.render("index_page");
});

function createMessage(data) {
 let total = data.total;
 let phoneNumber = data.userPhone;
 let userName = data.userName;
 let resultString = "";
 resultString += `Name: ${userName}\n
                  phoneNumber: ${phoneNumber}\n`;
 let orderList = "";
 for(let item in data.order) {
   let obj = {};
   // obj[item] = data.order[item].quantity;
   orderList += `${item} x ${data.order[item].quantity}\n`;
 }

 resultString += orderList;
 resultString += `Total: ${total}\n`

 return resultString;
}
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
//    sendText("test", "+17789534883");

//   res.end("this is test page");

// });

app.get("/menu/appetizer", (req, res) => {
  knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'appetizer')
   .then(function(data) {
    res.send(JSON.stringify(data));

  })
 })

app.get('/menu/sashimi', (req, res) => {
  knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'sashimi')
    .then(function(data) {
     res.send(JSON.stringify(data));
  })
})

app.get('/menu/bowl', (req, res) => {
  knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'bowl')
    .then(function(data) {
    res.send(JSON.stringify(data));
  })
})

app.get('/menu/OshiSushi', (req, res) => {
  knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'OshiSushi')
    .then(function(data) {
    res.send(JSON.stringify(data));
  })
})

app.get('/menu/roll', (req, res) => {
knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'roll')
    .then(function(data) {
     res.send(JSON.stringify(data));
  })
})

app.post('/checkout', (req, res) => {
  theCb(req.body.order);
  sendText(createMessage(req.body.order), req.body.order.customerPhone);
  res.send('success')
})

// app.post("/set_phone_number", (req, res) => {

//   req.session.userName = req.body.userName;
//   req.session.phoneNumber = req.body.phoneNumber;

// });

function theCb(data) {
 knex('orders')
 .insert({orderId: data.orderId,
          customer_name: data.userName,
          phone_number: data.userPhone,
          total_cost: data.total}).then(function(){
            for(let item in data.order){
               knex('items').where('name', item)
               .select('itemId').then(function(data1){
                 knex('item_orders')
                 .insert({'orders_id': data.orderId, 'items_id': data1[0].itemId}).then(function(){
                  console.log('success');
                 });
               });

             }
          });


}

function processData(data, cb) {
 let result = "";
 let total = 0;
 console.log(data);
 return result + '/n';
}






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


