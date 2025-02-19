import createHead from "./head.js";
import createFeaturedProducts from "./featured_products.js";
import createSellers from "./sellers.js";
import createTrendingEarphones from "./trending_earphones.js";
import createNewLaunches from "./new_launches.js";
import createFooter from "./footer.js";

import "../css/index.css";

import { creatCardSell } from "./card.js";
import { creatCardTrend } from "./card.js";

const cardSell_1 = [
  {
    color: "card-color_mint",
    colorSave: "",
    name: "",
    review: 0,
    price: 20,
    save: 0,
    image: "./img/Top_Picks_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
];
const cardSell_2 = [
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
    image: "./img/Top_Picks_2.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
];
const cardTrend_1 = [
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "",
    review: 0,
    price: 20,
    save: 60,
  },
  {
    color: "card-color_blu-3",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-3",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-3",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-3",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-3",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
];
const cardTrend_2 = [
  {
    color: "card-color_blu-4",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-4",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-4",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-4",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-4",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-4",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-4",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
];
const cardTrend_3 = [
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "",
    review: 0,
    price: 20,
    save: 60,
  },
  {
    color: "card-color_blu-5",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-5",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-5",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-5",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
  {
    color: "card-color_blu-5",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
];

function gidrationTemplate_2(array, wrapperString) {
  let cardsArray = [];

  array.forEach((item) => {
    cardsArray.push(creatCardSell(item)); //гидрация
  });
  console.log(cardsArray);

  const cardsWrapper = document.querySelector(wrapperString);
  cardsWrapper.innerHTML = "";

  cardsArray.forEach((item) => {
    cardsWrapper.appendChild(item);
  });
}


function switchTabButton_2() {
  const sellersMenu = document.querySelector(".sellers-menu");
  sellersMenu.addEventListener("click", (event) => {
    sellersMenu.querySelectorAll("button").forEach((item) => {
      item.classList.remove("sellers-menu-active");
    });

    if (event.target.innerText == "Top Picks") {
      gidrationTemplate_2(cardSell_1, ".sellers-product-wrapper");
      event.target.classList.add("sellers-menu-active");
    } else {
      gidrationTemplate_2(cardSell_2, ".sellers-product-wrapper");
      event.target.classList.add("sellers-menu-active");
    }
  });
}


function gidrationTemplate_3(array, wrapperString) {
  let cardsArray = [];

  array.forEach((item) => {
    cardsArray.push(creatCardTrend(item)); //гидрация
  });
  console.log(cardsArray);

  const cardsWrapper = document.querySelector(wrapperString);
  cardsWrapper.innerHTML = "";

  cardsArray.forEach((item) => {
    cardsWrapper.appendChild(item);
  });
}

function switchTabButton_3() {
  const trendMenu = document.querySelector(".trending-earphones__menu");
  trendMenu.addEventListener("click", (event) => {
    trendMenu.querySelectorAll("button").forEach((item) => {
      console.dir(item);
      item.classList.remove("trending-earphones__menu__active");
    });

    if (event.target.innerText == "Earbuds") {
      gidrationTemplate_3(cardTrend_1, ".trending-earphones__product-wrapper");
      event.target.classList.add("trending-earphones__menu__active");
    } else if (event.target.innerText == "Wireless") {
      gidrationTemplate_3(cardTrend_2, ".trending-earphones__product-wrapper");
      event.target.classList.add("trending-earphones__menu__active");
    } else {
      gidrationTemplate_3(cardTrend_3, ".trending-earphones__product-wrapper");
      event.target.classList.add("trending-earphones__menu__active");
    }
  });
}

const bodyWrapper = document.querySelector("body");
bodyWrapper.appendChild(createHead ());
bodyWrapper.appendChild( createFeaturedProducts())
bodyWrapper.appendChild( createSellers())
bodyWrapper.appendChild( createTrendingEarphones())
bodyWrapper.appendChild( createNewLaunches())
bodyWrapper.appendChild( createFooter())

gidrationTemplate_2(cardSell_2, ".sellers-product-wrapper");
switchTabButton_2();
gidrationTemplate_3(cardTrend_3, ".trending-earphones__product-wrapper");
switchTabButton_3();

// папка с фунц utils (утилиты)
// папка с компонентами (меню, карточки, кнопки) components 
// в секция вызвать функции и компоненты
//вызов функции и передача элемента в функцию / как работает функция 
// дебаг 
// ожидание - вызов - ГДЕ вызов - есть ли вызов - родитель - функции родителя