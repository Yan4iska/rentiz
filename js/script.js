const burger_button = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.body;

if (burger_button && menu) {
  burger_button.addEventListener("click", () => {
    burger_button.classList.toggle("_active");
    menu.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
}
