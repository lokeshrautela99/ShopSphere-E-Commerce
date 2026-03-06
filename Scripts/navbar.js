let btn = document.querySelector(".burgerMenu");
let slider = document.querySelector(".burgerSlider");
let closed = document.querySelector(".closed");

btn.addEventListener("click", function () {
  slider.style.width = "90%";
  slider.style.display = "block";
});

closed.addEventListener("click", function () {
  slider.style.width = "0px";
  slider.style.display = "none";
});

let cartCount = JSON.parse(localStorage.getItem("cartCount"));
document.querySelector(".cartCount").innerHTML = cartCount;
