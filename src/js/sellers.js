import {createMenuSell} from "./components/menu.js";

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
