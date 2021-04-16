"strict mode";
//\\navigation bar
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

// what will happen when you click the home tab on the nav bar
homeTab.addEventListener("click", function () {
  homePage.scrollIntoView({
    behavior: "smooth",
  });
});

// what will happen when you click the about tab on the nav bar
aboutTab.addEventListener("click", function () {
  aboutPage.scrollIntoView({
    behavior: "smooth",
  });
});
// what will happen when you click the services tab on the nav bar
servicesTab.addEventListener("click", function () {
  servicePage.scrollIntoView({
    behavior: "smooth",
  });
});
// what will happen when you click the contacts tab on the nav bar
contactTab.addEventListener("click", function () {
  contactPage.scrollIntoView({
    behavior: "smooth",
  });
});

//\\HomePage
const createCvBtn = document.querySelector(".createCV__button");
const progressPage = document.getElementById("section6");
const printDocumentTab = document.querySelector("#printTab");
const printDocumentPage = document.getElementById("section5");
const printDocumentBtn = document.querySelector(".printDocument__button");
const footer = document.querySelector(".footer");

// what will happen when you click the make cv tab on the nav bar and the create a CV on the home page
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
// what will happen when you click the print out tab on the nav bar and the print a document button on the home page
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

//\\ the Contact page
const contactsName = document.querySelector(".name");
const contactsEmail = document.querySelector(".email");
const contactsMssg = document.getElementById("message");
const contactsBtn = document.querySelector(".contact__button");

//\\ the contact form
contactsBtn.addEventListener("click", function () {
  if (
    contactsName.value.length > 0 &&
    contactsEmail.value.length > 0 &&
    contactsMssg.value.length > 0
  ) {
    console.log(
      `Name:${contactsName.value}, Email address:${contactsEmail.value}, Message:${contactsMssg.value}`
    );
    (contactsName.value = ""),
      (contactsEmail.value = ""),
      (contactsMssg.value = "");
    contactsName.focus();
  } else {
    alert("Fill in you name, email and your message");
  }
});
document.addEventListener("keypress", function (event) {
  if (event.keypress === 13 || event.which === 13) {
    if (
      contactsName.value.length > 0 &&
      contactsEmail.value.length > 0 &&
      contactsMssg.value.length > 0
    ) {
      console.log(
        `Name:${contactsName.value}, Email address:${contactsEmail.value}, Message:${contactsMssg.value}`
      );
      (contactsName.value = ""),
        (contactsEmail.value = ""),
        (contactsMssg.value = "");
      contactsName.focus();
    } else {
      alert("Fill in you name, email and your message");
    }
  }
});
