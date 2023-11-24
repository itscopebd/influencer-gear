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
    data.forEach((element) => {
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

const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// add to card

const addToCard = (id) => {
  let shoppingCart = getShoppingCart();
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    alert("This Product Already Added!");
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  quantityUpdate();
};


// show category

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/category.json")
    .then((res) => res.json())
    .then((data) => {
      showCategory(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
const showCategory = (data) => {
  const category = document.getElementById("category");
  data.forEach((value) => {
    const createCart = document.createElement("div");
    createCart.className = "card";
    createCart.innerHTML = `
    <a href=${value.name}>
              <figure>  <img src=${value.image} alt=${value.name} /></figure>
              <div class="product__info">
                <h3 class="product__title">${value.name}</h3>
              </div> </a>`;
    category.appendChild(createCart);
  });
};



// search box hide and show 


const searchBox=()=>{
  console.log("Rfoiq")
  const search__wrap= document.getElementById("search__wrap");
  search__wrap.style.display="block";
}









// splide js

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    gap: "1rem",
    breakpoints: {
      992: {
        perPage: 2,
      },
      576: {
        perPage: 1,
      },
    },
  });

  splide.mount();
});

