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
  arrows: false,
  pagination: {
    el: '.swiper-pagination, .swiper-dots',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${classNames[index]}">${menu[index]}</span>`;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    769: {
      arrows: true,
    },
  },
  on: {
    init: function () {
      checkArrow();
    },
    resize: function () {
      checkArrow();
    }
  }
});

function checkArrow() {
  const swiperPrev = document.querySelector('.swiper-button-prev');
  const swiperNext = document.querySelector('.swiper-button-next');
  if (window.innerWidth < 769) {
    console.log('Success', window.innerWidth);
    swiperPrev.style.display = 'block';
    swiperNext.style.display = 'block';
  } else {
    swiperPrev.style.display = 'none';
    swiperNext.style.display = 'none';
  }
}

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
const slidesTranslate = {
  "russian": {
    "mainBtn": "РЕГИСТРАЦИЯ",
    "navigationLinkOne": "СЕРИЯ БОНУСОВ",
    "navigationLinkTwo": "БОНУС 100%",
    "navigationLinkThree": "1000$ ЗА ПРОГНОЗ",
    "navigationLinkFour": "ML ПЛАТИТ/ВЕРНЕТ",
    "navigationLinkFive": "4% CASHBACK",
    "navigationLinkSix": "УСЛОВИЯ",
    "slideOneTextLineOne": "БОЛЬШАЯ",
    "slideOneTextLineTwo": "СЕРИЯ БОНУСОВ",
    "slideOneTextLineThree": "Больше игры - больше бонусов",
    "slideTwoTextLineOne": "БОНУС",
    "slideTwoTextLineTwo": "I00 <span>%</span>",
    "slideTwoTextLineThree": "К 1-му ДЕПОЗИТУ",
    "slideThreeTextLineOne": "КАЖДЫЙ ДЕНЬ",
    "slideThreeTextLineTwo": "I000",
    "slideThreeTextLineThree": "ЗА ВЕРНЫЙ ПРОГНОЗ",
    "slideFourTextLineOne": "ПРОИГРЫШНЫЕ СТАВКИ",
    "slideFourTextLineTwo": "НА ПЛЮС",
    "slideFourTextLineThree": "ИЛИ <span>НА ВОЗВРАТ</span>",
    "slideFiveTextLineOne": "4%",
    "slideFiveTextLineTwo": "CASHBACK",
    "slideFiveTextLineThree": "НА деПОЗИТ",
    "slideSixTitle": "УСЛОВИЯ БОНУСОВ",
    "slideSixTriggerOne": "100% к первому депозиту",
    "slideSixTriggerTwo": "1000$ ЗА ВЕРНЫЙ ПРОГНОЗ",
    "slideSixTriggerThree": "MAXLINE ПЛАТИТ И ВЕРНЕТ",
    "slideSixTriggerFour": "4% CASHBACK",
  },
  "english": {
    "mainBtn": "REGISTRATION",
    "navigationLinkOne": "SERIES OF BONUSES",
    "navigationLinkTwo": "BONUS 100%",
    "navigationLinkThree": "1000 $ PER FORECAST",
    "navigationLinkFour": "ML PAYS / RETURNS",
    "navigationLinkFive": "4% CASHBACK",
    "navigationLinkSix": "CONDITIONS",
    "slideOneTextLineOne": "BIG",
    "slideOneTextLineTwo": "SERIES OF BONUSES",
    "slideOneTextLineThree": "More game - more bonuses",
    "slideTwoTextLineOne": "BONUS",
    "slideTwoTextLineTwo": "I00 <span>%</span>",
    "slideTwoTextLineThree": "FIRST deposit",
    "slideThreeTextLineOne": "everyday",
    "slideThreeTextLineTwo": "I000",
    "slideThreeTextLineThree": "FOR TRUE FORECAST",
    "slideFourTextLineOne": "LOSING BETS",
    "slideFourTextLineTwo": "ON PLUS",
    "slideFourTextLineThree": "OR <span>REFUND</span>",
    "slideFiveTextLineOne": "4%",
    "slideFiveTextLineTwo": "CASHBACK",
    "slideFiveTextLineThree": "on deposit",
    "slideSixTitle": "CONDITIONS",
    "slideSixTriggerOne": "100% to the first deposit",
    "slideSixTriggerTwo": "1000$ FOR CORRECT FORECAST",
    "slideSixTriggerThree": "MAXLINE PAYS AND RETURNS",
    "slideSixTriggerFour": "4% CASHBACK",
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
const tabsTranslate = {
  "russian": {
    'tabsTitleOne': 'Для получения бонуса необходимо:',
    'tabsTitleTwo': 'Размер бонуса равен 100% от суммы первого пополнения игрового счета.',
    'tabsTitleThree': 'Для получения бонуса “Maxline ПЛАТИТ” необходимо:',
    'tabsTitleFour': 'Для получения бонуса “Maxline ВЕРНЕТ” необходимо:',
    'tabsTitleFive': 'Под предложение не попадают:',
    'tabsTitleSix': 'Размер бонуса зависит от суммы пополнения счета:',
    'tabOneLine1': '<span class="tabs__list-num">1</span> Зарегистрироваться на <a class="tabs__list-link" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://m.maxlinebet.com/registration" target="_blank">maxlinebet.com</a>, верифицировать свой аккаунт с 01.10.2020 по 31.12.2020.',
    'tabOneLine2': '<span class="tabs__list-num">2</span> При регистрации поставить галочку напротив пункта “Принимаю участие и согласен с условиями «бонуса на первое пополнение»”.',
    'tabOneLine3': '<span class="tabs__list-num">3</span> Впервые пополнить свой игровой счет на сумму от <span class="tabs__list-bold">20 BYN</span>.',
    'tabOneLine4': '<span class="tabs__list-num">4</span> Сделать ставки с коэффициентом <span class="tabs__list-bold">не менее 1,9</span> на сумму, превышающую (равную) пятикратный (пятикратному) размер (размеру) своего первого пополнения игрового счета в ставках типа “экспресс”, “система” или в одиночной ставке. <span class="tabs__list-grey">Например, если первое пополнение составило 20 BYN, то необходимо сделать ставки на сумму 100 BYN (и более).</span>',
    'tabOneLine5': '<span class="tabs__list-num">5</span> Обратиться до 31.12.2020 на <a class="tabs__list-link" href="">bonus@maxlinebet.com</a> с указанием номера игрового счета и пометкой <span class="tabs__list-bold">"Первое пополнение".</span>',
    'tabOneLine6': '- Бонус будет зачислен в течение 3-х дней после обращения.',
    'tabOneLine7': '- Ставки на TV-игры, финансовые ставки, Live-лотереи, Cash Out, ставки на бонусные денежные средства, ставки, по которым были зачислены бонусные денежные средства в рамках предложений “Maxline платит” и “Maxline вернет” в предложении не участвуют.',
    'tabOneLine8': '- Если в процессе выполнения условий получения бонуса участник делает ставки, не участвующие в предложении, сумма этих ставок не засчитывается в сумму ставки, которую Игрок должен произвести в соответствии с условиями.',
    'tabOneLine9': '- В любой момент участник может досрочно запросить выплату всей суммы (или части) пополнения со своего игрового счета в соответствии с правилами, однако в этом случае зачисление бонуса не будет произведено.',
    'tabOneLine10': '- Полученный бонус необходимо отыграть с коэффициентом не ниже 1.6 (сделать одну или несколько ставок). Ставки типа «система», VIP-ставки, на TV-игры, Live-лотереи, финансовые ставки и Cash Out в отыгрыше не учитываются.',
    'tabOneLine11': '- Данное предложение доступно один раз для одного человека, семьи, домашнего адреса, адреса электронной почты, номера телефона, общего устройства, одного IP-адреса. Может производиться проверка регистрационных данных и транзакций по любым причинам. Если вследствие проверки будет выявлено, что участник/-и использует/-ют запрещенные стратегии или мошенничество, в том числе мультиаккаунтинг, компания может не производить зачисление бонуса.',
    'tabOneLine12': '- Ставки, участвующие в данном предложении, не учитываются для получения бонуса “Серия неудачных ставок”.',
    'tabOneLine13': '- Бонус недоступен для получения, если участнику был зачислен бонус за регистрацию.',
    'tabOneLine14': '- После зачисления данного бонуса на игровой счет принимать участие в предложении "Ставка без риска" запрещено.',
    'tabOneLine15': '- После зачисления бонуса "Ставка без риска" получение данного бонуса невозможно.',
    'tabOneLine16': 'Максимальная сумма бонуса составляет 250 BYN.',
    'tabOneLine17': 'Букмекер оставляет за собой право приостановить действие бонуса.',
    'tabTwoLine1': '<span class="tabs__list-num">1</span> Быть зарегистрированным и верифицированным на <a class="tabs__list-link" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a>;',
    'tabTwoLine2': '<span class="tabs__list-num">2</span> Пополнить свой игровой счет на сумму от <span class="tabs__list-bold">20 BYN</span>.*',
    'tabTwoLine3': '<span class="tabs__list-num">3</span> Верно предсказать исходы предложенных матчей.**',
    'tabTwoLine4': '<p>* Для участия в предложении сумма пополнений игрового счёта за последние 10 дней должна быть не менее 20 BYN.</p> <p>** Прогноз принимается на исход основного времени матчей.</p>',
    'tabTwoLine5': 'После выбора всех исходов предложенных матчей, а также выполнения всех условий, участнику необходимо нажать кнопку «Сделать прогноз». Один игровой счет может оставлять один прогноз в день. Каждый участник, верно предсказавший исходы 10 предложенных матчей, получит 2000 BYN на бонусный счет Maxline. Каждый участник, верно предсказавший исходы 9 предложенных матчей, получит 200 BYN на бонусный счет Maxline. Каждый участник, верно предсказавший исходы 8 предложенных матчей, получит 20 BYN на бонусный счет Maxline.',
    'tabTwoLine6': 'В случае оставления прогнозов с нескольких игровых счетов, пересекающихся по устройствам или ip-адресам, зачисления бонуса не происходит. Если матч, участвующий в бонусе, не состоялся, то прогноз на данный матч считается неугаданным. Полученный бонус необходимо отыграть с коэффициентом не ниже 1.6 (сделать одну или несколько ставок). Ставки типа «система», на TV- игры, на Live- лотереи, VIP-ставки, финансовые ставки и Cash Out в отыгрыше не учитываются.',
    'tabTwoLine7': 'Зачисление бонуса происходит автоматически после появления результатов матчей, участвующих в предложении, на официальных источниках. При отсутствии в течение 24 часов информации о результатах события на официальном источнике Букмекер может использовать альтернативные источники.',
    'tabTwoLine8': 'Букмекер оставляет за собой право приостановить действие бонуса.',
    'tabThreeLine1': '<span class="tabs__list-num">1</span> Ознакомиться с актуальным списком матчей и исходов на одном из ресурсов: <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://promo.maxline.by/maxline_pays/</a> <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://vk.com/maxlineby</a>',
    'tabThreeLine2': '<span class="tabs__list-num">2</span> Если событие, на которое была сделана проигрышная ставка, попало в список матчей "Макслайн платит", то для получения бонуса необходимо зайти в историю ставок в личном кабинете сайта и нажать на кнопку “МL платит”. После нажатия кнопки на игровой счет будут автоматически зачислены бонусные денежные средства в размере, равном сумме чистого выигрыша плюс сумма ставки, которая подпадает под предложение.',
    'tabThreeLine3': '<span class="tabs__list-num">1</span> Ознакомиться с актуальным списком матчей и исходов на одном из ресурсов: <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://promo.maxline.by/maxline_pays/</a> <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://vk.com/maxlineby</a>',
    'tabThreeLine4': '<span class="tabs__list-num">2</span> Если событие, на которое была сделана проигрышная ставка, попало в список матчей "Макслайн вернет", то для получения бонуса необходимо зайти в историю ставок в личном кабинете сайта и нажать на кнопку “ML вернет”. После нажатия кнопки на игровой счет будут автоматически зачислены бонусные денежные средства в размере, равном сумме ставки, которая подпадает под предложение.',
    'tabThreeLine5': '- Максимальный коэффициент события, подпадающего под предложение, составляет "5".',
    'tabThreeLine6': '- Максимальная сумма бонуса, который будет зачислен на игровой счёт после нажатия кнопки, в рамках предложения "Maxline платит" составляет 1000 долларов США. Если выигрыш по ставке превышает размер максимальной суммы бонуса, то происходит зачисление суммы бонуса, равной максимальному размеру.',
    'tabThreeLine7': '- Предложение "Макслайн платит" и "Макслайн вернет" распространяется только на одиночные ставки.',
    'tabThreeLine8': '- Под предложение подпадают ставки до начала события и Live-ставки на усмотрение Букмекера.',
    'tabThreeLine9': '- Под предложение подпадают ставки, сделанные на любом из онлайн-ресурсов Maxline.',
    'tabThreeLine10': '- Предложение действительно только на дату публикации исходов до 00:00 (начало следующих суток).',
    'tabThreeLine11': '- ставки типа "экспресс" с 14.07.2020',
    'tabThreeLine12': '- ставки "CashOut"',
    'tabThreeLine13': '- ставки типа "система"',
    'tabThreeLine14': '- ставки на статистические данные (количество ЖК, угловых, броски в створ и т.д.)*',
    'tabThreeLine15': '- ставки на дополнительное время*',
    'tabThreeLine16': '- ставки на овертайм и серию буллитов*',
    'tabThreeLine17': '- ставки с повышенным коэффициентом*',
    'tabThreeLine18': '* Кроме случаев, когда ставки на статистические данные, на дополнительное время, на овертайм и серию буллитов, специальные предложения с повышенным коэффициентом опубликованы отдельным событием. При публикации отдельным событием зачисление бонуса по таким ставкам будет осуществлено. Полученный бонус необходимо отыграть с коэффициентом не ниже 1.6 (сделать одну или несколько ставок). Ставки типа «система», на TV-игры, на Live-лотереи, VIP-ставки, финансовые ставки и Cash Out в отыгрыше не учитываются.',
    'tabThreeLine19': 'Данное предложение доступно один раз для одного человека, семьи, домашнего адреса, адреса электронной почты, номера телефона, общего устройства, одного IP-адреса.',
    'tabThreeLine20': 'Может производиться проверка регистрационных данных и транзакций по любым причинам. Если вследствие проверки будет выявлено, что участник/-и использует/-ют запрещенные стратегии или мошенничество, в том числе мультиаккаунтинг, компания может не производить зачисление бонуса.',
    'tabThreeLine21': 'Для участия в предложении необходимо пройти верификацию, подтвердив номер телефона в личном кабинете сайта. Для игроков, которые не прошли верификацию, получение бонуса недоступно.',
    'tabFourLine1': '- <span class="tabs__list-num">1</span> Быть зарегистрированным и верифицированным на <a class="tabs__list-link" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a>;',
    'tabFourLine2': '- <span class="tabs__list-num">2</span> Сделать ставку на сумму <span class="tabs__list-bold">от 2 USD</span>;',
    'tabFourLine3': '- Пополнить игровой счет на сайте <a class="tabs__list-link" href="https://maxlinebet.com/" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://maxlinebet.com/" target="_blank">maxlinebet.com</a>;',
    'tabFourLine4': '- 0,5 BYN - 19,99 BYN - 1%',
    'tabFourLine5': '- 20,00 BYN - 49,99 BYN - 1,5%',
    'tabFourLine6': '- 50,00 BYN - 99,99 BYN - 2,0%',
    'tabFourLine7': '- 100,00 BYN - 199,99 BYN - 2,5%',
    'tabFourLine8': '- 200,00 BYN - 499,99 BYN - 3,0%',
    'tabFourLine9': '- 500,00 BYN - 999,99 BYN - 3,5%',
    'tabFourLine10': '- более 1000 BYN - 4,0%',
    'tabFourLine11': '- Бонус зачисляется автоматически.',
    'tabFourLine12': '- Максимальная сумма бонуса составляет 100 USD.',
    'tabFourLine13': '- Для подтверждения участия в бонусном предложении необходимо нажать на "галочку" в личном кабинете. Возможность подтверждения участия появится в личном кабинете после выполнения всех условий для получения бонуса.',
    'tabFourLine14': '- Полученный бонус необходимо отыграть с коэффициентом не ниже 1.6 (сделать одну или несколько ставок). Ставки типа «система», на TV-игры, на Live-лотереи, Казино, Слоты, VIP-ставки, финансовые ставки и Cash Out в отыгрыше не учитываются.',
    'tabFourLine15': '- Данное предложение доступно для одного человека, семьи, домашнего адреса, адреса электронной почты, номера телефона, общего устройства, одного IP-адреса.',
    'tabFourLine16': '- Может производиться проверка регистрационных данных и транзакций по любым причинам. Если вследствие проверки будет выявлено, что участник/-и использует/-ют запрещенные стратегии или мошенничество, в том числе мультиаккаунтинг, компания может не производить зачисление бонуса.',
    'tabFourLine17': '- Букмекер оставляет за собой право приостановить действие бонуса.',

  },

  "english": {
    'tabsTitleOne': 'To receive a 100% bonus on the first deposit, you must:',
    'tabsTitleTwo': 'The bonus amount is equal to 100% of the amount of the first deposit of the game account.',
    'tabsTitleThree': 'To receive the “Maxline pays” bonus, you must:',
    'tabsTitleFour': 'To receive the “Maxline Returns” bonus, you must:',
    'tabsTitleFive': 'The offer does not include:',
    'tabsTitleSix': 'The amount of the bonus depends on the amount of the deposit:',
    'tabOneLine1': '<span class="tabs__list-num">1</span> Register at <a class="tabs__list-link" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://m.maxlinebet.com/registration" target="_blank">maxlinebet.com</a>, verify your account from 01.11.2020 to 31.12.2021.',
    'tabOneLine2': '<span class="tabs__list-num">2</span>  For the first time, replenish your gaming account in the amount of <span class="tabs__list-bold">20 USD</span>.',
    'tabOneLine4': '<span class="tabs__list-num">3</span> Place bets with odds of at least 1.9 for an amount exceeding(equal to) five times the size of your first deposit of your game account in “express”, “system” or single bets. <span class="tabs__list-grey">For example, if the first deposit was 20 USD, then you need to place bets of 100 USD (or more).</span>',
    'tabOneLine5': '<span class="tabs__list-num">4</span> Contact by 31.12.2021 at <a class="tabs__list-link" href="">bonus@maxlinebet.com</a> indicating the game account number and a note <span class="tabs__list-bold">"First deposit".</span>',
    'tabOneLine6': '- The bonus will be credited within 3 days after the request.',
    'tabOneLine7': '- Bets on TV games, Slots, Casinos, financial bets, Live lotteries, Cash Out, bets on bonus money, bets at which bonus money was credited within the framework of the offers “Maxline pays” and “Maxline will return” in the offer do not participate.',
    'tabOneLine8': '- If, in the process of fulfilling the conditions for receiving the bonus, a participant places bets that do not participate in the offer, the amount of these bets is not counted in the amount of the bet that the Player must make in accordance with the conditions.',
    'tabOneLine9': '- At any time, the participant can early request the payment of the entire amount (or part) of the replenishment from his gaming account in accordance with the rules, however, in this case, the bonus will not be credited.',
    'tabOneLine10': '- The received bonus must be wagered with a coefficient of at least 1.6 (make one or several bets). System bets, VIP bets, TV games, Slots, Casinos, Live lotteries, financial bets and Cash Out are not included in the wagering requirements.',
    'tabOneLine11': '- This offer is available once for one person, family, home address, email address, phone number, shared device, one IP address. Registration data and transactions can be verified for any reason. If, as a result of the verification, it is revealed that the participant / -s are using / are using prohibited strategies or fraud, including multi-accounting, the company may not credit the bonus.',
    'tabOneLine12': '- Bets participating in this offer do not count towards the Unsuccessful Bets Series bonus.',
    'tabOneLine13': '- The bonus is not available for receipt if the participant has been credited with a bonus for registration.',
    'tabOneLine14': '- After the bonus is credited to the gaming account, it is prohibited to participate in the "Risk Free Bet" offer.',
    'tabOneLine15': '- Once the "Risk Free Bet" bonus has been credited, this bonus cannot be received.',
    'tabOneLine16': 'The maximum bonus amount is 250 USD.',
    'tabOneLine17': 'The bookmaker reserves the right to suspend the bonus.',
    'tabTwoLine1': '<span class="tabs__list-num">1</span> Be registered and verified on <a class="tabs__list-link" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a>;',
    'tabTwoLine2': '<span class="tabs__list-num">2</span> Replenish your game account in the amount <span class="tabs__list-bold">of 10 USD</span>.*',
    'tabTwoLine3': '<span class="tabs__list-num">3</span> Correctly predict the outcomes of the proposed matches.',
    'tabTwoLine4': '<p>* To participate in the offer, the amount of funds deposited in the game account for the last 10 days must be at least 10 USD. The forecast is accepted for the outcome of regular time of matches.</p>',
    'tabTwoLine5': 'After selecting all the outcomes of the proposed matches, as well as fulfilling all the conditions, the participant must click the "Make a prediction" button. One game account can make one forecast per day. Each participant who correctly predicted the outcomes of 10 proposed matches will receive 1000 USD to the Maxline bonus account. Each participant who correctly predicted the outcomes of the 9 proposed matches will receive 100 USD to the Maxline bonus account. Each participant who correctly predicted the outcome of the 8 proposed matches will receive 10 USD to the Maxline bonus account.',
    'tabTwoLine6': 'In case of leaving predictions from several gaming accounts, overlapping by devices or ip-addresses, the bonus will not be credited.',
    'tabTwoLine7': 'If the match participating in the bonus did not take place, then the forecast for this match is considered unpredictable. The received bonus must be wagered with a coefficient of at least 1.6 (make one or several bets). System bets, casinos, slots, TV games, Live lotteries, VIP bets, financial bets and Cash Out do not count towards wagering. The bonus is credited automatically after the results of the matches participating in the offer appear on official sources. In the absence of information on the results of the event on the official source within 24 hours, the Bookmaker may use alternative sources.',
    'tabTwoLine8': 'The bookmaker reserves the right to suspend the bonus.',
    'tabThreeLine1': '<span class="tabs__list-num">1</span> Get acquainted with the current list of matches and outcomes on the resource: <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://promo.maxline.by/maxline_pays/</a> <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://vk.com/maxlineby</a>',
    'tabThreeLine2': '<span class="tabs__list-num">2</span> If the event on which a losing bet was made was included in the list of matches "Maxline pays", then to receive a bonus, you need to go to the bet history in your personal account and click on the ML pays button. After clicking the button, the bonus money will be automatically credited to the game account funds in an amount equal to the amount of the net winnings plus the amount of the bet that qualifies for the offer.',
    'tabThreeLine3': '<span class="tabs__list-num">1</span> Get acquainted with the current list of matches and outcomes on the resource: <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://promo.maxline.by/maxline_pays/</a> <a class="tabs__list-link" href="https://promo.maxline.by/maxline_pays/" target="_blank">https://vk.com/maxlineby</a>',
    'tabThreeLine4': '<span class="tabs__list-num">2</span> If the event, on which a losing bet was made, was included in the list of matches "Maxline will return", then in order to receive the bonus, you need to enter the bet history in the personal account of the site and click on the ML button. funds in an amount equal to the amount of the bet that qualifies for the offer.',
    'tabThreeLine5': '- The maximum coefficient of an event eligible for the offer is "5".',
    'tabThreeLine6': '- The maximum amount of the bonus, which will be credited to the gaming account after clicking the button, within the framework of the "Maxline will return" offer is 1000 USD. If the winning on the bet exceeds the maximum amount of the bonus, then the amount of the bonus is credited equal to the maximum amount.',
    'tabThreeLine7': '- "Maxline Refunds" offer applies only to single bets.',
    'tabThreeLine8': '- The offer includes live bets and pre-event bets at the discretion of the Bookmaker.',
    'tabThreeLine9': '- The offer includes bets placed on any of the Maxlinebet.com online resources.',
    'tabThreeLine10': '- The offer is valid only on the date of publication of the results until 00:00 (the beginning of the next day).',
    'tabThreeLine11': '- rates of the "express" type from 14.07.2020',
    'tabThreeLine12': '- "CashOut" bets',
    'tabThreeLine13': '- "system" type bets',
    'tabThreeLine14': '- bets on statistical data (number of RCs, corners, shots on target, etc.) *',
    'tabThreeLine15': '- rates for extra time *',
    'tabThreeLine16': '- bets on overtime and shootout *',
    'tabThreeLine17': '- bets with increased odds * <span class="tabs__list-nl">-casino and slots</span>',
    'tabThreeLine18': '* Except where stats, extra time, overtime and shootout bets, specials with higher odds are published as a separate event. When published as a separate event, the bonus will be credited for such rates. The received bonus must be wagered with a coefficient of at least 1.6 (make one or several bets). System bets, TV games, Live lotteries, VIP bets, financial bets and Cash Out do not count towards wagering.',
    'tabThreeLine19': 'This offer is available once for one person, family, home address, email address, phone number, shared device, one IP address.',
    'tabThreeLine20': 'Registration data and transactions can be verified for any reason. If, as a result of the verification, it is revealed that the participant / -s are using / are using prohibited strategies or fraud, including multi-accounting, the company may not credit the bonus.',
    'tabThreeLine21': 'To participate in the offer, you must go through verification by confirming the phone number in the personal account of the site. For players who have not been verified, the bonus is not available.',
    'tabFourLine1': '- <span class="tabs__list-num">1</span> Be registered and verified on <a class="tabs__list-link" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://maxlinebet.com/registration" target="_blank">maxlinebet.com</a>;',
    'tabFourLine2': '- <span class="tabs__list-num">2</span> Place a bet in the amount of <span class="tabs__list-bold">2 USD</span>;',
    'tabFourLine3': '- Fund your account at <a class="tabs__list-link" href="https://maxlinebet.com/" target="_blank">maxlinebet.com</a><a class="tabs__list-link tabs__list-link_md" href="https://maxlinebet.com/" target="_blank">maxlinebet.com</a>;',
    'tabFourLine4': '- 0,5 USD - 19,99 USD - 1%',
    'tabFourLine5': '- 20,00 USD - 49,99 USD - 1,5%',
    'tabFourLine6': '- 50,00 USD - 99,99 USD - 2,0%',
    'tabFourLine7': '- 100,00 USD - 199,99 USD - 2,5%',
    'tabFourLine8': '- 200,00 USD - 499,99 USD - 3,0%',
    'tabFourLine9': '- 500,00 USD - 999,99 USD - 3,5%',
    'tabFourLine10': '- более 1000 USD - 4,0%',
    'tabFourLine11': '- The bonus is credited automatically.',
    'tabFourLine12': '- The maximum bonus amount is 100 USD.',
    'tabFourLine13': '- To confirm participation in the bonus offer, you must click on the "tick" in your personal account. The opportunity to confirm participation will appear in your personal account after all the conditions for receiving a bonus are met.',
    'tabFourLine14': '- The received bonus must be wagered with a coefficient of at least 1.6 (make one or several bets). System bets, on TV games, Live lotteries, Casinos, Slots, VIP bets, financial bets and Cash Out are not counted in wagering.',
    'tabFourLine15': '- This offer is available for one person, family, home address, email address, phone number, shared device, one IP address.',
    'tabFourLine16': '- Registration data and transactions can be verified for any reason. If, as a result of the verification, it is revealed that the participant / -s are using / are using prohibited strategies or fraud, including multi-accounting, the company may not credit the bonus.',
    'tabFourLine17': '- The bookmaker reserves the right to suspend the bonus.',
  }
}
;

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