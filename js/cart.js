

// customer selected product show checkpout page

const showAddtoCartProduct = () => {
    const selectedId = JSON.parse(localStorage.getItem("shopping-cart"));
    let filterData = [];
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
      });
  };

  document.addEventListener("DOMContentLoaded",showAddtoCartProduct)


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
  
  // quentity update front end

