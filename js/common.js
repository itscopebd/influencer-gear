

// quentity update front end

const quantityUpdate = () => {
    const showQuatity = document.getElementById("cardQuantity");
    const getQuantity = localStorage.getItem("shopping-cart");
    // const quatityField=document.getElementById("updateQuantity");
    // console.log(quatityField)
    const convert = JSON.parse(getQuantity);
    let totalSum = 0;
    for (let key in convert) {
      const value = convert[key];
      totalSum = totalSum + value;
    }
    showQuatity.innerHTML = totalSum;
    // getSaveQuantity()
  };
  
  quantityUpdate();
