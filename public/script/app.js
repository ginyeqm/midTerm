$(document).ready(function(){

function generateRandomString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxya0123456789";
    for(var i = 0; i < 6; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var orderObject ={order: {}, total:0};
$('.pop-up').on('click', '.okay', function (event){
  if($('.orderNumber').val() === '0') {
    alert('No quantity???')
  } else {
    const itemName = $('.itemName').text();
    const dollar = $('<span>$</span>');
    const itemPrice = $('.itemPrice').text();
    const multiple = $('<span>X</span>');
    const itemCount = $('.orderNumber').val();
    const singleTotal = itemPrice * itemCount;
    const dollar1 = $('<span>$</span>');
    const totalTax = Number(singleTotal) * 0.12;
    const dollar2 = $('<span>$</span>');
    const totalPrice = Number($('.total_price').text()) + Number(singleTotal) - (totalTax);


    const itemDiv = $('<div>').append(`<p>${itemName}</p>`)
    .append(dollar)
    .append(`<span class='itemP'>${itemPrice}</span>`)
    .append(multiple)
    .append(`<span class='itemC'>${itemCount}</span>`)
    .append(dollar1)
    .append(`<span class='tax'>${Math.round(totalTax*100)/100}</span>`)
    .append(dollar2)
    .append(`<span class='single_price'>${Math.round(singleTotal*100)/100}</span>`);

    orderObject.order[itemName] = {name: itemName, price: itemPrice, quantity: itemCount, tax: Math.round(totalTax*100)/100, singleTotal: Math.round(singleTotal*100)/100}


    // let ticket = {
    // name: itemName,
    // price: itemPrice,
    // quantity: itemCount}
    // orderArray[0] += totalPrice;
    // orderArray.push(ticket);
    // console.log("hellothere");
    // console.log(orderArray);

    $('.order_list .list').append(itemDiv);
    $('.total_price').text(Math.round(totalPrice*100)/100);
    $('.overlay').slideUp();
    $('.pop-up').empty();
  }

});

  // $.post('/orders', {itemName:nameText, itemPrice:priceText, itemCount:orderNumber.val()}).done(function(data){
  //   console.log(data)}
//   $.ajax({
//     type: 'POST',
//     url: '/orders',
//     data: {itemName: $('.itemName').text(),
//            itemPrice: $('.itemPrice').text(),
//            itemCount: $('.orderNumber').val()},
//     success: function(result) {
//       }
// });
//      $('.overlay').slideUp();
//      $('.pop-up').empty();
// });

 $('p').on('click', function(event) {
    $('.map').addClass('hidden')
    $('.items_row').removeClass('hidden')
    $('.items_row').empty();
   $.get(`/menu/${$(this).attr('data-id')}`).then(data => {
      var meals = JSON.parse(data);
      meals.forEach(function(meal){
        const item = $('<div class="col-md-1">');
        const img = $(`<img src=${meal.picture}>`);
        const name = $('<p class="name">').text(meal.name);
        const dollar = $('<span>$</span>');
        const price = $('<p class="price">').text(meal.price);
        item.append(img, name, dollar, price);
        $('.items_row').append(item);
      })
   });
 });
 $('.main').on('click', function(){
  $('.map').removeClass('hidden');
  $('.items_row').addClass('hidden')
  $('.items_row').empty();
 })

 $('.items_row').on('click', 'img', function(event){
    const nameText = $(event.target).parent().children('.name').text();
    const name = $('<p>').addClass('itemName').text(nameText);
    const priceText = $(event.target).parent().children('.price').text();
    const dollar = $('<span>$</span>');
    const price = $('<p>').addClass('itemPrice').text(priceText);
    const imgSrc = $(event.target).attr('src');
    const img = $(`<img src="${imgSrc}">`);
    const ok = $('<button class="okay">').text('Okay');
    const input = $('<input type="number" class="orderNumber" value="0">')
    const cancel = $('<button class="cancel">').text('Cancel')
    const row = $('<div class="row">');
    const left = $('<div class="col-md-6">');
    const right = $('<div class="col-md-6">');

    right.append(name, dollar, price, input, ok, cancel);
    left.append(img);
    row.append(left, right);
    $('.pop-up').append(row);
    $('.overlay').slideDown();
 })

$('.checkOut').on('click', function(){
  orderObject.total = $('.total_price').text();
  orderObject.userName = $('#user-name').val();
  orderObject.userPhone = $('#user-phone-number').val();
  orderObject.orderId = generateRandomString();
  // console.log("username test:", $('#user-name').val());
  // console.log("userphone test: ", $('#user-phone-number').val());
  $('.order_list .total_price').text(0);
  $('.order_list .list').empty();
  $('.order_list input').val('');

  $('.overlay').slideDown();
  $('.pop-up').append('<h1 class="thank">Thank you for ordering.</h1>')
  const cancel = $('<button class="cancel">').text('Cancel')
  $('.pop-up').append(cancel);



  $.post('/checkout', {order: orderObject}).done(function(result){
    console.log('asd');
  })


})




 $('.pop-up').on('click', '.cancel', function(){
    $('.overlay').slideUp();
    $('.pop-up').empty();
 })
});