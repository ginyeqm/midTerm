const PORT = process.env.PORT || 8080;
const express = require("express");
const { Pool, Client } = require('pg');
const app = express();
const bodyParser = require("body-parser");
const knex = require('knex')({
 client: 'pg',
 connection: 'postgres://userone:123@localhost:5432/userone'
});

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var accountSid = 'AC40663532238e5b2113a28111776cc907'; // Your Account SID from www.twilio.com/console
var authToken = '517a18d274061e5a21f51bd4327d6506';   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

/*
send text message to customer & owner through twilio
*/
function sendText(resultStr, customerPhone) {
client.messages.create({
 body: resultStr,
 to: '+17789534883',  // Text this number
 from: '+15876000387' // From a valid Twilio number // From a valid Twilio number
});
// .then((message) => console.log(message.sid)).done();

client.messages.create({
 body: resultStr,
 to: customerPhone,
 from: '+15876000387'
});
// .then((message) => console.log(message.sid)).done();
}

/*
 process data
*/
function processData(data) {
 knex('orders')
 .insert({orderId: data.orderId,
         customer_name: data.userName,
         phone_number: data.userPhone,
         total_cost: data.total})
 .then(function(){
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

/*
 convert order data to human readable format
*/
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
  orderList += `${item} x ${data.order[item].quantity}\n`;
}

resultString += orderList;
resultString += `Total: ${total}\n`

return resultString;
}

// route root
app.get("/" , (req, res) => {
   res.render("index_page");
});

//  appetizer category route
app.get("/menu/appetizer", (req, res) => {
 knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'appetizer')
  .then(function(data) {
   res.send(JSON.stringify(data));
 });
});

//  sashimi category route
app.get('/menu/sashimi', (req, res) => {
 knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'sashimi')
   .then(function(data) {
    res.send(JSON.stringify(data));
 });
});

//  bow category route
app.get('/menu/bowl', (req, res) => {
 knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'bowl')
   .then(function(data) {
   res.send(JSON.stringify(data));
 });
});

//  OshiSushi category route
app.get('/menu/OshiSushi', (req, res) => {
 knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'OshiSushi')
   .then(function(data) {
   res.send(JSON.stringify(data));
 });
});

//  roll category route
app.get('/menu/roll', (req, res) => {
knex.select('itemId','name','price', 'description','picture').from('items').where('category', 'roll')
   .then(function(data) {
    res.send(JSON.stringify(data));
 });
});

//  checkout route
app.post('/checkout', (req, res) => {
 processData(req.body.order);
 sendText(createMessage(req.body.order), req.body.order.userPhone);
 res.send('success');
});

app.listen(PORT, () => {
 console.log('listening on port', PORT);
});