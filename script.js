"strict mode";
// navigation bar
var homeTab = document.querySelector("#homeTab");
var homePage = document.querySelector("#section1");
var aboutPage = document.querySelector("#section2");
var aboutTab = document.querySelector("#aboutTab");
const serviceTab = document.querySelector("#servicesTab");
const servicePage = document.querySelector("#section3");
const contactTab = document.querySelector("#contactTab");
const contactPage = document.querySelector("#section4");
const createCvTab = document.querySelector("#createCv");
const logo = document.querySelector(".navbar__logo");

homeTab.addEventListener("click", function () {
  homePage.scrollIntoView({
    behavior: "smooth",
  });
});

aboutTab.addEventListener("click", function () {
  aboutPage.scrollIntoView({
    behavior: "smooth",
  });
});

servicesTab.addEventListener("click", function () {
  servicePage.scrollIntoView({
    behavior: "smooth",
  });
});
contactTab.addEventListener("click", function () {
  contactPage.scrollIntoView({
    behavior: "smooth",
  });
});

// HomePage

const createCvBtn = document.querySelector(".createCV__button");
const progressPage = document.getElementById("section6");
const printDocumentTab = document.querySelector("#printTab");
const printDocumentPage = document.getElementById("section5");
const printDocumentBtn = document.querySelector(".printDocument__button");
const footer = document.querySelector(".footer");

createCvBtn.addEventListener("click", function () {
  progressPage.style.display = "table";
  footer.style.display = "none";
  progressPage.scrollIntoView({
    behavior: "smooth",
  });
});
createCvTab.addEventListener("click", function () {
  progressPage.style.display = "table";
  footer.style.display = "none";
  progressPage.scrollIntoView({
    behavior: "smooth",
  });
});
printDocumentTab.addEventListener("click", function () {
  printDocumentPage.style.display = "table";
  footer.style.display = "none";
  printDocumentPage.scrollIntoView({
    behavior: "smooth",
  });
});
printDocumentBtn.addEventListener("click", function () {
  printDocumentPage.style.display = "table";
  footer.style.display = "none";
  printDocumentPage.scrollIntoView({
    behavior: "smooth",
  });
});
