// customer selected product show checkpout page
let filterData = [];
const filterAddtoCartProduct = () => {
  const selectedId = JSON.parse(localStorage.getItem("shopping-cart"));
console.log("Rofiq,,,")
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
      
              <td><img style="width:150px;height:150px" src=${product.image} alt=""></td>
              <td><h4>${product.name} </h4></td>
              <td><input type="number" onclick="updateQuantity(${product.id})" id="updateQuantity" min="1" value="1"></td>
              <td><span>$</span> ${product.price}</td>
              <td><span>$</span> ${product.price}</td>
              <td><button onclick="removeCartItem(${product.id})" class="btn"><i class="fa-solid fa-trash"></i></button></td>
      
      `;
    createCartProduct.appendChild(createElements);
  });
};



// update quantity in localStorage
const updateQuantity = (id) => {

  let shoppingCart = {};
  shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  const quantity = shoppingCart[id];
  for (key in shoppingCart) {
    if (key==id) {
      shoppingCart[key]=quantity+1;
    }
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
  quantityUpdate()
};


// remove cart items 

const removeCartItem=(id)=>{
  const data=JSON.parse(localStorage.getItem("shopping-cart"));

for(key in data){
  if (key==id) {
    const success=delete data[key];
    if (success) {
      localStorage.setItem("shopping-cart",JSON.stringify(data));
      filterAddtoCartProduct();
      quantityUpdate();
      location.reload()
    }
  }
}
 
}