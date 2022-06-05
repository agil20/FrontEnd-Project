let currency=document.getElementById("currency");
let language=document.getElementById("language");
let eng=document.getElementById("eng");
let valyuta=document.getElementById("valyuta")
let my_modal=document.getElementById("my-modals")
let delivery_location=document.getElementById("my-delivery")
language.addEventListener("mouseenter", function(){
eng.classList.remove("none")
});
currency.addEventListener("mouseenter", function(){
    valyuta.classList.remove("none")
    valyuta.classList.add("trans")

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
    document.body.addEventListener.add("filter")
})