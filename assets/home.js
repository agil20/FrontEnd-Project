let body=document.getElementsByTagName("body")
let root=document.getElementById("root")
let currency=document.getElementById("currency");
let language=document.getElementById("language");
let eng=document.getElementById("eng");
let valyuta=document.getElementById("valyuta")
let my_modal=document.getElementById("my-modals")
let delivery_location=document.getElementById("my-delivery")
let delivery_close_icon=document.getElementById("delivery-close-icon")

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

$(document).on("click","")

})

