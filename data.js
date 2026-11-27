/* =====================================================================
   Murzilka web design — цены и проекты.
   Меняйте цифры и тексты ТОЛЬКО здесь: их подхватывают все версии сайта
   (русская, английская, грузинская), калькулятор и карточки услуг.
   ===================================================================== */
window.MZ={
 /* Аналитика: вставьте ID, и счётчики включатся сами.
    gtm — контейнер Google Tag Manager 'GTM-XXXXXXX' (если задан, GA4 и события идут через него),
    ga4 — вида 'G-XXXXXXXXXX' (подключается напрямую, только если gtm пустой),
    ym — номер счётчика Яндекс Метрики, например '12345678'.
    Цели: whatsapp_click и telegram_click (нажатия на кнопки WhatsApp и Telegram). */
 analytics:{gtm:'GTM-P2BGSG5Q',ga4:'G-E6WY7VZC5N',ym:''},

 prices:{
  /* «от $…» в карточках «Что я делаю» */
  cards:{hotel:300,multi:300,landing:150,crm:100},
  /* калькулятор: формат сайта */
  formats:{land:150,multi:300,shop:450},
  /* калькулятор: функции (book — запись/бронирование, msg — заявки в мессенджер, crm, pay — онлайн-оплата,
     cat — меню/услуги/каталог, rev — отзывы/карта/галерея, seo — SEO и аналитика) */
  features:{book:150,msg:40,crm:100,pay:120,cat:60,rev:50,seo:80},
  /* каждый дополнительный язык */
  extraLanguage:80
 },

 /* Работы в ноутбуке. img — имя картинки из папки img (и уменьшенных копий: img/m — 1000 px, img/s — 600 px для телефонов),
    href — ссылка, ru / en / ka — тексты на каждом языке. */
 works:[
 {
  "img": "hotel",
  "href": "https://checkpointhotel.ge/",
  "ru": {
   "t": "Checkpoint Hotel",
   "d": "Сайт бутик-отеля в Старом Тбилиси",
   "li": [
    "Три языка: русский, английский и грузинский",
    "Отель, кафе, меню, турагентство и спецпредложения на одном сайте",
    "Кнопка онлайн-бронирования всегда под рукой"
   ],
   "tags": [
    "Отель",
    "3 языка",
    "Бронирование"
   ],
   "res": "Для бутик-отеля в Старом Тбилиси сайт стал полноценным каналом привлечения гостей: 54 гостя пришли через него. Всего за два месяца посещаемость выросла более чем в четыре раза: с 173 визитов в октябре до 747 в ноябре — несмотря на то, что ноябрь считается низким сезоном."
  },
  "en": {
   "t": "Checkpoint Hotel",
   "d": "Boutique hotel website in Old Tbilisi",
   "li": [
    "Three languages: Russian, English and Georgian",
    "Hotel, cafe, menu, travel agency and special offers on one site",
    "Online booking button always at hand"
   ],
   "tags": [
    "Hotel",
    "3 languages",
    "Booking"
   ],
   "res": "For a boutique hotel in Old Tbilisi, the website became a full-fledged channel for attracting guests: 54 guests came through it. In just two months, traffic grew more than fourfold: from 173 visits in October to 747 in November, even though November is the low season."
  },
  "ka": {
   "t": "Checkpoint Hotel",
   "d": "ბუტიკ-სასტუმროს საიტი ძველ თბილისში",
   "li": [
    "სამი ენა: რუსული, ინგლისური და ქართული",
    "სასტუმრო, კაფე, მენიუ, ტურისტული სააგენტო და სპეციალური შეთავაზებები ერთ საიტზე",
    "ონლაინ ჯავშნის ღილაკი ყოველთვის ხელთ"
   ],
   "tags": [
    "სასტუმრო",
    "3 ენა",
    "ჯავშანი"
   ],
   "res": "ძველი თბილისის ბუტიკ-სასტუმროსთვის საიტი სტუმრების მოზიდვის სრულფასოვან არხად იქცა: მისი მეშვეობით 54 სტუმარი მოვიდა. სულ რაღაც ორ თვეში ვიზიტები ოთხჯერ მეტად გაიზარდა: ოქტომბრის 173 ვიზიტიდან ნოემბრის 747-მდე, მიუხედავად იმისა, რომ ნოემბერი დაბალ სეზონად ითვლება."
  }
 },
 {
  "img": "booking",
  "href": "https://checkpointhotel.ge/hotel/book/",
  "ru": {
   "t": "Бронирование",
   "d": "Своё бронирование без комиссий площадок",
   "li": [
    "Гость выбирает даты и количество гостей",
    "Видит свободные номера и цены с завтраком и без",
    "Оформляет бронь в 4 шага: даты, номер, данные, готово"
   ],
   "tags": [
    "Без комиссий",
    "Даты и цены",
    "4 шага"
   ]
  },
  "en": {
   "t": "Booking",
   "d": "Own booking with no platform fees",
   "li": [
    "The guest picks dates and number of guests",
    "Sees available rooms and prices with or without breakfast",
    "Books in 4 steps: dates, room, details, done"
   ],
   "tags": [
    "No fees",
    "Dates and prices",
    "4 steps"
   ]
  },
  "ka": {
   "t": "ჯავშანი",
   "d": "საკუთარი ჯავშანი პლატფორმების საკომისიოს გარეშე",
   "li": [
    "სტუმარი ირჩევს თარიღებსა და სტუმრების რაოდენობას",
    "ხედავს თავისუფალ ნომრებსა და ფასებს საუზმით და მის გარეშე",
    "აფორმებს ჯავშანს 4 ნაბიჯში: თარიღები, ნომერი, მონაცემები, მზადაა"
   ],
   "tags": [
    "საკომისიოს გარეშე",
    "თარიღები და ფასები",
    "4 ნაბიჯი"
   ]
  }
 },
 {
  "img": "groups",
  "href": "https://groups.checkpointhotel.ge/",
  "ru": {
   "t": "Калькулятор группы",
   "d": "Номера загораются под размер группы",
   "li": [
    "Ползунок от 2 до 35 гостей и выбор ночей",
    "Схема показывает, какие номера займёт группа",
    "Сразу считает цену за ночь и за весь срок, запрос уходит в WhatsApp"
   ],
   "tags": [
    "Группы",
    "Калькулятор",
    "WhatsApp"
   ]
  },
  "en": {
   "t": "Group calculator",
   "d": "Rooms light up to fit the group size",
   "li": [
    "Slider from 2 to 35 guests and number of nights",
    "A plan shows which rooms the group will take",
    "Instantly counts the price per night and for the whole stay, the request goes to WhatsApp"
   ],
   "tags": [
    "Groups",
    "Calculator",
    "WhatsApp"
   ]
  },
  "ka": {
   "t": "ჯგუფის კალკულატორი",
   "d": "ნომრები ინთება ჯგუფის ზომის მიხედვით",
   "li": [
    "სლაიდერი 2-დან 35 სტუმრამდე და ღამეების არჩევა",
    "სქემა აჩვენებს, რომელ ნომრებს დაიკავებს ჯგუფი",
    "მაშინვე ითვლის ფასს ღამეში და მთელ პერიოდზე, მოთხოვნა იგზავნება WhatsApp-ში"
   ],
   "tags": [
    "ჯგუფები",
    "კალკულატორი",
    "WhatsApp"
   ]
  }
 },
 {
  "img": "doors",
  "href": "https://groups.checkpointhotel.ge/#rooms",
  "ru": {
   "t": "Двери в номера",
   "d": "Открываешь дверь и видишь номер",
   "li": [
    "Каждый номер спрятан за своей цветной дверью",
    "Под дверью видно, сколько мест и есть ли диван",
    "Нажимаешь, дверь открывается, внутри фото номера"
   ],
   "tags": [
    "Интерактив",
    "Номера"
   ]
  },
  "en": {
   "t": "Room doors",
   "d": "Open a door and see the room",
   "li": [
    "Every room hides behind its own colored door",
    "Under the door you see the number of beds and whether there is a sofa",
    "Tap it, the door opens, and inside are photos of the room"
   ],
   "tags": [
    "Interactive",
    "Rooms"
   ]
  },
  "ka": {
   "t": "ნომრების კარები",
   "d": "აღებ კარს და ხედავ ნომერს",
   "li": [
    "ყოველი ნომერი თავისი ფერადი კარის მიღმაა",
    "კარის ქვეშ ჩანს, რამდენი ადგილია და არის თუ არა დივანი",
    "აჭერ, კარი იღება, შიგნით ნომრის ფოტოებია"
   ],
   "tags": [
    "ინტერაქტივი",
    "ნომრები"
   ]
  }
 },
 {
  "img": "tours",
  "href": "https://mamageorgia.checkpointhotel.ge/",
  "ru": {
   "t": "Mama Georgia Tours",
   "d": "Лендинг турагентства с ценами и видео",
   "li": [
    "Туры на 7 дней, поездки на 1 день и девичники",
    "Цены и видео прямо на странице",
    "Три языка и кнопка WhatsApp на каждом экране"
   ],
   "tags": [
    "Туры",
    "Лендинг",
    "3 языка"
   ]
  },
  "en": {
   "t": "Mama Georgia Tours",
   "d": "Travel agency landing page with prices and videos",
   "li": [
    "7-day tours, day trips and bachelorette trips",
    "Prices and videos right on the page",
    "Three languages and a WhatsApp button on every screen"
   ],
   "tags": [
    "Tours",
    "Landing page",
    "3 languages"
   ]
  },
  "ka": {
   "t": "Mama Georgia Tours",
   "d": "ტურისტული სააგენტოს ლენდინგი ფასებითა და ვიდეოებით",
   "li": [
    "7-დღიანი ტურები, ერთდღიანი მოგზაურობები და გოგონების წვეულებები",
    "ფასები და ვიდეოები პირდაპირ გვერდზე",
    "სამი ენა და WhatsApp ღილაკი ყველა ეკრანზე"
   ],
   "tags": [
    "ტურები",
    "ლენდინგი",
    "3 ენა"
   ]
  }
 },
 {
  "img": "menu",
  "href": "https://checkpointhotel.ge/menu/",
  "ru": {
   "t": "Онлайн-меню",
   "d": "Меню кафе с фото и ценами",
   "li": [
    "Еда и напитки разложены по категориям",
    "У каждого блюда фото, состав и цена",
    "Часы работы и адрес кафе сразу наверху"
   ],
   "tags": [
    "Кафе",
    "Меню",
    "3 языка"
   ]
  },
  "en": {
   "t": "Online menu",
   "d": "Cafe menu with photos and prices",
   "li": [
    "Food and drinks sorted into categories",
    "Every dish has a photo, ingredients and price",
    "Opening hours and address right at the top"
   ],
   "tags": [
    "Cafe",
    "Menu",
    "3 languages"
   ]
  },
  "ka": {
   "t": "ონლაინ მენიუ",
   "d": "კაფეს მენიუ ფოტოებითა და ფასებით",
   "li": [
    "კერძები და სასმელები კატეგორიებად არის დალაგებული",
    "ყველა კერძს აქვს ფოტო, შემადგენლობა და ფასი",
    "სამუშაო საათები და კაფეს მისამართი პირდაპირ ზემოთ"
   ],
   "tags": [
    "კაფე",
    "მენიუ",
    "3 ენა"
   ]
  }
 }
]
};
