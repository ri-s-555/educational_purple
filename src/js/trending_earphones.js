// import "../js/utils/function.js";
// import {gidrationTemplate_3, switchTabButton_3} from "./utils/function.js";



import {createMenuTrend} from "./components/menu.js";

export default function createTrendingEarphones() {
  const menu = createMenuTrend (["Earbuds", "Wireless", "Wired"]);

  const elem = document.createElement("div");
  elem.classList.add("container", "trending-earphones");
  elem.innerHTML = `
    <div class="trending-earphones__header">Trending Earphones</div>
    <div class="trending-earphones__menu-wrapper"></div>
    <div class="trending-earphones__product-wrapper"></div>
  `;


  const menuWrapper = elem.querySelector(".trending-earphones__menu-wrapper").appendChild(menu);

  return elem;
}

// import createMenu from "./components/menu.js";

// export default function createTrendingEarphones() {
//   const menu = createMenu (["Earbuds", "Wireless", "Wired"]);

//   const elem = document.createElement("div");
//   elem.classList.add("container", "trending-earphones");
//   elem.innerHTML = `
//     <div class="trending-earphones__header">Trending Earphones</div>
//     <div class="trending-earphones__menu-wrapper"></div>
//     <div class="trending-earphones__product-wrapper"></div>
//   `;


//   const menuWrapper = elem.querySelector(".trending-earphones__menu-wrapper").appendChild(menu);

//   return elem;
// }


// gidrationTemplate_3(cardTrend_3, ".trending-earphones__product-wrapper");
// switchTabButton_3();