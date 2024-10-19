let cover = document.getElementById("cover");
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let portfolio = document.getElementById("portfolio");
let services = document.getElementById("services");
let contact = document.getElementById("contact");
const displayHome = () => {
  cover.style.display = "block";
  cover.style.display = "flex";
  cover.style.justifyContent = "center";
  cover.style.alignItems = "center";
  about.style.display = "none";
  resume.style.display = "none";
  portfolio.style.display = "none";
  services.style.display = "none";
  contact.style.display = "none";
};
const displayAbout = () => {
  cover.style.display = "none";
  about.style.display = "block";
  about.style.display = "flex";
  about.style.flexDirection = "column";
  about.style.alignItems = "start";
  resume.style.display = "none";
  portfolio.style.display = "none";
  services.style.display = "none";
  contact.style.display = "none";
};
const displayResume = () => {
  cover.style.display = "none";
  about.style.display = "none";
  resume.style.display = "block";
  resume.style.display = "flex";
  resume.style.flexDirection = "column";
  resume.style.alignItems = "start";
  resume.style.justifyContent = "start";
  portfolio.style.display = "none";
  services.style.display = "none";
  contact.style.display = "none";
};
const displayPortfolio = () => {
  cover.style.display = "none";
  about.style.display = "none";
  resume.style.display = "none";
  portfolio.style.display = "block";
  portfolio.style.display = "flex";
  portfolio.style.justifyContent = "space-evenly";
  portfolio.style.alignItems = "center";
  services.style.display = "none";
  contact.style.display = "none";
};
const displayServices = () => {
  cover.style.display = "none";
  about.style.display = "none";
  resume.style.display = "none";
  portfolio.style.display = "none";
  services.style.display = "block";
  services.style.display = "flex";
  services.style.justifyContent = "space-evenly";
  services.style.alignItems = "center";
  contact.style.display = "none";
};
const displayContact = () => {
  cover.style.display = "none";
  about.style.display = "none";
  resume.style.display = "none";
  portfolio.style.display = "none";
  services.style.display = "none";
  contact.style.display = "block";
  contact.style.display = "flex";
  contact.style.flexDirection = "column";
  contact.style.justifyContent = "start";
};
const works = [
  "I'm a Developer",
  "I'm a Researcher",
  "I'm a Learner",
  "I'm a Creator",
  "I'm a Problem Solver",
];
const disappearingTexts = document.getElementById("disapper");
let wordIndex = 0;
let letterIndex = 0;
function displayLetterByLetter() {
  if (letterIndex <= works[wordIndex].length) {
    disappearingTexts.innerHTML = works[wordIndex].slice(0, letterIndex) + "|";
    letterIndex++;
  } else {
    setTimeout(() => {
      disappearingTexts.innerHTML = "";
      letterIndex = 0;
      wordIndex++;
      if (wordIndex === works.length) {
        wordIndex = 0;
      }
    }, 500);
  }
}
setInterval(displayLetterByLetter, 500);
