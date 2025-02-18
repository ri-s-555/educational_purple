import "../css/index.css";
console.log("hello");

console.log("Hello, Webpack!");

import { creatCard } from "./card.js";

const cards_1 = [
  {
    color: "card-color_mint",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_mint",
    price: 20,
    name: "",
    review: 0,
  },
  {
    color: "card-color_mint",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_mint",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_mint",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_mint",
    price: 0,
    name: "",
    review: 0,
  },
];
const cards_2 = [
  {
    color: "card-color_purpure",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_purpure",
    price: 20,
    name: "",
    review: 0,
  },
  {
    color: "card-color_purpure",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_purpure",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_purpure",
    price: 0,
    name: "",
    review: 0,
  },
  {
    color: "card-color_purpure",
    price: 0,
    name: "",
    review: 0,
  },
];

function gidrationTemplate(array, wrapperString) {
  let cardsArray = [];

  array.forEach((item) => {
    cardsArray.push(creatCard(item)); //гидрация
  });
  console.log(cardsArray);

  const cardsWrapper = document.querySelector(wrapperString);

  cardsWrapper.innerHTML = ""

  cardsArray.forEach((item) => {
    cardsWrapper.appendChild(item);
  });
}

gidrationTemplate(cards_2, ".sellers-product-wrapper");



function switchTabButton() {
  const sellersMenu = document.querySelector(".sellers-menu");
  sellersMenu.addEventListener ("click", (event) => {
    // по клику на кнопку меняется цвет кнопки и открывается другой массив
    
    // console.dir(event.target) 

    sellersMenu.querySelectorAll ("button").forEach((item)=>{
        console.dir(item)
        item.classList.remove ("sellers-menu-active")
    })

if (event.target.innerText == "Top Picks") {
    gidrationTemplate(cards_1, ".sellers-product-wrapper");
    event.target.classList.add ("sellers-menu-active")
}
else {
    gidrationTemplate(cards_2, ".sellers-product-wrapper");
    event.target.classList.add ("sellers-menu-active")
}



  })
}
switchTabButton()

