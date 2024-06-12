//----Burger-menu

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

//----Dropdown-filter

const filter = document.querySelector(".filter");

if (filter) {
  const items = document.querySelectorAll(".block-filter");

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.querySelector(".block-filter__dropdown").classList.toggle("_active");
      item.querySelector(".block-filter__icon").classList.toggle("_active");

      if (event.target.classList.contains("block-filter__item")) {
        item.querySelector(".block-filter__value").textContent =
          event.target.textContent;
      }
    });
  });
}

//---Swiper

const popularSlider = new Swiper(".popular-slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".popular-slider-next",
    prevEl: ".popular-slider-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    },
  },
});
