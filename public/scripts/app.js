
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenu = document.querySelector(".submenu");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const nav = document.querySelector(".nav");
const navCloseBtn = document.querySelector(".nav-close-btn");
const navOpenBtn = document.querySelector(".bars-3");
const cart = document.querySelector(".cart");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cartOpenBtn = document.querySelector(".cart-open-btn");
const overlay = document.querySelector(".overlay");

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });

});

submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300")
    submenu.classList.toggle("submenu--open");

});

navOpenBtn.addEventListener("click", openNav);
navCloseBtn.addEventListener("click", closeNav);

cartOpenBtn.addEventListener("click", openCart);
cartCloseBtn.addEventListener("click", closeCart);

// Nav
function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
}
function openNav() {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");

    overlay.classList.toggle("overlay--visible");
}
// Cart
function closeCart() {
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");

    overlay.classList.remove("overlay--visible");
}
function openCart() {
    cart.classList.remove("-left-64");
    cart.classList.add("left-0");

    overlay.classList.toggle("overlay--visible");
}