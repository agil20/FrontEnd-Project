let currency=document.getElementById("currency");
let language=document.getElementById("language");
let eng=document.getElementById("eng");
let delivery_icon=document.getElementsByClassName("delivery-icon")
let valyuta=document.getElementById("valyuta")
let my_modal=document.getElementsByClassName("my-modal")
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
delivery_icon.addEventListener("click",function(){
})
dmy_modal_icon.addEventListener("click",function(){

})
