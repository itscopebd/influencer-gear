// customer selected product show checkpout page
let filterData = [];
const filterAddtoCartProduct = () => {
  const selectedId = JSON.parse(localStorage.getItem("shopping-cart"));

  fetch("data/newArrival.json")
    .then((res) => res.json())
    .then((data) => {
      for (key in selectedId) {
        data.forEach((product) => {
          if (product.id === key) {
            filterData.push(product);
          }
        });
      }
      showAddtoCartProduct(filterData);
    });
};

document.addEventListener("DOMContentLoaded", filterAddtoCartProduct);

const showAddtoCartProduct = (data) => {
  let createCartProduct = document.getElementById("createCartProduct");

  data.forEach((product) => {
    let createElements = document.createElement("tr");
    createElements.innerHTML = `
      
              <td><img style="width:150px;height:150px;border-radius:50%" src=${product.image} alt=""></td>
              <td><h4>${product.name} </h4></td>
              <td><input type="number" id="updateQuantity" min="1" value="1"></td>
              <td><span>$</span> ${product.price}</td>
              <td><span>$</span> ${product.price}</td>
              <td><button class="btn"><i class="fa-solid fa-trash"></i></button></td>
      
      `;
      createCartProduct.appendChild(createElements)
  });
};

//   const getShoppingCart = () => {
//     let shoppingCart = {};
//     const storedCart = localStorage.getItem("shopping-cart");
//     if (storedCart) {
//       shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
//   };

// add to card

// const addToCard = (id) => {
//     let shoppingCart = getShoppingCart();
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//       shoppingCart[id] = 1;
//     } else {
//       alert("This Product Already Added!");
//     }
//     localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
//     quantityUpdate();
//   };
