let body=document.getElementsByTagName("body")
let root=document.getElementById("root")
let currency=document.getElementById("currency");
let language=document.getElementById("language");
let eng=document.getElementById("eng");
let valyuta=document.getElementById("valyuta")
let my_modal=document.getElementById("my-modals")
let delivery_location=document.getElementById("my-delivery")
let delivery_close_icon=document.getElementById("delivery-close-icon")
let cotegotiya=document.getElementById("cotegotiya")
let coteg_ul=document.getElementById("coteg-uls")

language.addEventListener("mouseenter", function(){
eng.classList.remove("none")
});
currency.addEventListener("mouseenter", function(){
    valyuta.classList.remove("none")

});

language.addEventListener("mouseleave", function(){
    eng.classList.add("none")
    eng.classList.add("trans")

});
currency.addEventListener("mouseleave", function(){
    valyuta.classList.add("none")
});
my_modal.addEventListener("click",function(e){
    delivery_location.classList.remove("none")
})
delivery_close_icon.addEventListener("click",function(e){
    delivery_location.classList.add("none");
 
})
$(document).ready(function(){
    let count=0;
$(document).on("click",".right",function(){

    if(count<1){
        count++;
        $(".images-slider").animate({
            "margin-left":`-${count*100}%`
            
            })
    }
    else{
count=0
$(".images-slider").animate({
    "margin-left":`-${count*100}%`   
    })
    }
})
$(document).on("click",".left",function(){

    if(count>0){
        count--;
        $(".images-slider").animate({
            "margin-left":`-${count*100}%`
            
            })
    }
    else{
count=1
$(".images-slider").animate({
    "margin-left":`-${count*100}%`   
    })
    }
})
}) 
let clickall=0
cotegotiya.addEventListener("click",function(e){
    clickall++;
    if(clickall%2==1){
        coteg_ul.classList.remove("none")
    }
    else{
     
  
      coteg_ul.classList.add("none")
    }
 
})
var yourDateToGo = new Date(); //here you're making new Date object
yourDateToGo.setDate(yourDateToGo.getDate() + 4); //your're setting date in this object 1 day more from now
//you can change number of days to go by putting any number in place of 1

var timing = setInterval(
  // you're making an interval - a thing, that is updating content after number of miliseconds, that you're writing after comma as second parameter
  function () {
    var currentDate = new Date().getTime(); //same thing as above
    var timeLeft = yourDateToGo - currentDate; //difference between time you set and now in miliseconds

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days
    if (days < 10) days = "0" + days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
    var hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); //conversion miliseconds on hours
    if (hours < 10) hours = "0" + hours;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes
    if (minutes < 10) minutes = "0" + minutes;
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); //conversion miliseconds on seconds
    if (seconds < 10) seconds = "0" + seconds;
   
        
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


  },
  1000
);$(document).ready(function(){
     
$('.items').slick({
 arrow:false,
 infinite: true,
 slidesToShow: 5,

 slidesToScroll: 1
});
         });