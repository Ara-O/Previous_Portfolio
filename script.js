"use strict";

const navbar = document.querySelector(".verticalnavbar");
const navbaricon = document.querySelector(".hamburgericon");
const body = document.querySelector("body");
const downArrow = document.querySelector(".downarrow");
const navlinks = document.querySelector(".links");
const navlinksul = document.querySelector(".linksul");
const skillssSection = document.querySelector(".skills");
// const bookmarks = document.querySelector(".bookmarkcontainers");
// const allbookmarks = document.querySelectorAll(".bookmark");
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
// bookmarks.addEventListener("mouseover", function (e) {
//   if (e.target.tagName === "DIV") {
//     allbookmarks.forEach((e) => {
//       e.style.left = "-50px";
//       e.style.boxShadow = "none";
//       e.style.zIndex = "100";
//     });

//     const hovering = document.querySelector(
//       `.bookmark--${e.target.dataset.bookmark}`
//     );

//     hovering.style.left = "30px";
//     hovering.style.zIndex = "200";
//     hovering.style.boxShadow = "1px 1px black";

//     // if (hovering.tagName !== "H3") {
//     //   hovering.addEventListener("click", function (e) {
//     //     console.log(e.target);
//     //   });
//     // }
//   }
// });

// bookmarks.addEventListener("click", function (e) {
//   if (e.target.tagName === "H3") {
//     const clicked = e.target;

//     document
//       .querySelector(`.${clicked.closest(".bookmark").dataset.scroll}`)
//       .scrollIntoView({
//         behavior: "smooth",
//       });
//   }
// });

// // LEAVING BOOKMARK/

// bookmarks.addEventListener("mouseleave", function () {
//   allbookmarks.forEach((element) => {
//     element.style.left = "-50px";
//     element.style.boxShadow = "none";
//     element.style.zIndex = "100";
//   });
// });
