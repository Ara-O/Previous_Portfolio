const navbar = document.querySelector(".verticalnavbar");
const navbaricon = document.querySelector(".hamburgericon");
const body = document.querySelector("body");
const downArrow = document.querySelector(".downarrow");
const navlinks = document.querySelector(".links");
const navlinksul = document.querySelector(".linksul");
const skillssSection = document.querySelector(".skills");
const bookmarks = document.querySelector(".bookmarkcontainers");
const allbookmarks = document.querySelectorAll(".bookmark");
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
    document.querySelector(clicked.dataset.scrollto).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//Intersection observer
function callback([e]) {
  if (e.isIntersecting === true) {
    e.target.classList.add("slideup");
  }
}

const observeskills = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.01,
});

observeskills.observe(skillssSection);

//BOOKMARKS
bookmarks.addEventListener("mouseover", function (e) {
  const hovering = document.querySelector(
    `.bookmark--${e.target.dataset.bookmark}`
  );

  allbookmarks.forEach((e) => {
    e.style.right = "-50px";
  });

  hovering.style.right = "0px";
  hovering.style.zIndex = "200";
  hovering.style.boxShadow = "1px 1px black";
});

bookmarks.addEventListener("mouseleave", function () {
  allbookmarks.forEach((element) => {
    element.style.right = "-50px";
    element.style.boxShadow = "none";
    element.style.zIndex = "100";
  });
});
