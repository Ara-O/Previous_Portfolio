const navbar = document.querySelector(".verticalnavbar");
const navbaricon = document.querySelector(".hamburgericon");

navbaricon.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});
