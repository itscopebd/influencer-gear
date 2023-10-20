const humburger = document.getElementById("hunburger");
const mobile__menu = document.getElementById("mobile__menu");
const bars = document.getElementById("bars");
humburger.addEventListener("click", () => {
  if (mobile__menu.classList[1] == "show__mobile__menu") {
    console.log("roirq");

    mobile__menu.classList.remove("show__mobile__menu");
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
  } else {
    mobile__menu.classList.add("show__mobile__menu");
    bars.classList.add("fa-xmark");
    bars.classList.remove("fa-bars");
  }
});

// feature product load

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/newArrival.json")
    .then((res) => res.json())
    .then((data) => {
      createElements(data);
    })
    .catch((err) => {
      console.error(err);
    });

  const createElements = (data) => {
    const showItems = document.getElementById("new__arrival");
    console.log(data);
    data.forEach((element) => {
        console.log(element.name)
      let createCard = document.createElement("div");
      createCard.className = "card";
      createCard.innerHTML = `
             <figure><img src=${element.image} alt="" /></figure>
              <div class="product__info">
                <h3 class="product__title">${element?.name}</h3>
                <h4 class="price">$ ${element.price}</h4>
                <p class="ratting">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <span>${element.review}</span>
                </p>
                
                <button type="button" class="btn" onclick="addToCard(${element.id})" id="addToCardBtn">add to card</button>
              </div>
    `;
      showItems.appendChild(createCard);
    });
  };
});





// add to card 

const addToCard=(id)=>{
  console.log(id)
const addToCardBtn= document.getElementById("addToCardBtn");
const cardQuantity= document.getElementById("cardQuantity");
addToCardBtn.disabled=true;
console.log(addToCardBtn)


}
