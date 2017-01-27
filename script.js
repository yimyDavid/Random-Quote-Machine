$(document).ready(function(){
  //to get new quotes otherwise quotes don't change
  //randomly
  $.ajaxSetup({ cache: false });

    $(".change").ready(function(){
    getQuote();
   });
   
  var getQuote = function(){
  var r, g, b;
   //Generate rgb random colors
  r = Math.floor((Math.random() * 255) + 1);
  g = Math.floor((Math.random()*255)+1);
  b = Math.floor((Math.random()*255) +1);
    
  //change colors of differents areas of the page
  $(".bg-color").css("background-color", "rgb(" + r + ',' + g + ',' + b + ")");
  $(".quote-text").css("color", "rgb(" + r + ',' + g + ',' + b + ")"); 
  $(".comillas").css("color", "rgba(" + r + ',' + g + ',' + b + ',' + 0.3 + ")");
  $(".change").css({"background-color": "rgb(" + r + ',' + g + ',' + b + ")","color":"white"});
   //get quotes, only one at a time.
   $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      
   //assigning quotes to elements in the page 
    
  $(".quote-text").html(a[0].content);
      $("#author").html(a[0].title);
       var b = $("button:first");
 
  $(".bg-quote").css("height", $(".quote-text").height() + 180);
     
  var te = $(".quote").find("p").text();
  var text ="";
  //if the quotes are larger than the length allowed(140)by tweeter
  if(te.length > 140){
     text = te.substr(0, 137);
     text += "...";
  }else{
     text = te;
  }
  var nl = "https://twitter.com/intent/tweet?url=&text=";  
  nl += text;
   
  $(".quote").find("a").attr("href", nl);
 
});
                            } 
$(".change").click(function(){
  //Call the function that does almost everything.
  getQuote();
 });
});
