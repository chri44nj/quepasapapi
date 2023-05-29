/* BURGER MENU */

const burgerMenu = document.querySelector(".burgerMenu");
const navItems = document.querySelector(".navItems");

burgerMenu.addEventListener("mousedown", () => {
  burgerMenu.classList.toggle("active");
  navItems.classList.toggle("active");
  console.log("Må du have en god dag!");
});

document.querySelectorAll(".navItem").forEach((n) =>
  n.addEventListener("mousedown", () => {
    burgerMenu.classList.remove("active");
    navItems.classList.remove("active");
  })
);

/* SLIDESHOW */

var counter = 1;
var totalSlides = 8; // Update the total number of slides here
var intervalID;

function startSlideshow() {
  intervalID = setInterval(function () {
    counter++;
    if (counter > totalSlides) {
      counter = 1;
    }
    radioButtons[counter - 1].checked = true;
    clickedButtonIndex = counter - 1; // Update the clickedButtonIndex
  }, 5000);
}

startSlideshow();

var radioButtons = document.querySelectorAll('input[name="radioButton"]');
var isManualNavigation = false;
var clickedButtonIndex = 0;
var delayTimer;

var prevButton = document.querySelector(".prevButton");
var nextButton = document.querySelector(".nextButton");

prevButton.addEventListener("click", handlePrevButtonClick);
nextButton.addEventListener("click", handleNextButtonClick);

radioButtons.forEach(function (radioButton, index) {
  radioButton.addEventListener("click", function () {
    clickedButtonIndex = index;
    handleRadioButtonClick();
  });

  if (radioButton.checked) {
    clickedButtonIndex = index;
  }
});

function handlePrevButtonClick() {
  var prevIndex = clickedButtonIndex - 1;
  if (prevIndex < 0) {
    prevIndex = radioButtons.length - 1;
  }
  radioButtons[prevIndex].checked = true;
  clickedButtonIndex = prevIndex;
  startSlideshowFromCurrentWithDelay();
}

function handleNextButtonClick() {
  var nextIndex = clickedButtonIndex + 1;
  if (nextIndex >= radioButtons.length) {
    nextIndex = 0;
  }
  radioButtons[nextIndex].checked = true;
  clickedButtonIndex = nextIndex;
  startSlideshowFromCurrentWithDelay();
}

function handleRadioButtonClick() {
  if (!isManualNavigation) {
    isManualNavigation = true;
    clearInterval(intervalID);
    counter = clickedButtonIndex + 1;
    if (counter > totalSlides) {
      counter = 1;
    }
    startSlideshowFromCurrentWithDelay(); // Update this line to start slideshow from current slide with delay
  }
}

function startSlideshowFromCurrentWithDelay() {
  clearInterval(intervalID);
  clearTimeout(delayTimer);
  delayTimer = setTimeout(function () {
    counter = clickedButtonIndex + 1;
    if (counter > totalSlides) {
      counter = 1;
    }
    radioButtons[clickedButtonIndex].checked = true; // Add this line to check the current radio button
    isManualNavigation = false;
    startSlideshow();
  }, 10000); // 10 seconds
}
