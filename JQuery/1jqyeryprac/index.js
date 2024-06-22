//change style
$("h1").css("color" , "red");

//change text
$("h1").text("hola");

//change innerHtml
$("h1").html("<em>h1</em>");
$("button").html("<b>Click Me</b>");

//manipulate attribute
$("a").attr("href" , "https://www.yahoo.com");

//eventlisteners
$("button").click(function(){
    $("button").css("color","yellow");
})

$(".btn1").click(function() {
    $(".btn1").css("color", "pink");
  });


//jo key press hogi wahi h1 ko replace karegi
// $("body").keydown(function(event){  
//     $("h1").text(event.key);
// })



//animations using jquery
$("button").on("click" , function(){
    $("h1").slideUp().slideDown().fadeToggle();
});