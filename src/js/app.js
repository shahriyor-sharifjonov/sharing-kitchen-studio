import * as functions from "./modules/functions.js";
import Swiper, { Grid, Navigation, Pagination } from 'swiper';
import $ from 'jquery';

functions.isWebp();

const swiper = new Swiper();

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
  header.classList.toggle("open");
  document.body.classList.toggle("o-hidden");
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

const menuDropBtn = document.querySelector('.header__menu-dropdown-button');
const menuDropCon = document.querySelector('.header__menu-dropdown-content');
const menuDropBek = document.querySelector('.header__menu-dropdown-back');
menuDropBtn.addEventListener('click', e => {
  menuDropBtn.classList.add('active');
  menuDropCon.classList.add('active');
})
menuDropBek.addEventListener('click', e => {
  menuDropBtn.classList.remove('active');
  menuDropCon.classList.remove('active');
})

$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(300);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(300);
      $(this)
        .siblings(".accordion__content")
        .slideDown(300);
    }
  });
});

new Swiper(".location__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [Navigation],
  navigation: {
    prevEl: ".location__prev",
    nextEl: ".location__next",
  },
});

new Swiper(".advantages__swiper", {
  slidesPerView: 1,
  spaceBetween: 22,
  watchSlidesProgress: true,
  slideVisibleClass: 'visible',
  modules: [Pagination],
  pagination: {
    el: '.advantages__pagination',
    clickable: true,
  },
  breakpoints: {
    1900: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

new Swiper(".clients__swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  modules: [Pagination, Navigation, Grid],
  grid: {
    rows: 2,
    fill: 'column',
  },
  pagination: {
    el: ".clients__pagination",
    clickable: true,
  },
  navigation:{
    nextEl: '.clients__action-next',
    prevEl: '.clients__action-prev',
  },
  breakpoints: {
    1900: {
      slidesPerView: 5,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
    1400: {
      slidesPerView: 4,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
    768: { 
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
  }
});

new Swiper(".works__swiper", {
  slidesPerView: 1,
  spaceBetween: 22,
  watchSlidesProgress: true,
  slideVisibleClass: 'visible',
  modules: [Navigation],
  navigation: {
    nextEl: '.works__next',
    prevEl: '.works__prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});