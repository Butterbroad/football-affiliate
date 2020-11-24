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



//multilanguage slides
@@include('slidesTranslate.js');

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

//slide 4
const slideFourTextLineOne = document.querySelector('.slide-four__text-line_1');
const slideFourTextLineTwo = document.querySelector('.slide-four__text-line_2');
const slideFourTextLineThree = document.querySelector('.slide-four__text-line_3');

//slide 5
const slideFiveTextLineOne = document.querySelector('.slide-five__text-line_1');
const slideFiveTextLineTwo = document.querySelector('.slide-five__text-line_2');
const slideFiveTextLineThree = document.querySelector('.slide-five__text-line_3');

//slide 5
const slideSixTitle = document.querySelector('.slide-six__title');
const slideSixTriggerOne = document.querySelector('.tabs__trigger_1');
const slideSixTriggerTwo = document.querySelector('.tabs__trigger_2');
const slideSixTriggerThree = document.querySelector('.tabs__trigger_3');
const slideSixTriggerFour = document.querySelector('.tabs__trigger_4');


//multilanguage tabs
@@include('tabsTranslate.js');

//tabs titles
const tabsTitleOne = document.querySelectorAll('.tabs__title_1');
const tabsTitleTwo = document.querySelector('.tabs__title_2');
const tabsTitleThree = document.querySelector('.tabs__title_3');
const tabsTitleFour = document.querySelector('.tabs__title_4');
const tabsTitleFive = document.querySelector('.tabs__title_5');
const tabsTitleSix = document.querySelector('.tabs__title_6');

//tabs text lines
//tab 1
const tabOneLine1 = document.querySelector('.tab-one-line-1');
const tabOneLine2 = document.querySelector('.tab-one-line-2');
const tabOneLine3 = document.querySelector('.tab-one-line-3');
const tabOneLine4 = document.querySelector('.tab-one-line-4');
const tabOneLine5 = document.querySelector('.tab-one-line-5');
const tabOneLine6 = document.querySelector('.tab-one-line-6');
const tabOneLine7 = document.querySelector('.tab-one-line-7');
const tabOneLine8 = document.querySelector('.tab-one-line-8');
const tabOneLine9 = document.querySelector('.tab-one-line-9');
const tabOneLine10 = document.querySelector('.tab-one-line-10');
const tabOneLine11 = document.querySelector('.tab-one-line-11');
const tabOneLine12 = document.querySelector('.tab-one-line-12');
const tabOneLine13 = document.querySelector('.tab-one-line-13');
const tabOneLine14 = document.querySelector('.tab-one-line-14');
const tabOneLine15 = document.querySelector('.tab-one-line-15');
const tabOneLine16 = document.querySelector('.tab-one-line-16');
const tabOneLine17 = document.querySelector('.tab-one-line-17');

//tab 2
const tabTwoLine1 = document.querySelector('.tab-two-line-1');
const tabTwoLine2 = document.querySelector('.tab-two-line-2');
const tabTwoLine3 = document.querySelector('.tab-two-line-3');
const tabTwoLine4 = document.querySelector('.tab-two-line-4');
const tabTwoLine5 = document.querySelector('.tab-two-line-5');
const tabTwoLine6 = document.querySelector('.tab-two-line-6');
const tabTwoLine7 = document.querySelector('.tab-two-line-7');
const tabTwoLine8 = document.querySelector('.tab-two-line-8');

//tab 3
const tabThreeLine1 = document.querySelector('.tab-three-line-1');
const tabThreeLine2 = document.querySelector('.tab-three-line-2');
const tabThreeLine3 = document.querySelector('.tab-three-line-3');
const tabThreeLine4 = document.querySelector('.tab-three-line-4');
const tabThreeLine5 = document.querySelector('.tab-three-line-5');
const tabThreeLine6 = document.querySelector('.tab-three-line-6');
const tabThreeLine7 = document.querySelector('.tab-three-line-7');
const tabThreeLine8 = document.querySelector('.tab-three-line-8');
const tabThreeLine9 = document.querySelector('.tab-three-line-9');
const tabThreeLine10 = document.querySelector('.tab-three-line-10');
const tabThreeLine11 = document.querySelector('.tab-three-line-11');
const tabThreeLine12 = document.querySelector('.tab-three-line-12');
const tabThreeLine13 = document.querySelector('.tab-three-line-13');
const tabThreeLine14 = document.querySelector('.tab-three-line-14');
const tabThreeLine15 = document.querySelector('.tab-three-line-15');
const tabThreeLine16 = document.querySelector('.tab-three-line-16');
const tabThreeLine17 = document.querySelector('.tab-three-line-17');
const tabThreeLine18 = document.querySelector('.tab-three-line-18');
const tabThreeLine19 = document.querySelector('.tab-three-line-19');
const tabThreeLine20 = document.querySelector('.tab-three-line-20');
const tabThreeLine21 = document.querySelector('.tab-three-line-21');

