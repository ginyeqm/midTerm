$(document).ready(function(){

$('.pop-up').on('click', '.okay', function (event){
  const itemName = $('.itemName').text();
  const itemPrice = $('.itemPrice').text();
  const itemCount = $('.orderNumber').val();
  const singleTotal = itemPrice * itemCount;
  const totalPrice = Number($('.total_price').text()) + Number(singleTotal)


  const itemDiv = $('<div>').append(`<p>${itemName}</p>`)
  .append(`<span>${itemPrice}</span>`)
  .append(`<span>${itemCount}</span>`)
  .append(`<span>${Math.round(singleTotal*100)/100}</span>`);
  $('.order_list').prepend(itemDiv);
  $('.total_price').text(totalPrice);

  $('.overlay').slideUp();
  $('.pop-up').empty();
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
        const price = $('<p class="price">').text(meal.price);
        item.append(img, name, price);
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
    const price = $('<p>').addClass('itemPrice').text(priceText);
    const imgSrc = $(event.target).attr('src');
    const img = $(`<img src="${imgSrc}">`);
    const ok = $('<button class="okay">').text('Okay');
    const input = $('<input type="number" class="orderNumber" value="0">')
    const cancel = $('<button class="cancel">').text('Cancel')
    const row = $('<div class="row">');
    const left = $('<div class="col-md-6">');
    const right = $('<div class="col-md-6">');

    right.append(name, price, input, ok, cancel);
    left.append(img);
    row.append(left, right);
    $('.pop-up').append(row);
    $('.overlay').slideDown();
 })





 $('.pop-up').on('click', '.cancel', function(){
    $('.overlay').slideUp();
    $('.pop-up').empty();
 })
});