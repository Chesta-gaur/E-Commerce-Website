// mobile header
const hamburger = document.querySelector(".hamburger");
const mobileNavbar = document.querySelector(".mobile-navbar");
const navLinks = document.querySelectorAll(".mobile-navbar a");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNavbar.classList.toggle("active");
  document.body.classList.toggle("menu-open");
  overlay.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileNavbar.classList.remove("active");
    document.body.classList.remove("menu-open");
    overlay.classList.remove("active");
  });
});

// single product image changes
const mainImg = document.getElementById("mainImg");
const smallImg = document.querySelectorAll(".smallImg");

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};
