const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

const header = document.querySelector("header");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

/* Click item and close menu feature : */

const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

document.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 10);
});