//tab 4
const tabFourLine1 = document.querySelector('.tab-four-line-1');
const tabFourLine2 = document.querySelector('.tab-four-line-2');
const tabFourLine3 = document.querySelector('.tab-four-line-3');
const tabFourLine4 = document.querySelector('.tab-four-line-4');
const tabFourLine5 = document.querySelector('.tab-four-line-5');
const tabFourLine6 = document.querySelector('.tab-four-line-6');
const tabFourLine7 = document.querySelector('.tab-four-line-7');
const tabFourLine8 = document.querySelector('.tab-four-line-8');
const tabFourLine9 = document.querySelector('.tab-four-line-9');
const tabFourLine10 = document.querySelector('.tab-four-line-10');
const tabFourLine11 = document.querySelector('.tab-four-line-11');
const tabFourLine12 = document.querySelector('.tab-four-line-12');
const tabFourLine13 = document.querySelector('.tab-four-line-13');
const tabFourLine14 = document.querySelector('.tab-four-line-14');
const tabFourLine15 = document.querySelector('.tab-four-line-15');
const tabFourLine16 = document.querySelector('.tab-four-line-16');
const tabFourLine17 = document.querySelector('.tab-four-line-17');

langItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const attr = item.getAttribute('data-language');

    //change lang items
    const langItemsList = document.querySelector('.lang__item-list');
    const langItemListCurrentItem = langItemsList.querySelector('.lang__item')
    const currentItemWrapper = document.querySelector('.lang__items-current');
    const currentItem = currentItemWrapper.querySelector('.lang__item');
    if (item.dataset.language === 'english') {
      currentItem.dataset.language = 'english';
      currentItem.querySelector('img').src = './img/lang/en.svg';
      currentItem.querySelector('source').srcset = './img/lang/en.svg';
      currentItem.querySelector('.lang__item-text').textContent = 'en';

      langItemListCurrentItem.dataset.language = 'russian';
      langItemListCurrentItem.querySelector('img').src = './img/lang/rus.svg';
      langItemListCurrentItem.querySelector('source').srcset = './img/lang/rus.svg';
      langItemListCurrentItem.querySelector('.lang__item-text').textContent = 'rus';

    } else if (currentItem.dataset.language === 'english') {
      currentItem.dataset.language = 'russian'
      currentItem.querySelector('img').src = './img/lang/rus.svg';
      currentItem.querySelector('source').srcset = './img/lang/rus.svg';
      currentItem.querySelector('.lang__item-text').textContent = 'rus';

      langItemListCurrentItem.dataset.language = 'english';
      langItemListCurrentItem.querySelector('img').src = './img/lang/en.svg';
      langItemListCurrentItem.querySelector('source').srcset = './img/lang/en.svg';
      langItemListCurrentItem.querySelector('.lang__item-text').textContent = 'en';
    }


    //btn
    mainBtn.textContent = slidesTranslate[attr].mainBtn;

    //navigation
    navigationLinkOne.textContent = slidesTranslate[attr].navigationLinkOne;
    navigationLinkTwo.textContent = slidesTranslate[attr].navigationLinkTwo;
    navigationLinkThree.textContent = slidesTranslate[attr].navigationLinkThree;
    navigationLinkFour.textContent = slidesTranslate[attr].navigationLinkFour;
    navigationLinkFive.textContent = slidesTranslate[attr].navigationLinkFive;
    navigationLinkSix.textContent = slidesTranslate[attr].navigationLinkSix;

    //slide 1
    slideOneTextLineOne.textContent = slidesTranslate[attr].slideOneTextLineOne;
    slideOneTextLineTwo.textContent = slidesTranslate[attr].slideOneTextLineTwo;
    slideOneTextLineThree.textContent = slidesTranslate[attr].slideOneTextLineThree;

    //slide 2
    slideTwoTextLineOne.textContent = slidesTranslate[attr].slideTwoTextLineOne;
    slideTwoTextLineTwo.innerHTML = slidesTranslate[attr].slideTwoTextLineTwo;
    slideTwoTextLineThree.textContent = slidesTranslate[attr].slideTwoTextLineThree;

    //slide 3
    slideThreeTextLineOne.textContent = slidesTranslate[attr].slideThreeTextLineOne;
    slideThreeTextLineTwo.innerHtml = slidesTranslate[attr].slideThreeTextLineTwo;
    slideThreeTextLineThree.textContent = slidesTranslate[attr].slideThreeTextLineThree;

    //slide 4
    slideFourTextLineOne.textContent = slidesTranslate[attr].slideFourTextLineOne;
    slideFourTextLineTwo.textContent = slidesTranslate[attr].slideFourTextLineTwo;
    slideFourTextLineThree.innerHTML = slidesTranslate[attr].slideFourTextLineThree;

    //slide 5
    slideFiveTextLineOne.textContent = slidesTranslate[attr].slideFiveTextLineOne;
    slideFiveTextLineTwo.textContent = slidesTranslate[attr].slideFiveTextLineTwo;
    slideFiveTextLineThree.innerHTML = slidesTranslate[attr].slideFiveTextLineThree;

    //slide 6
    slideSixTitle.textContent = slidesTranslate[attr].slideSixTitle;
    slideSixTriggerOne.textContent = slidesTranslate[attr].slideSixTriggerOne;
    slideSixTriggerTwo.textContent = slidesTranslate[attr].slideSixTriggerTwo;
    slideSixTriggerThree.textContent = slidesTranslate[attr].slideSixTriggerThree;
    slideSixTriggerFour.textContent = slidesTranslate[attr].slideSixTriggerFour;

    //tabs titles
    tabsTitleOne.forEach(title => {
      title.textContent = tabsTranslate[attr].tabsTitleOne;
    })
    tabsTitleTwo.textContent = tabsTranslate[attr].tabsTitleTwo;
    tabsTitleThree.textContent = tabsTranslate[attr].tabsTitleThree;
    tabsTitleFour.textContent = tabsTranslate[attr].tabsTitleFour;
    tabsTitleFive.textContent = tabsTranslate[attr].tabsTitleFive;
    tabsTitleSix.textContent = tabsTranslate[attr].tabsTitleSix;


    //tab 1 lines
    tabOneLine1.innerHTML = tabsTranslate[attr].tabOneLine1;
    tabOneLine2.innerHTML = tabsTranslate[attr].tabOneLine2;
    tabOneLine3.innerHTML = tabsTranslate[attr].tabOneLine3;
    tabOneLine4.innerHTML = tabsTranslate[attr].tabOneLine4;
    tabOneLine5.innerHTML = tabsTranslate[attr].tabOneLine5;
    tabOneLine6.textContent = tabsTranslate[attr].tabOneLine6;
    tabOneLine7.textContent = tabsTranslate[attr].tabOneLine7;
    tabOneLine8.textContent = tabsTranslate[attr].tabOneLine8;
    tabOneLine9.textContent = tabsTranslate[attr].tabOneLine9;
    tabOneLine10.textContent = tabsTranslate[attr].tabOneLine10;
    tabOneLine11.textContent = tabsTranslate[attr].tabOneLine11;
    tabOneLine12.textContent = tabsTranslate[attr].tabOneLine12;
    tabOneLine13.textContent = tabsTranslate[attr].tabOneLine13;
    tabOneLine14.textContent = tabsTranslate[attr].tabOneLine14;
    tabOneLine15.textContent = tabsTranslate[attr].tabOneLine15;
    tabOneLine16.textContent = tabsTranslate[attr].tabOneLine16;
    tabOneLine17.textContent = tabsTranslate[attr].tabOneLine17;

    //tab 2 lines
    tabTwoLine1.innerHTML = tabsTranslate[attr].tabTwoLine1;
    tabTwoLine2.innerHTML = tabsTranslate[attr].tabTwoLine2;
    tabTwoLine3.innerHTML = tabsTranslate[attr].tabTwoLine3;
    tabTwoLine4.innerHTML = tabsTranslate[attr].tabTwoLine4;
    tabTwoLine5.textContent = tabsTranslate[attr].tabTwoLine5;
    tabTwoLine6.textContent = tabsTranslate[attr].tabTwoLine6;
    tabTwoLine7.textContent = tabsTranslate[attr].tabTwoLine7;
    tabTwoLine8.textContent = tabsTranslate[attr].tabTwoLine8;

    //tab 3 lines
    tabThreeLine1.innerHTML = tabsTranslate[attr].tabThreeLine1;
    tabThreeLine2.innerHTML = tabsTranslate[attr].tabThreeLine2;
    tabThreeLine3.innerHTML = tabsTranslate[attr].tabThreeLine3;
    tabThreeLine4.innerHTML = tabsTranslate[attr].tabThreeLine4;
    tabThreeLine5.textContent = tabsTranslate[attr].tabThreeLine5;
    tabThreeLine6.textContent = tabsTranslate[attr].tabThreeLine6;
    tabThreeLine7.textContent = tabsTranslate[attr].tabThreeLine7;
    tabThreeLine8.textContent = tabsTranslate[attr].tabThreeLine8;
    tabThreeLine9.textContent = tabsTranslate[attr].tabThreeLine9;
    tabThreeLine10.textContent = tabsTranslate[attr].tabThreeLine10;
    tabThreeLine11.textContent = tabsTranslate[attr].tabThreeLine11;
    tabThreeLine12.textContent = tabsTranslate[attr].tabThreeLine12;
    tabThreeLine13.textContent = tabsTranslate[attr].tabThreeLine13;
    tabThreeLine14.textContent = tabsTranslate[attr].tabThreeLine14;
    tabThreeLine15.textContent = tabsTranslate[attr].tabThreeLine15;
    tabThreeLine16.textContent = tabsTranslate[attr].tabThreeLine16;
    tabThreeLine17.innerHTML = tabsTranslate[attr].tabThreeLine17;
    tabThreeLine18.textContent = tabsTranslate[attr].tabThreeLine18;
    tabThreeLine19.textContent = tabsTranslate[attr].tabThreeLine19;
    tabThreeLine20.textContent = tabsTranslate[attr].tabThreeLine20;
    tabThreeLine21.textContent = tabsTranslate[attr].tabThreeLine21;

    //tab 4 lines
    tabFourLine1.innerHTML = tabsTranslate[attr].tabFourLine1;
    tabFourLine2.innerHTML = tabsTranslate[attr].tabFourLine2;
    tabFourLine3.innerHTML = tabsTranslate[attr].tabFourLine3;
    tabFourLine4.innerHTML = tabsTranslate[attr].tabFourLine4;
    tabFourLine5.innerHTML = tabsTranslate[attr].tabFourLine5;
    tabFourLine6.textContent = tabsTranslate[attr].tabFourLine6;
    tabFourLine7.textContent = tabsTranslate[attr].tabFourLine7;
    tabFourLine8.textContent = tabsTranslate[attr].tabFourLine8;
    tabFourLine9.textContent = tabsTranslate[attr].tabFourLine9;
    tabFourLine10.textContent = tabsTranslate[attr].tabFourLine10;
    tabFourLine11.textContent = tabsTranslate[attr].tabFourLine11;
    tabFourLine12.textContent = tabsTranslate[attr].tabFourLine12;
    tabFourLine13.textContent = tabsTranslate[attr].tabFourLine13;
    tabFourLine14.textContent = tabsTranslate[attr].tabFourLine14;
    tabFourLine15.textContent = tabsTranslate[attr].tabFourLine15;
    tabFourLine16.textContent = tabsTranslate[attr].tabFourLine16;
    tabFourLine17.textContent = tabsTranslate[attr].tabFourLine17;
  });
});






@@include('webpSupport.js')