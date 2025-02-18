import "../css/index.css";

import { creatCardSell } from "./card.js";
import { creatCardTrend } from "./card.js";

const cardSell_1 = [
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
  {
    color: "card-color_blu-3",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
]
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
]
const cardTrend_3 = [
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
  {
    color: "card-color_blu-5",
    colorSave: "",
    name: "",
    review: 0,
    price: 0,
    save: 0,
  },
]


function gidrationTemplate(array, wrapperString) {
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

gidrationTemplate_2(cardSell_2, ".sellers-product-wrapper");

function switchTabButton_2 () {
  const sellersMenu = document.querySelector(".sellers-menu");
  sellersMenu.addEventListener("click", (event) => {
    sellersMenu.querySelectorAll("button").forEach((item) => {
      console.dir(item);
      item.classList.remove("sellers-menu-active");
    });

    if (event.target.innerText == "Top Picks") {
      gidrationTemplate(cardSell_1, ".sellers-product-wrapper");
      event.target.classList.add("sellers-menu-active");
    } else {
      gidrationTemplate(cardSell_2, ".sellers-product-wrapper");
      event.target.classList.add("sellers-menu-active");
    }
  });
}
switchTabButton_2();

gidrationTemplate_3(cardTrend_3, ".trending-earphones__product-wrapper");

function switchTabButton_3 () {
  const trendMenu = document.querySelector(".sellers-menu");
  trendMenu.addEventListener("click", (event) => {
    trendMenu.querySelectorAll("button").forEach((item) => {
      console.dir(item);
      item.classList.remove("trending-earphones__menu__active");
    });

    if (event.target.innerText == "Earbuds") {
      gidrationTemplate(cardTrend_1, ".trending-earphones__product-wrapper");
      event.target.classList.add("trending-earphones__menu__active");}
    if (event.target.innerText == "Wireless") {
      gidrationTemplate(cardTrend_2, ".trending-earphones__product-wrapper");
      event.target.classList.add("trending-earphones__menu__active");
    } 
    else {
      gidrationTemplate(cardTrend_3, ".trending-earphones__product-wrapper");
      event.target.classList.add("trending-earphones__menu__active");
    }
  });
}
switchTabButton_3();