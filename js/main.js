const humburger = document.getElementById("hunburger");
const mobile__menu = document.getElementById("mobile__menu");
const bars = document.getElementById("bars");
humburger.addEventListener("click", () => {
  

if (mobile__menu.classList[1]=="show__mobile__menu") {

    console.log("roirq")



    mobile__menu.classList.remove("show__mobile__menu") 
    bars.classList.remove("fa-xmark")
    bars.classList.add("fa-bars")
}
else{
    mobile__menu.classList.add("show__mobile__menu") 
    bars.classList.add("fa-xmark")
    bars.classList.remove("fa-bars")
}

 
});
