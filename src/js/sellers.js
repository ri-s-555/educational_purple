import createMenu from "./components/menu.js";

export default function createSellers() {
  const menu = createMenu(["Top Picks", "Watches"]);

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

// export default function createSellers () {
//     const menu = createMenu (["Top Picks", "Watches"]) //написать функцию меню в отдельном файле

//     const elem = document.createElement ("div")
//     elem.classList.add("container", "sellers");
//     elem.innerHTML = `
//             <div class="sellers-header">Top Sellers</div>
//         ${menu.innerHTML}
//         <div class="sellers-product-wrapper">
//             <!-- <nav class="sellers-product__next">
//                 <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M39.5466 30.1067L28.24 18.8C27.9921 18.5501 27.6971 18.3517 27.3722 18.2163C27.0472 18.0809 26.6987 18.0112 26.3466 18.0112C25.9946 18.0112 25.6461 18.0809 25.3211 18.2163C24.9961 18.3517 24.7012 18.5501 24.4533 18.8C23.9566 19.2997 23.6779 19.9755 23.6779 20.68C23.6779 21.3845 23.9566 22.0604 24.4533 22.56L33.8933 32L24.4533 41.44C23.9566 41.9397 23.6779 42.6155 23.6779 43.32C23.6779 44.0245 23.9566 44.7004 24.4533 45.2C24.7025 45.4472 24.998 45.6427 25.3229 45.7754C25.6478 45.9081 25.9957 45.9754 26.3466 45.9734C26.6976 45.9754 27.0455 45.9081 27.3704 45.7754C27.6953 45.6427 27.9908 45.4472 28.24 45.2L39.5466 33.8934C39.7966 33.6455 39.995 33.3505 40.1303 33.0256C40.2657 32.7006 40.3354 32.3521 40.3354 32C40.3354 31.648 40.2657 31.2994 40.1303 30.9745C39.995 30.6495 39.7966 30.3546 39.5466 30.1067Z"
//                         fill="#10B981" />
//                 </svg>

//             </nav> -->
//         </div>
//     `
//     return elem
// }

// <nav class="sellers-menu">
//             <ul>
//                 <li><button class="sellers-menu__tab-button">Top Picks</button></li>
//                 <li><button class="sellers-menu__tab-button">Watches</button></li>
//             </ul>
//         </nav>