//Mainpulating styles
// $("h1").css("color","red");

// display style
// console.log($("h1").css("color"));

//add and remove class 
// $("h1").addClass("new");
// $("h1").removeClass("new");

//manipulating text 
// $("h1").text("<b>jQuery</b>");//can not have tags(tags are printed)
// $("h1").html("<b>jQuery</b>");//can have tags(tags are applied)

//check for class
// $("h1").hasClass("class-name");

// manipulating attributes
// console.log($("img").attr("src"));
// $("img").attr("src","apple.com");

//event listener
// $("h1").click(function(){
//     $("h1").css("color","red");
// });
//to apply on all elements
// $("button").click(function(){
//     $("h1").css("color","green");
// });
//types :- click,keypress,
//
// $("input").keypress(function(event){
//     // console.log(event.key);
//     $("h1").text(event.key);
//     or
// });
//click methods
$("button").on("click",function(){
    // $("h1").css("color","green");
    // $("h1").slideToggle();
    $("h1").animate({opacity:0.5})
});

//adding and removing elements
// $("div").before("<button>before</button>");//before tag
// $("div").prepend("<button>prepend</button>");//after opening tag
// $("div").append("<button>append</button>");//before closing tag

//animations
// $("div").hide();
// $("div").show();
// $("div").toggle();
// $("div").fadeOut();
// $("div").fadeIn();
// $("div").fadeToggle();
// $("div").slideUp();
// $("div").slideDown();
// $("div").slideToggle();

//custom animation
// $("h1").animate({opacity:0.5})