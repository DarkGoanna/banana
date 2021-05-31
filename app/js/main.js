// добавляем кнопки раскрытия подменю
const menuItemWithSubmenu = document.querySelectorAll('.menu-item-has-children');
menuItemWithSubmenu.forEach(item => {
  if (item.lastElementChild.className !== 'menu__arrow') {
    const left = item.firstElementChild.width - 15;
    item.insertAdjacentHTML('beforeend', '<span class="menu__arrow"></span>');
  }
})

// menu
const burger = document.querySelector('.menu__burger');
burger.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('scrollOff');
  burger.classList.toggle('open')
  // открываем/закрываем меню
  burger.closest('.menu').classList.toggle('open');

  const menuOpen = document.querySelector('.menu.open');
  const menu = document.querySelector('.menu');

  if (menuOpen) {
    // при открытии/закрытии закрыть все подменю
    const allActiveItems = menuOpen.querySelectorAll('.active');
    for (let i = 0; i < allActiveItems.length; i++) {
      allActiveItems[i].classList.remove('active');
    }
    // добавить событие открытия меню
    menuOpen.addEventListener('click', openSubmenu);
  } else {
    // убрать событие если закрыто 
    menu.removeEventListener('click', openSubmenu);
  }

})

// открытие подменю
function openSubmenu(event) {
  if (event.target.className === 'menu__arrow') {
    event.target.parentElement.classList.toggle('active');
  }
}

// sticky header
if (window.matchMedia("(min-width: 768px)").matches) {
  const header = document.querySelector('.header');

  document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  })
}

// search
const search = document.querySelector('.search');

document.querySelector('.search__btn').addEventListener('click', (e) => {
  search.classList.toggle('active')
  console.log(e.target);
})

// categories
if (document.querySelector('.categories__slider')) {
  new Swiper(".categories__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,

      },
    },
  });
}

// categories
if (document.querySelector('.promotions__slider')) {
  new Swiper(".promotions__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,

      },
    },
  });
}