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
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > totalSlides) {
      counter = 1;
    }
  }, 5000);
}

startSlideshow();

var radioButtons = document.querySelectorAll('input[name="radioButton"]');
var isManualNavigation = false;
var clickedButtonIndex;

radioButtons.forEach(function (radioButton, index) {
  radioButton.addEventListener("click", function () {
    clickedButtonIndex = index;
    handleRadioButtonClick();
  });
});

function handleRadioButtonClick() {
  if (!isManualNavigation) {
    isManualNavigation = true;
    clearInterval(intervalID);
    counter = clickedButtonIndex + 1; // Update counter to match the currently pressed radio button's index

    setTimeout(function () {
      isManualNavigation = false;
      startSlideshow();
    }, 10000); // 10 seconds
  }
}
