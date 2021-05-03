"use strict";

const navbar = document.querySelector(".verticalnavbar");
const navbaricon = document.querySelector(".hamburgericon");
const body = document.querySelector("body");
const downArrow = document.querySelector(".downarrow");
const navlinks = document.querySelector(".links");
const navlinksul = document.querySelector(".linksul");
const skillssSection = document.querySelector(".skills");

const slide = function (clicked) {
  document.querySelector(clicked.dataset.scrollto).scrollIntoView({
    behavior: "smooth",
  });
};

// const bookmarks = document.querySelector(".bookmarkcontainers");
// const allbookmarks = document.querySelectorAll(".bookmark");
navbaricon.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

downArrow.addEventListener("click", function (e) {
  const clicked = e.target;
  slide(clicked);
});

navlinksul.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.tagName === "LI") {
    slide(clicked);
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

const projects = document.querySelector(".projectshowcase");
const overlay = document.querySelector(".overlay");
const projectpage = document.querySelector(".projectpage");
const cancelOverlay = document.querySelector(".canceloverlay");
const projectpageimage = document.querySelector(".projectimg");
const githublink = document.querySelector(".projectgithublink");
const desctext = document.querySelector(".descriptiontext");
const tools = document.querySelector(".projecttoolslist");

projects.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked.tagName === "IMG" && body.getBoundingClientRect().width > 1112) {
    cancelOverlay.style.display = "block";
    projectpageimage.src = clicked.dataset.source;
    githublink.setAttribute("href", clicked.dataset.githublink);
    githublink.setAttribute("target", "_blank");
    githublink.setAttribute("rel", " noopener noreferrer");
    body.style.overflow = "hidden";
    overlay.style.display = "block";
    projectpage.style.display = "flex";
    desctext.textContent = clicked.dataset.desc;
    // PRINT TOOLS
    const toolsUsed = clicked.dataset.tools.split(",").reverse();
    tools.textContent = "";
    toolsUsed.forEach((tool) => {
      tools.insertAdjacentHTML("afterbegin", `<li>${tool}</li>`);
    });
  }
});

cancelOverlay.addEventListener("click", function () {
  overlay.style.display = "none";
  projectpage.style.display = "none";
  body.style.overflow = "visible";
});

// CONTACT ME PAGE

const navbarcta = document.querySelector(".navbarcta");
const contactoverlay = document.querySelector(".contactmeoverlay");
const cancelbutton = document.querySelector(".contactmecancelicon");
const contactmepage = document.querySelector(".contactmepage");
//click contact, show contact page, slide nav in

navbarcta.addEventListener("click", function () {
  cancelbutton.style.display = "block";
  navbar.classList.toggle("slide");
  overlay.style.display = "block";
  contactoverlay.style.zIndex = 250;
  contactmepage.style.display = "block";
  cancelOverlay.style.display = "none";
});

cancelbutton.addEventListener("click", function () {
  overlay.style.display = "none";
  contactoverlay.style.zIndex = -100;
  cancelbutton.style.display = "none";
  contactmepage.style.display = "none";
});

// SEND CONTACT MESSAGE
const emailer = document.querySelector(".contactmepageinput");
const textarea = document.querySelector(".contactmepagetextarea");

const contactmepagebutton = document.querySelector(".contactmepagebutton");
contactmepagebutton.addEventListener("click", function () {
  if (emailer.value.trim() !== "" && textarea.value.trim() !== "") {
    window.open(
      `mailto:oladipoeyiara@gmail.com?subject=Incoming Message From ${emailer.value}&body=${textarea.value}`
    );
  } else {
    return false;
  }
});
