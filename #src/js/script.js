//register links
const registerLinks = document.querySelectorAll('.get-link');

if (registerLinks.length > 0) {
  registerLinks.forEach(item => {
    item.setAttribute('href', item.getAttribute('href') + window.location.search);
  });
}

//language
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
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});








@@include('webpSupport.js')