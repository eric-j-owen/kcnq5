const hamburger = document.querySelector(".hamburger") as HTMLElement;
const links = document.querySelector(".nav-links") as HTMLElement;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("expanded");
  links.classList.toggle("expanded");
});
