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
    const qt=getSaveQuantity(product.id)
    let createElements = document.createElement("tr");
    createElements.innerHTML = `
      
              <td><img style="width:150px;height:150px" src=${product.image} alt=""></td>
              <td><h4>${product.name} </h4></td>
              <td><input type="number" onclick="updateQuantity(${product.id})" id="updateQuantity" min="1" value="${qt}"></td>
              <td>$ <span id="price">${product.price}</span></td>
              <td>$ <span id="totalPrice">${(qt*product.price).toFixed(2)}</span></td>
              <td><button onclick="removeCartItem(${product.id})" class="btn"><i class="fa-solid fa-trash"></i></button></td>
      
      `;
    createCartProduct.appendChild(createElements);
    
  });
};



// update quantity in localStorage
const updateQuantity = (id) => {
  const quatityField=document.getElementById("updateQuantity");
  const totalPrice=document.getElementById("totalPrice");
  const price=document.getElementById("price");
// console.log( typeof totalPrice.innerText)
  let shoppingCart = {};
  shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  const quantity = shoppingCart[id];
  for (key in shoppingCart) {
    if (key==id) {
      shoppingCart[key]=quantity+1;
      quatityField.setAttribute("value",shoppingCart[key].toString())
     const convertTotlePrice= parseFloat(totalPrice.innerText)
     const convertPrice= parseFloat(price.innerText)
     const calculatePrice= convertTotlePrice + convertPrice
     totalPrice.innerHTML=calculatePrice.toFixed(2);
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



// update quantity field value 

const getSaveQuantity=(id)=>{
  const getQuantity= JSON.parse(localStorage.getItem("shopping-cart"));
  for(key in getQuantity){
    if (key==id) {
      return getQuantity[key]
    }
  }
}