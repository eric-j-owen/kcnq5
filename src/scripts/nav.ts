const hamburger = document.querySelector(".hamburger") as HTMLElement;
const links = document.querySelector(".nav-links") as HTMLElement;

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", (!expanded).toString());
  hamburger.classList.toggle("expanded");
  links.classList.toggle("expanded");
});
