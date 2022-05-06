import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

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