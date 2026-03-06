import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.querySelector(".navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.querySelector(".footer");
footer_div.innerHTML = footer();

let price = JSON.parse(localStorage.getItem("Price")) || 0;
let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

const getData = async() => {
    try{
        let res = await fetch(`https://e-commerce-data-base.onrender.com/wishlist`);
    let data = await res.json();
    renderWishlistData(data)
    console.log("wishlist:" ,data)
    }catch(error){
        console.log("Error:",error)
    }finally{
        console.log("Function Completed")
    }
}
getData();

let addToCart = async(cartData) => {
    let res = await fetch(`https://e-commerce-data-base.onrender.com/cart`,{
        method: "POST",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify(cartData)
    });
    // let result = await res.json();
    cartCount++;
    document.querySelector(".cartCount").innerHTML = cartCount;
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
}

let removeData = async(data) => {
    let res = await fetch(`https://e-commerce-data-base.onrender.com/wishlist/${data}`,{
        method: "DELETE",
    });
    console.log(res);
}

let renderWishlistData = (data) => {
    let products = document.getElementById("wishlistProducts");
    products.innerHTML = null;
    data.forEach(({ id, img, brand, title, deal_price, actual_price }) => {
      let items = document.createElement("div");
      items.className = "items";
      let description = document.createElement("div");
      description.className = "items2";
      let image = document.createElement("img");
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
        let cartData = { productId: id, img, brand, title, deal_price, actual_price };
        addToCart(cartData);
        removeData(id);
        price+=Number(deal_price);
        localStorage.setItem("Price", JSON.stringify(price));
        addBtn.innerText = "Added to cart";
      };
      description.append(t, b, dp, ap, addBtn);
      items.append(image, description);
      products.append(items);
    });
  };


