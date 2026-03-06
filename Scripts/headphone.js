import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.querySelector(".navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.querySelector(".footer");
footer_div.innerHTML = footer();
let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
let price = JSON.parse(localStorage.getItem("Price")) || 0;


let headphoneDataArr = [];
const getData = async () => {
  try {
    let res = await fetch(`https://e-commerce-data-base.onrender.com/productData`);
    let data = await res.json();
    headphoneDataArr.push(...data.headphone);
    renderHeadphoneData(headphoneDataArr);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("function completed");
  }
};
getData();

let addToCart = async (cartData) => {
  let res = await fetch(`https://e-commerce-data-base.onrender.com/cart`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(cartData),
  });
  const result = await res.json();
  console.log(result)
  cartCount++
  document.querySelector(".cartCount").innerHTML = cartCount
  localStorage.setItem("cartCount", JSON.stringify(cartCount))
};

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

let products = document.querySelector(".headphoneProducts");
let renderHeadphoneData = (data) => {
  products.innerHTML = null;
  data.forEach(({ id, img, brand, title, deal_price, actual_price }) => {
    let items = document.createElement("div");
    items.className = "items";
    let description = document.createElement("div");
    description.className = "items2";
    let image = document.createElement("img");
    image.className = "image";
    image.src = `${img}`;
    let t = document.createElement("h3");
    t.innerHTML = `${title.slice(0, 52)}...`;
    let b = document.createElement("h4");
    b.innerHTML = `Brand by ${brand}`;
    let dp = document.createElement("p");
    dp.innerHTML = `₹${deal_price}`;
    let ap = document.createElement("h5");
    ap.innerHTML = `MRP : ₹${actual_price}`;
    let addBtn = document.createElement("button");
    addBtn.innerText = "Add to Cart";
    addBtn.onclick = () => {
      let cartData = { productId: id, img, brand, title, deal_price,actual_price };
      addToCart(cartData);
      price+=Number(deal_price) 
      localStorage.setItem("Price", JSON.stringify(price))
      addBtn.innerText = "Added to cart";
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
    products.append(items);
  });
};

let search = document.querySelector(".query");
let searchBtn = document
  .querySelector(".searchBtn")
  .addEventListener("click", searchFun);
function searchFun() {
  let searchVal = search.value;
  let searchedData = headphoneDataArr.filter((ele) => {
    return (
      ele.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      ele.category.toLowerCase().includes(searchVal.toLowerCase())
    );
  });
  renderHeadphoneData(searchedData);
}

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchFun();
  }
});

document.getElementById("sortLH").addEventListener("click", () => {
  let sortedLH = headphoneDataArr.sort((a, b) => a.deal_price - b.deal_price);
  renderHeadphoneData(sortedLH);
});
document.getElementById("sortHL").addEventListener("click", () => {
  let sortedHL = headphoneDataArr.sort((a, b) => b.deal_price - a.deal_price);
  renderHeadphoneData(sortedHL);
});

let allProducts = document.querySelector(".allProducts");
let category1 = document.querySelector(".category1");
let category2 = document.querySelector(".category2");
let category3 = document.querySelector(".category3");
let category4 = document.querySelector(".category4");
allProducts.addEventListener("click", () => {
  renderHeadphoneData(headphoneDataArr);
});
category1.addEventListener("click", () => {
  let filtered = headphoneDataArr.filter((ele) => {
    return ele.category === category1.innerText;
  });
  renderHeadphoneData(filtered);
});
category2.addEventListener("click", () => {
  let filtered = headphoneDataArr.filter((ele) => {
    return ele.category === category2.innerText;
  });
  renderHeadphoneData(filtered);
});
category3.addEventListener("click", () => {
  let filtered = headphoneDataArr.filter((ele) => {
    return ele.category === category3.innerText;
  });
  renderHeadphoneData(filtered);
});
category4.addEventListener("click", () => {
  let filtered = headphoneDataArr.filter((ele) => {
    return ele.category === category4.innerText;
  });
  renderHeadphoneData(filtered);
});

