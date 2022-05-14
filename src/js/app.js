import * as functions from "./modules/functions.js";
import Swiper, { Grid, Navigation, Pagination, Thumbs } from 'swiper';

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

const infoSlider = new Swiper(".info__swiper_1", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    998: {
      slidesPerView: 5,
    }
  }
});

new Swiper(".info__swiper_2", {
  modules: [Thumbs, Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: infoSlider,
  },
});

if(document.querySelector('.datepicker')){
  $(".datepicker").datepicker({ 
    dateFormat: 'dd/mm/yy',
    minDate: 0, maxDate: "+1M +10D",
    closeText:"Закрыть",prevText:"&#x3C;Пред",nextText:"След&#x3E;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],
    dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
    monthNames:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],
    monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]
  });
  $(".datepicker").change(function(){
    document.getElementById('alternate').innerHTML = $(".datepicker").val()
  });
  document.getElementById('alternate').innerHTML = $(".datepicker").val()
}

document.querySelectorAll('.bron__content').forEach(el=>{
  const inputs = el.querySelectorAll('.bron__time input');
  inputs.forEach(input=>{
    input.addEventListener('input', bron)
  })   
  function bron(){
    const time = el.querySelector('#time');
    let checkedInputs = el.querySelectorAll('.bron__time input:checked');
    checkedInputs = el.querySelectorAll('.bron__time input:checked');
    time.innerHTML = `${checkedInputs.length} час`
  }
})

if(document.querySelector('.how')){
  const buttons = document.querySelectorAll('.how__sidebar-item');
  const content = document.querySelectorAll('.how__item');
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      const dataTarget = button.getAttribute('data-target');
      const target = document.querySelector(`#${dataTarget}`);
      buttons.forEach(el => {
        el.classList.remove('active');
      })
      content.forEach(el => {
        el.classList.remove('active');
      })
      button.classList.add('active');
      target.classList.add('active');
    })
  })
}