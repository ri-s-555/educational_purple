import { gidrationTemplate, switchTabButton_2 } from "./utils/function.js";

import { createMenuSell } from "./components/menu.js";
// import { creatCardSell } from "./components/card.js";

const topPicksArray = [
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
const watchesArray = [
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

export default function createSellers() {
  const menu = createMenuSell(["Top Picks", "Watches"]);

  const elem = document.createElement("div");
  elem.classList.add("container", "sellers");
  elem.innerHTML = `
        <div class="sellers-header">Top Sellers</div>
        <div class="sellers-menu-wrapper"></div>
        `;

  elem.querySelector(".sellers-menu-wrapper").appendChild(menu);

  elem.appendChild(gidrationTemplate(watchesArray, "sellers-product-wrapper"));
  switchTabButton_2([topPicksArray, watchesArray,], ["Top Picks", "Watches"], elem, "sellers-product-wrapper");

  return elem;
}


