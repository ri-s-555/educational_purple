import createHead from "./head.js";
import createFeaturedProducts from "./featured_products.js";
import createSellers from "./sellers.js";
import createTrendingEarphones from "./trending_earphones.js";
import createNewLaunches from "./new_launches.js";
import createFooter from "./footer.js";

import "../css/index.css";

import { creatCardSell } from "./components/card.js";
import { creatCardTrend } from "./components/card.js";

const cardSell_1 = [
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Top_Picks_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat kerz 234",
    review: 80,
    price: 50,
    save: 0,
    image: "./img/Top_Picks_2.png",
  },
  {
    color: "card-color_mint",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Top_Picks_3.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Top_Picks_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat kerz 234",
    review: 80,
    price: 50,
    save: 0,
    image: "./img/Top_Picks_2.png",
  },
  {
    color: "card-color_mint",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Top_Picks_3.png",
  },
];
const cardSell_2 = [
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Top_Picks_1.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat kerz 234",
    review: 80,
    price: 50,
    save: 0,
    image: "./img/Top_Picks_2.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "card-color_blu",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Top_Picks_3.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Top_Picks_1.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat kerz 234",
    review: 80,
    price: 50,
    save: 0,
    image: "./img/Top_Picks_2.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "card-color_blu",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Top_Picks_3.png",
  },
];
const cardTrend_1 = [
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "Boat Rockerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "Boat Rockerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "Boat Rockerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "Boat Rockerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "Boat Rockerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_blu-3",
    colorSave: "card-color_green",
    name: "Boat Rockerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_1.png",
  },
];
const cardTrend_2 = [
  {
    color: "card-color_blu-4",
    colorSave: "card-color_green",
    name: "Boat kerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_2.png",
  }, 
  {
    color: "card-color_blu-4",
    colorSave: "card-color_green",
    name: "Boat kerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_2.png",
  }, 
  {
    color: "card-color_blu-4",
    colorSave: "card-color_green",
    name: "Boat kerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_2.png",
  }, 
  {
    color: "card-color_blu-4",
    colorSave: "card-color_green",
    name: "Boat kerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_2.png",
  }, 
  {
    color: "card-color_blu-4",
    colorSave: "card-color_green",
    name: "Boat kerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_2.png",
  }, 
  {
    color: "card-color_blu-4",
    colorSave: "card-color_green",
    name: "Boat kerz 333",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_2.png",
  }, 
];
const cardTrend_3 = [
  {
    color: "card-color_blu-5",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_blu-5",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_blu-5",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_blu-5",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_blu-5",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_blu-5",
    colorSave: "card-color_green",
    name: "Boat Rockerz 323",
    review: 50,
    price: 20,
    save: 60,
    image: "./img/Trending Earphones_3.png",
  },
];

function gidrationTemplate_2(array, wrapperString) {
  let cardsArray = [];

  array.forEach((item) => {
    cardsArray.push(creatCardSell(item)); //гидрация
  });

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
      item.classList.remove("menu__tab_button_active");
    });

    if (event.target.innerText == "Top Picks") {
      gidrationTemplate_2(cardSell_1, ".sellers-product-wrapper");
      event.target.classList.add("menu__tab_button_active");
    } else {
      gidrationTemplate_2(cardSell_2, ".sellers-product-wrapper");
      event.target.classList.add("menu__tab_button_active");
    }
  });
}

function gidrationTemplate_3(array, wrapperString) {
  let cardsArray = [];

  array.forEach((item) => {
    cardsArray.push(creatCardTrend(item)); //гидрация
  });

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
      item.classList.remove("menu__tab_button_active");
    });

    if (event.target.innerText == "Earbuds") {
      gidrationTemplate_3(cardTrend_1, ".trending-earphones__product-wrapper");
      event.target.classList.add("menu__tab_button_active");
    } else if (event.target.innerText == "Wireless") {
      gidrationTemplate_3(cardTrend_2, ".trending-earphones__product-wrapper");
      event.target.classList.add("menu__tab_button_active");
    } else {
      gidrationTemplate_3(cardTrend_3, ".trending-earphones__product-wrapper");
      event.target.classList.add("menu__tab_button_active");
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