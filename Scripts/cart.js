import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.querySelector(".navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.querySelector(".footer");
footer_div.innerHTML = footer();
let cartCount = JSON.parse(localStorage.getItem("cartCount"));
let price = JSON.parse(localStorage.getItem("Price")) || 0;
console.log(typeof price)
let total = document.getElementById("total");
total.innerHTML = `₹${price}`;
let finalAmount = document.getElementById("finalAmount");
finalAmount.innerHTML = `₹${price}`;
let deliveryCharges = document.getElementById("deliveryCharges");
// let discountPrice = document.getElementById("discount").innerHTML;
// console.log("Discount:",discountPrice)

if(price > 1999){
  deliveryCharges.innerHTML = "Free"
}
else if(price<=1999 && price >= 1){
  deliveryCharges.innerHTML = `₹${199}`;
  finalAmount.innerHTML = price+199
}
else if(price <= 0 ){
  deliveryCharges.innerHTML = 0;
}

let cartData = async () => {
  try {
    let res = await fetch(`https://e-commerce-data-base.onrender.com/cart`)
    let data = await res.json();
    renderCartData(data)
    
  }catch (error) {
    console.log("Error:", error);
  }finally{
    console.log("cartData Function Completed");
  }
   
}
cartData();

let deleteProduct = async(data) => {
    let res = await fetch(`https://e-commerce-data-base.onrender.com/cart/${data}`,{
        method: "DELETE",
    });
    console.log(res);
};


let container = document.getElementById("cartProducts");
function renderCartData(data) {
  container.innerHTML = null;
  data.forEach(({ id, img, brand, title, deal_price, actual_price }) => {
    let product = document.createElement("div");
    product.className = "items";
    let image = document.createElement("img");
    image.src = `${img}`;
    let b = document.createElement("h4");
    b.innerText = `${brand}`;

    let t = document.createElement("h3");
    t.innerText = `${title.slice(0, 52)}...`;

    let dp = document.createElement("p");
    dp.innerText = `₹${deal_price}`;
    
    let ap = document.createElement("h5");
    ap.innerText = `M.R.P: ₹${actual_price}`;

    let deltBtn = document.createElement("img");
    deltBtn.src = "./images/cart/delete.png"; 
    // deltBtn.innerHTML = `<svg fill="#FF0000" width="20px" height="20px" viewBox="-6.7 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 109.484 122.88" xml:space="preserve" stroke="#FF0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"></path> </g> </g></svg>`;
    deltBtn.onclick = () => {
      let deltData = `${id}`;
      deleteProduct(deltData);
      price-=Number(deal_price);
      localStorage.setItem("Price", JSON.stringify(price));
      cartCount--
      document.querySelector(".cartCount").innerHTML = cartCount;
      localStorage.setItem("cartCount",JSON.stringify(cartCount));
    }

    let brandDlt = document.createElement("div");
    brandDlt.className = "items1";
    brandDlt.append(b,deltBtn);
    let items2 = document.createElement("div");
    items2.className = "items2";
    items2.append(brandDlt, t, dp, ap);
    product.append(image, items2);    
    container.append(product);
  })
}


// let totalPrice = document.getElementById("total");
// totalPrice.innerHTML - null;
// let discount = document.getElementById("discount");
// discount.innerHTML = null;
// let dealAmount = document.getElementById("finalAmount");
// dealAmount.innerHTML - null;
// let deliveryCharges = document.getElementById("deliveryCharges");
// deliveryCharges.innerHTML = null;
// let updateCartCount = document.getElementById("counter");
// let container = document.getElementById("cartProducts");
// let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
// let productPrice = JSON.parse(localStorage.getItem("price")) || 0; 
// let couponApplied  =  JSON.parse(localStorage.getItem("couponApplied")) || false;



// removeItem fun -->

// let remove = (index, ele) => {
//   let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
//   cartLS.splice(index, 1);
//   productPrice -= ele.price;
//   totalPrice.innerHTML = `₹ ${productPrice}`;
//   dealAmount.innerHTML = `₹ ${productPrice}`;
//   if (productPrice == 0) {
//     deliveryCharges.innerHTML = "";
//     dealAmount.innerHTML = "";
//     totalPrice.innerHTML = "";
//     discount.innerHTML = "";
//   } else if (productPrice <= 1999) {
//     deliveryCharges.innerHTML = `₹ ${149}`;
//     dealAmount.innerHTML = `₹ ${productPrice + 149}`;
//   } else if (productPrice > 1999) {
//     deliveryCharges.innerHTML = "Free";
//     deliveryCharges.style.color = "teal";
//     deliveryCharges.style.fontWeight = "bold";
//   }
//   window.localStorage.removeItem("couponApplied");
//   window.localStorage.removeItem("cartTotal");
//   window.localStorage.removeItem("discountAmount");
//   discount.innerHTML = "";
//   localStorage.setItem("price", JSON.stringify(productPrice));
//   updateCartCount.innerText = cartLS.length;
//   localStorage.setItem("cart", JSON.stringify(cartLS));
//   renderDom(cartLS);
// };


// // ProductPage fun -->
// const newPage = (ele) => {
//   localStorage.setItem("products", JSON.stringify(ele)) || [];
//   window.location.href = "productPage.html";
// };

// // Chekout Page And Cart Alert function -->
// document.getElementById("checkout").addEventListener("click", () => {
//   if (productPrice == 0) {
//     let emptyAlert = document.getElementById("cartAlert");
//     emptyAlert.style.display = "block";
//     emptyAlert.innerHTML = "Your cart is empty please add item";
//   } else {
//     window.location.href = "checkout.html";
//     emptyAlert.style.display = "none";
//   }
// });

//   document.getElementById("doShopping").addEventListener("click", function () {
//     window.location.href = "index.html";
//   });


// let couponAppliedBalance = JSON.parse(localStorage.getItem("cartTotal")) || 0;
// let discountAmount = JSON.parse(localStorage.getItem("discountAmount")) || 0;

// if(couponApplied == true && couponAppliedBalance <= 1999 ){
// dealAmount.innerHTML= `₹ ${couponAppliedBalance +149}` ;
// discount.innerHTML = `-${discountAmount}`;
// }
// if(couponApplied == true  && couponAppliedBalance > 1999){
//   dealAmount.innerHTML= `₹ ${couponAppliedBalance}`;
//   discount.innerHTML = `-${discountAmount}`;
// }

