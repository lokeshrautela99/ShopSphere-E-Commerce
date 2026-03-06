import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.querySelector(".navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.querySelector(".footer");
footer_div.innerHTML = footer();

let signIn = document.querySelector(".parent1");
let signUp = document.querySelector(".parent2");
let resetForm = document.querySelector(".parent3");

document.getElementById("forgetPass").addEventListener("click", () => {
    signIn.style.display = "none";
    signUp.style.display = "none";
    resetForm.style.display = "block"

});

document.getElementById("signUp").addEventListener("click", () => {
    signIn.style.display = "none";
    resetForm.style.display = "none"
    signUp.style.display = "block";
})
