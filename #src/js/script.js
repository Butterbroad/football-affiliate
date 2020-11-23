//register links
const registerLinks = document.querySelectorAll('.get-link');

if (registerLinks.length > 0) {
  registerLinks.forEach(item => {
    item.setAttribute('href', item.getAttribute('href') + window.location.search);
  });
}

//language toggler
const langTrigger = document.querySelector('.lang__items');
const langList = document.querySelector('.lang__item-list');
langTrigger.addEventListener('click', () => {
  langList.classList.toggle('active');
});

//tabs
const tabTriggers = document.querySelectorAll('.tabs__trigger');
const tabItems = document.querySelectorAll('.tabs__item');


tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    tabItems.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    })
    const parent = e.target.parentElement;
    parent.classList.add('active');
  });
});


//slider
const menu = ['СЕРИЯ БОНУСОВ', 'БОНУС 100%', '1000$ ЗА ПРОГНОЗ', 'ML ПЛАТИТ/ВЕРНЕТ', '4% CASHBACK', 'УСЛОВИЯ']
const classNames = ['navigationLinkOne', 'navigationLinkTwo', 'navigationLinkThree', 'navigationLinkFour', 'navigationLinkFive', 'navigationLinkSix'];
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  mousewheel: true,
  parallax: true,
  speed: 1300,
  loop: false,
  grabCursor: true,
  spaceBetween: 300,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${classNames[index]}">${menu[index]}</span>`;
    },
  },
});

const scrollableBlocks = document.querySelectorAll('.tabs__content-wrapper');
scrollableBlocks.forEach(elem => {
  elem.addEventListener('mousewheel', function (e) {
    e.stopPropagation();
  });
})

const changeSlideHeight = document.querySelector('.slide-six');
swiper.on('transitionStart', () => {
  if (swiper.isEnd) {
    if (window.innerWidth < 426) {
      changeSlideHeight.style.height = 'auto';
    }
  } else {
    if (window.innerWidth < 426) {
      changeSlideHeight.style.height = '75vh';
    }
  }
});

//mobile menu
const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.swiper-pagination__wrapper');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});



//multilanguage
@@include('translate.js');

const langItems = document.querySelectorAll('.lang__item');

//main Btn
const mainBtn = document.querySelector('.btn_main');

//navigation
const navigationLinkOne = document.querySelector('.navigationLinkOne');
const navigationLinkTwo = document.querySelector('.navigationLinkTwo');
const navigationLinkThree = document.querySelector('.navigationLinkThree');
const navigationLinkFour = document.querySelector('.navigationLinkFour');
const navigationLinkFive = document.querySelector('.navigationLinkFive');
const navigationLinkSix = document.querySelector('.navigationLinkSix');

//slide 1
const textLine1 = document.querySelector('.slide-one__text-line_1');
const textLine2 = document.querySelector('.slide-one__text-line_2');
const textLine3 = document.querySelector('.slide-one__text-line_3');






langItems.forEach(item => {
  item.addEventListener('click', () => {
    const attr = item.getAttribute('language');

    //btn
    mainBtn.textContent = translate[attr].mainBtn;

    //navigation
    navigationLinkOne.textContent = translate[attr].navigationLinkOne;
    navigationLinkTwo.textContent = translate[attr].navigationLinkTwo;
    navigationLinkThree.textContent = translate[attr].navigationLinkThree;
    navigationLinkFour.textContent = translate[attr].navigationLinkFour;
    navigationLinkFive.textContent = translate[attr].navigationLinkFive;
    navigationLinkSix.textContent = translate[attr].navigationLinkSix;

    //slide one
    textLine1.textContent = translate[attr].slideOneTextLineOne;
    textLine2.textContent = translate[attr].slideOneTextLineTwo;
    textLine3.textContent = translate[attr].slideOneTextLineThree;


  });
});













@@include('webpSupport.js')