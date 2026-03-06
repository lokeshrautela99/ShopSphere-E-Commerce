import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.querySelector(".navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.querySelector(".footer");
footer_div.innerHTML = footer();

let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
let price = JSON.parse(localStorage.getItem("Price")) || 0;

let allData = [];
let getData = async () => {
  try{
    let res = await fetch(`https://e-commerce-data-base.onrender.com/productData`);
  let data = await res.json();
  Object.values(data).forEach((ele) => {
    allData.push(...ele);
  });
  renderMenData(data.men);
  renderWomenData(data.women);
  renderKidData(data.kid);
  renderAccessoriesData(data.accessories);
  }catch(error){
    console.log("Error:",error)
  }finally{
    console.log("getData Function Completed");
  }
};
getData();

let addToCart = async(cartData) => {
  let res = await fetch(`https://e-commerce-data-base.onrender.com/cart`, {
    method : "POST",
    headers: {"content-Type":"application/json"},
    body: JSON.stringify(cartData),
  });
  const result = await res.json();
  console.log(result)
  cartCount++;
  document.querySelector(".cartCount").innerHTML = cartCount;
  localStorage.setItem("cartCount", JSON.stringify(cartCount));
}

let addToFav = async (addData) => {
  let res = await fetch(`https://e-commerce-data-base.onrender.com/wishlist`, {
    method: "POST",
    headers: {"content-Type":"application/json"},
    body: JSON.stringify(addData),
  });
  let result = await res.json()
  console.log(result);
}

let removeData = async(data) => {
  let res = await fetch(`https://e-commerce-data-base.onrender.com/wishlist/${data}`,{
      method: "DELETE",
  });
  console.log(res);
}

let div = ({ id, img, brand, title, deal_price, actual_price }) => {
  let items = document.createElement("div");
  items.className = "items";
  let description = document.createElement("div");
  description.className = "items2";
  let image = document.createElement("img");
  image.src = `${img}`;
  let t = document.createElement("h3");
  t.innerHTML = `${title}`;
  let b = document.createElement("h4");
  b.innerHTML = `${brand}`;
  let dp = document.createElement("p");
  dp.innerHTML = `₹${deal_price}`;
  let ap = document.createElement("h5");
  ap.innerHTML = `M.R.P: ₹${actual_price}`;
  let addBtn = document.createElement("button");
  addBtn.innerText = "Add to cart";
  addBtn.onclick = () => {
    let cartData = { productId: id, img, brand, title, deal_price, actual_price };
    addToCart(cartData);
    addBtn.innerText = "Added to cart";
    price+=Number(deal_price)
    localStorage.setItem("Price", JSON.stringify(price));
  };
  let addFav = document.createElement("span");
    addFav.className = "addFav";
    let wishlistCounter = 0;
    addFav.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.c{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="c" d="m43,17.0766c0-5.6539-4.5835-10.2373-10.2374-10.2373-3.7223,0-6.9708,1.9932-8.7626,4.964-1.7919-2.9708-5.0403-4.964-8.7626-4.964-5.6539,0-10.2373,4.5834-10.2373,10.2373,0,1.2925.2496,2.524.6866,3.6627,3.3851,9.7368,18.3134,20.4215,18.3134,20.4215,0,0,14.9282-10.6847,18.3134-20.4215.437-1.1386.6867-2.3702.6867-3.6627Z"></path></g></svg>`
    addFav.onclick = () => {
      if(wishlistCounter === 0){
        addFav.innerHTML = `
      <svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M61.1 18.2c-6.4-17-27.2-9.4-29.1-.9c-2.6-9-22.9-15.7-29.1.9C-4 36.7 29.6 53.3 32 56c2.4-2.2 36-19.6 29.1-37.8" fill="#FF0000"></path></g></svg>
      `;
      let addData = { productId: id, img, brand, title, deal_price, actual_price };
      addToFav(addData);
      wishlistCounter = 1;
      }else{
        addFav.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.c{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="c" d="m43,17.0766c0-5.6539-4.5835-10.2373-10.2374-10.2373-3.7223,0-6.9708,1.9932-8.7626,4.964-1.7919-2.9708-5.0403-4.964-8.7626-4.964-5.6539,0-10.2373,4.5834-10.2373,10.2373,0,1.2925.2496,2.524.6866,3.6627,3.3851,9.7368,18.3134,20.4215,18.3134,20.4215,0,0,14.9282-10.6847,18.3134-20.4215.437-1.1386.6867-2.3702.6867-3.6627Z"></path></g></svg>`
        removeData(id);
      wishlistCounter = 0;
      }
      };
  description.append(t, b, dp, ap, addBtn, addFav);
  items.append(image, description);
  return items;
};

let renderMenData = (data) => {
  let menProducts = document.querySelector(".menProducts");
  menProducts.innerHTML = null;
  data.forEach((ele) => {
    menProducts.append(div(ele));
  });
};

let renderWomenData = (data) => {
  let womenProducts = document.querySelector(".womenProducts");
  womenProducts.innerHTML = null;
  data.forEach((ele) => {
    womenProducts.append(div(ele));
  });
};

let renderKidData = (data) => {
  let kidProducts = document.querySelector(".kidProducts");
  kidProducts.innerHTML = null;
  data.forEach((ele) => {
    kidProducts.append(div(ele));
  });
};

let renderAccessoriesData = (data) => {
  let accessoriesProducts = document.querySelector(".accessoriesProducts");
  accessoriesProducts.innerHTML = null;
  data.forEach((ele) => {
    accessoriesProducts.append(div(ele));
  });
};

let search = document.querySelector(".query");
let searchBtn = document
  .querySelector(".searchBtn")
  .addEventListener("click", searchFun);

function searchFun() {
  let searchVal = search.value;
  if (
    searchVal.toLowerCase() === "mobile phone" || "mobile phones" ||
    searchVal.toLowerCase() === "smartphone" || "smartphones"
  ) {
    window.location.href = "mobile.html";
  }
  else if (
     searchVal.toLowerCase() === "headphone" || "headphones"
  ) {
    window.location.href = "headphone.html";
  }
  if (
    searchVal.toLowerCase() === "laptop" || "laptops"
  ) {
    window.location.href = "laptop.html";
  }
  if (
    searchVal.toLowerCase() === "gaming console" || "gaming consoles"
  ) {
    window.location.href = "gaming.html";
  }
  if (
   searchVal.toLowerCase() === "book" || "books"
  ) {
    window.location.href = "books.html";
  }
  if (
    searchVal.toLowerCase() === "headphone" || "headphones" ||
    searchVal.toLowerCase() === "head phone" || "head phones"
  ) {
    window.location.href = "homeDecor.html";
  }
}
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchFun();
  }
});
