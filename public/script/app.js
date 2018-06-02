$(document).ready(function(){



// $('.each-item').click(function(event) {
//     event.preventDefault();
//     window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
// });

// $('#appetizer.category').on('click', function(event) {
//   $.ajax({
//       url:"/menu/appetizer",
//       method:"GET",
//       success: function(data){
//       console.log(JSON.parse(data));
//       });
//     })
//        // $.get("/menu/appetizer").then(data => {
//      //   })
//  })

function processData(data) {
 // for(let i = 0; i < (data.length / 4); i++) {
 //   $('<section>').addClass(`'row'${i}`);
 // }
 data.forEach(function(value, index) {
   var rowNumber = Math.floor(data.length / 4);
   // processObj(value, rowNumber);
   processObj(value);
 });
}

function processObj(obj) {

 var id = obj.id;
 var name = obj.name;
 var price = obj.price;
 var description = obj.description;
 var picture = obj.picture;
 // count 4, put 4 pic into each row

 $('.first-row').append(populatePicture(id, picture, name , price)); // create pix
 // $('.first-row').append(populateName(id, name));
 // $('.first-row').append(populatePrice(id, price));
 // $('.first-row').append(populatePicture(id, price));
 // console.log( $('.first-row').append(populatePicture(id, price)));

 // // create detail page
 //populateDetailPage(id, name, price, description, picture);
 // $.ajax('#container')
}

function populatePicture(id, picture, name, price) {

 var result = $('<div>');
 var divItemBox = $('<div>').addClass('item-outside-box');
 var imgBox = $('<img>').addClass('item-pic');

 var name = $('<span>').text(name).addClass('item-name');
 var price = $('<span>').text('$'+price).addClass('item-price');

 imgBox.attr('src', picture);
 imgBox.attr('id', id);
 divItemBox.append(imgBox , name , price);
 result.append(divItemBox);
 result.addClass('col-sm-6 col-md-3 col-lg-3 each-item');
 console.log(price)

 return result;
}

// function populateName(id, name){
//   var result = $('<div>');
//   var divItemBox = $('<div>').addClass('itme-outside-box');
//   var itemName = $('<p>').addClass('item-name')
// -
//   itemName.attr('text', name);
//   itemName.attr('id', id);
//   divItemBox.append(itemName)
//   result.append(divItemBox);

//   return result;
// }

// function populatePrice(id, price){



// }

  $('.first-row').click(function() {
    $("#myModal").modal('show');
  });


 $('#appetizer').on('click', function(event) {
   $.get("/menu/appetizer").then(data => {
    var meals = JSON.parse(data);
      $('.mainpage').remove();
      $('.first-row').empty();
     processData(meals);
     // console.log(meals);
     // console.log(typeof meals);
   });
 });

 $('#sashimi').on('click', function(event) {
   $.get("/menu/sashimi").then(data => {
     var meals = JSON.parse(data);
     $('.mainpage').remove();
     $('.first-row').empty();
     processData(meals)
   });
 });

 $('#bowl').on('click', function(event) {
   $.get("/menu/bowl").then(data => {
     var meals = JSON.parse(data);
     $('.mainpage').remove();
     $('.first-row').empty();
     processData(meals);

   });
 });

 $('#oshisushi').on('click', function(event) {
   $.get("/menu/oshisushi").then(data => {
     var meals = JSON.parse(data);
     $('.mainpage').remove();
     $('.first-row').empty();
     processData(meals);

   });
 });

 $('#roll').on('click', function(event) {
   $.get("/menu/roll").then(data => {
     var meals = JSON.parse(data);
     $('.mainpage').remove();
     $('.first-row').empty();
     processData(meals);

   });
 });

});

// select category from items where category='appetizer';


// var ComposeTweet = $("<div>").addClass("firstDiv");
//     var picture = $("<img>").addClass("firstPicture").attr("src", tweetData.user.avatars.small);
//     var title = $("<h1></h1>").addClass("firstTitle").text(tweetData.user.name);
//     var userAt = $("<h3></h3>").addClass("right").text(tweetData.user.handle);
//     var PTU = ComposeTweet.append(picture, title, userAt);
//     //add the image, h1 and h3 elements in the div 1
//     //append the elements here.
//     //Div2 Creation
//     var textArea = $("<div></div>").addClass("firstTextArea").text(tweetData.content.text)

//     var icon = $('<img src="/images/iconlike.png">').addClass("icon")
//     var icon2 = $('<img src="/images/retweet.png">').addClass("icon")
//     var icon3 = $('<img src="/images/icon.png">').addClass("icon")

//     var footer = $("<footer></footer>").addClass("bottomText").text(tweetData.created_at)

//     var iconFooter = footer.append(icon , icon2, icon3);
//     var complteArticle = article.append(PTU, textArea , iconFooter);
//       return complteArticle;
//   };
