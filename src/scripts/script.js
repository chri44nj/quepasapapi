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
