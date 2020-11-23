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
const translate = {
  "russian": {
    "mainBtn": "РЕГИСТРАЦИЯ",
    'navigationLinkOne': 'СЕРИЯ БОНУСОВ',
    'navigationLinkTwo': 'БОНУС 100%',
    'navigationLinkThree': '1000$ ЗА ПРОГНОЗ',
    'navigationLinkFour': 'ML ПЛАТИТ/ВЕРНЕТ',
    'navigationLinkFive': '4% CASHBACK',
    'navigationLinkSix': 'УСЛОВИЯ',
    "slideOneTextLineOne": "БОЛЬШАЯ",
    "slideOneTextLineTwo": "СЕРИЯ БОНУСОВ",
    "slideOneTextLineThree": "Больше игры - больше бонусов",
    "slideTwoTextLineOne": "БОНУС",
    "slideTwoTextLineTwo": "I00",
    "slideTwoTextLineThree": "К 1-му ДЕПОЗИТУ",
    "slideThreeTextLineOne": "КАЖДЫЙ ДЕНЬ",
    "slideThreeTextLineTwo": "I000",
    "slideThreeTextLineThree": "ЗА ВЕРНЫЙ ПРОГНОЗ",
  },
  "english": {
    "mainBtn": "REGISTRATION",
    'navigationLinkOne': 'SERIES OF BONUSES',
    'navigationLinkTwo': 'BONUS 100%',
    'navigationLinkThree': '1000 $ PER FORECAST',
    'navigationLinkFour': 'ML PAYS / RETURNS',
    'navigationLinkFive': '4% CASHBACK',
    'navigationLinkSix': 'CONDITIONS',
    "slideOneTextLineOne": "BIG",
    "slideOneTextLineTwo": "SERIES OF BONUSES",
    "slideOneTextLineThree": "More game - more bonuses",
    "slideTwoTextLineOne": "BONUS",
    "slideTwoTextLineTwo": "I00",
    "slideTwoTextLineThree": "FIRST deposit",
    "slideThreeTextLineOne": "everyday",
    "slideThreeTextLineTwo": "I000",
    "slideThreeTextLineThree": "FOR TRUE FORECAST",
  }
};

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
const slideOneTextLineOne = document.querySelector('.slide-one__text-line_1');
const slideOneTextLineTwo = document.querySelector('.slide-one__text-line_2');
const slideOneTextLineThree = document.querySelector('.slide-one__text-line_3');

//slide 2
const slideTwoTextLineOne = document.querySelector('.slide-two__text-line_1');
const slideTwoTextLineTwo = document.querySelector('.slide-two__text-line_2');
const slideTwoTextLineThree = document.querySelector('.slide-two__text-line_3');

//slide 3
const slideThreeTextLineOne = document.querySelector('.slide-three__text-line_1');
const slideThreeTextLineTwo = document.querySelector('.slide-three__text-line_2');
const slideThreeTextLineThree = document.querySelector('.slide-three__text-line_3');






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

    //slide 1
    slideOneTextLineOne.textContent = translate[attr].slideOneTextLineOne;
    slideOneTextLineTwo.textContent = translate[attr].slideOneTextLineTwo;
    slideOneTextLineThree.textContent = translate[attr].slideOneTextLineThree;

    //slide 2
    slideTwoTextLineOne.textContent = translate[attr].slideTwoTextLineOne;
    slideTwoTextLineTwo.innerHTML = translate[attr].slideTwoTextLineTwo;
    slideTwoTextLineThree.textContent = translate[attr].slideTwoTextLineThree;

    //slide 3
    slideThreeTextLineOne.textContent = translate[attr].slideThreeTextLineOne;
    slideThreeTextLineTwo.innerHtml = translate[attr].slideThreeTextLineTwo;
    slideThreeTextLineThree.textContent = translate[attr].slideThreeTextLineThree;


  });
});













function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});