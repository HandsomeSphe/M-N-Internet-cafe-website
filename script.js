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
const contactsBtn = document.querySelector("#sendBtn");

//\\ the contact form

// this what will happen when you click the send button on the contact form
contactsBtn.addEventListener("click", function () {
  if (
    contactsName.value.length > 0 &&
    contactsEmail.value.length > 0 &&
    contactsMssg.value.length > 0
  ) {
    console.log(
      `Name:${contactsName.value}, Email address:${contactsEmail.value}, Message:${contactsMssg.value}`
    );
    setTimeout(function () {
      (contactsName.value = ""),
        (contactsEmail.value = ""),
        (contactsMssg.value = "");
      contactsName.focus();
    }, 1000);
  } else {
    alert("Fill in you name, email and your message");
  }
});
// the test for auto submition
var doneBtn = document.querySelector(".doneBtn");
var test = document.querySelector("#test");
const skills = document.querySelector(".mySkills");
doneBtn.addEventListener("click", function () {
  autoSubmission();
});
function autoSubmission() {
  document.test.submit();
}

//\\ The print page
const printerName = document.querySelector(".printer__details--name");
const printerSurname = document.querySelector(".printer__details--surname");
const printerDocument = document.querySelector(".upload");
//let printerNumber = document.querySelector(".page__numbers");
const printerBtn = document.querySelector(".printOut__button");
const img = document.querySelector(".dropIcon");
const input = document.querySelector(".upload");
// trying to display the image and name of the image when a client uploads a document
input.addEventListener("change", (event) => {
  var url = URL.createObjectURL(event.target.files[0]);

  console.log(event.target.files[0]);
  if ((event.target.files[0].type = "img/png")) {
    img.src = url;
    console.log("well it is an image");
  } else if (
    (event.target.files[0].type =
      "application/vnd.openxmlformats-officedocument.presentationml.presentation")
  ) {
    var fileName = document.querySelector("#nname");
    fileName.classList.innerHTML = "pptx";
    console.log(`well it is an powerpoint`);
  }
  fileName.innerHTML = event.target.files[0].name;
  //.innerHTML = event.target.files[0].name;
});

printerBtn.addEventListener("click", function () {
  if (printerName.value.length > 0 && printerSurname.value.length > 0) {
    console.log(`${printerName.value}, ${printerSurname.value}`);

    printerName.value = "";
    printerSurname.value = "";
  } else {
    alert(`please make sure all input are filled `);
  }
});

// the create a cv page

var CreateB = document.querySelector("#createB");
let proPage = document.querySelector("#section6");
const createCvPage = document.querySelector(".createCV");
const cancelBtnOne = document.querySelector("#One");
const nextBtnOne = document.querySelector("#next1");
const schoolsPage = document.querySelector(".schools");
const cancelBtnTwo = document.querySelector("#Two");
const nextBtnTwo = document.querySelector("#next2");
const workPage = document.querySelector(".workExperience");
const cancelBtnThree = document.querySelector("#Three");

const donePage = document.querySelector(".donePage");
// this is what will happen if you click the big red button written create a cv
CreateB.addEventListener("click", function () {
  createCvPage.style.display = "block";
  createCvPage.scrollIntoView({
    behavior: "smooth",
  });
});
cancelBtnOne.addEventListener("click", function () {
  proPage.scrollIntoView({
    behavior: "smooth",
  });
  setTimeout(function () {
    createCvPage.style.display = "none";
  }, 1000);
});
nextBtnOne.addEventListener("click", function () {
  schoolsPage.style.display = "block";
  schoolsPage.scrollIntoView({
    behavior: "smooth",
  });
});
cancelBtnTwo.addEventListener("click", function () {
  createCvPage.scrollIntoView({
    behavior: "smooth",
  });
  setTimeout(function () {
    schoolsPage.style.display = "none";
  }, 1000);
});
nextBtnTwo.addEventListener("click", function () {
  workPage.style.display = "block";
  workPage.scrollIntoView({
    behavior: "smooth",
  });
});
cancelBtnThree.addEventListener("click", function () {
  schoolsPage.scrollIntoView({
    behavior: "smooth",
  });
  setTimeout(function () {
    workPage.style.display = "none";
  }, 1000);
});
doneBtn.addEventListener("click", function () {
  donePage.style.display = "flex";
  donePage.scrollIntoView({
    behavior: "smooth",
  });
  setTimeout(function () {
    schoolsPage.style.display = "none";
    workPage.style.display = "none";
    createCvPage.style.display = "none";
    proPage.style.display = "none";
  }, 1000);
});
