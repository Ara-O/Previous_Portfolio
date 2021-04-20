const navbar = document.querySelector(".verticalnavbar");
const navbaricon = document.querySelector(".hamburgericon");
const body = document.querySelector("body");
const downArrow = document.querySelector(".downarrow");
const navlinks = document.querySelector(".links");
const navlinksul = document.querySelector(".linksul");
const experiencesSection = document.querySelector(".experience");

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

const observeExperiences = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.3,
});

observeExperiences.observe(experiencesSection);
