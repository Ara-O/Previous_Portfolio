const navbar = document.querySelector(".verticalnavbar");
const navbaricon = document.querySelector(".hamburgericon");
const body = document.querySelector("body");
const downArrow = document.querySelector(".downarrow");
const navlinks = document.querySelector(".links");
const navlinksul = document.querySelector(".linksul");

navbaricon.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

downArrow.addEventListener("click", function (e) {
  document.querySelector(e.target.dataset.scrollto).scrollIntoView({
    behavior: "smooth",
  });
});

navlinksul.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.tagName === "LI") {
    console.log(clicked);
    document.querySelector(clicked.dataset.scrollto).scrollIntoView({
      behavior: "smooth",
    });
  }
});
