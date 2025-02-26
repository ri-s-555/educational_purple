// import "../js/utils/function.js";

// import {gidrationTemplate_2, switchTabButton_2} from "./utils/function.js";


import {createMenuSell} from "./components/menu.js";
// import { creatCardSell } from "./components/card.js";

export default function createSellers() {
  const menu = createMenuSell(["Top Picks", "Watches"]);

  const elem = document.createElement("div");
  elem.classList.add("container", "sellers");
  elem.innerHTML = `
        <div class="sellers-header">Top Sellers</div>
        <div class="sellers-menu-wrapper"></div>
        <div class="sellers-product-wrapper"></div>
        `;

  elem.querySelector(".sellers-menu-wrapper").appendChild(menu);

  return elem;
}

//  идеи использования уни ф меню
// import createMenu from "./components/menu.js";

// export default function createSellers() {
//   const menu = createMenu(["Top Picks", "Watches"]);

//   const elem = document.createElement("div");
//   elem.classList.add("container", "sellers");
//   elem.innerHTML = `
//         <div class="sellers-header">Top Sellers</div>
//         <div class="sellers-menu-wrapper"></div>
//         <div class="sellers-product-wrapper"></div>
//         `;

//   elem.querySelector(".sellers-menu-wrapper").appendChild(menu);

//   return elem;
// }

// массив карточек из индекса
// const cardSell_1 = [
//   {
//     color: "card-color_mint",
//     colorSave: "",
//     name: "Boat Rockerz 333",
//     review: 75,
//     price: 20,
//     save: 0,
//     image: "./img/Top_Picks_1.png",
//   },
//   {
//     color: "card-color_mint",
//     colorSave: "",
//     name: "Boat kerz 234",
//     review: 80,
//     price: 50,
//     save: 0,
//     image: "./img/Top_Picks_2.png",
//   },
//   {
//     color: "card-color_mint",
//     colorSave: "card-color_green",
//     name: "Boat Rockerz 323",
//     review: 50,
//     price: 20,
//     save: 60,
//     image: "./img/Top_Picks_3.png",
//   },
//   {
//     color: "card-color_mint",
//     colorSave: "",
//     name: "Boat Rockerz 333",
//     review: 75,
//     price: 20,
//     save: 0,
//     image: "./img/Top_Picks_1.png",
//   },
//   {
//     color: "card-color_mint",
//     colorSave: "",
//     name: "Boat kerz 234",
//     review: 80,
//     price: 50,
//     save: 0,
//     image: "./img/Top_Picks_2.png",
//   },
//   {
//     color: "card-color_mint",
//     colorSave: "card-color_green",
//     name: "Boat Rockerz 323",
//     review: 50,
//     price: 20,
//     save: 60,
//     image: "./img/Top_Picks_3.png",
//   },
// ];
// const cardSell_2 = [
//   {
//     color: "card-color_purpure",
//     colorSave: "",
//     name: "Boat Rockerz 333",
//     review: 75,
//     price: 20,
//     save: 0,
//     image: "./img/Top_Picks_1.png",
//   },
//   {
//     color: "card-color_purpure",
//     colorSave: "",
//     name: "Boat kerz 234",
//     review: 80,
//     price: 50,
//     save: 0,
//     image: "./img/Top_Picks_2.png",
//   },
//   {
//     color: "card-color_purpure",
//     colorSave: "card-color_blu",
//     name: "Boat Rockerz 323",
//     review: 50,
//     price: 20,
//     save: 60,
//     image: "./img/Top_Picks_3.png",
//   },
//   {
//     color: "card-color_purpure",
//     colorSave: "",
//     name: "Boat Rockerz 333",
//     review: 75,
//     price: 20,
//     save: 0,
//     image: "./img/Top_Picks_1.png",
//   },
//   {
//     color: "card-color_purpure",
//     colorSave: "",
//     name: "Boat kerz 234",
//     review: 80,
//     price: 50,
//     save: 0,
//     image: "./img/Top_Picks_2.png",
//   },
//   {
//     color: "card-color_purpure",
//     colorSave: "card-color_blu",
//     name: "Boat Rockerz 323",
//     review: 50,
//     price: 20,
//     save: 60,
//     image: "./img/Top_Picks_3.png",
//   },
// ];


// export function gidrationTemplate_2(array, wrapperString) {
//   let cardsArray = [];

//   array.forEach((item) => {
//     cardsArray.push(creatCardSell(item)); //гидрация
//   });

//   const cardsWrapper = document.querySelector(wrapperString);
//   cardsWrapper.innerHTML = "";

//   cardsArray.forEach((item) => {
//     cardsWrapper.appendChild(item);
//   });
// }

// export function switchTabButton_2() { // сделать 1 уни функцию
//   const sellersMenu = document.querySelector(".sellers-menu");
//   sellersMenu.addEventListener("click", (event) => {
//     sellersMenu.querySelectorAll("button").forEach((item) => {
//       item.classList.remove("menu__tab_button_active");
//     });

//     if (event.target.innerText == "Top Picks") {
//       gidrationTemplate_2(cardSell_1, ".sellers-product-wrapper");
//       event.target.classList.add("menu__tab_button_active");
//     } else {
//       gidrationTemplate_2(cardSell_2, ".sellers-product-wrapper");
//       event.target.classList.add("menu__tab_button_active");
//     }
//   });
// } 

// gidrationTemplate_2(cardSell_2, ".sellers-product-wrapper");
// switchTabButton_2();