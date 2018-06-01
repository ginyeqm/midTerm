// $('.each-item').click(function(event) {
//     event.preventDefault();
//     window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
// });


$('#appetizer').on('click', function(event) {
   // callAnotherFunction();
   $.get("/menu/appetizer").then(data => {
     console.log(data);
   })
 })

 $('#sashimi').on('click', function(event) {
   $.get("/menu/sashimi").then(data => {
     console.log(data);
   })
 })

 $('#bowl').on('click', function(event) {
   $.get("/menu/bowl").then(data => {
     console.log(data);
   })
 })

 $('#oshisushi').on('click', function(event) {
   $.get("/menu/oshisushi").then(data => {
     console.log(data);
   })
 })

 $('#roll"').on('click', function(event) {
   $.get("/menu/roll").then(data => {
     console.log(data);
   })
 })



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
