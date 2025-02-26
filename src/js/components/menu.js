


// export default function createMenu(tabs) {
//   const nav = document.createElement("nav");
//   nav.classList.add("sellers-menu", "trending-earphones__menu");

//   const ul = document.createElement("ul");

//   tabs.forEach((tab) => {
//     const li = document.createElement("li");
//     const button = document.createElement("button");
//     button.classList.add("menu__tab_button");
//     button.textContent = tab;
//     li.appendChild(button);
//     ul.appendChild(li);
//   });

//   nav.appendChild(ul);
//   return nav;
// }


  export  function createMenuSell(tabs) {

    const nav = document.createElement("nav");
    nav.classList.add("sellers-menu");

    const ul = document.createElement("ul");

    tabs.forEach((tab) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.classList.add("menu__tab_button");
      button.textContent = tab;
      li.appendChild(button);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
  }


  export  function createMenuTrend(tabs) {
    const nav = document.createElement("nav");
    nav.classList.add("trending-earphones__menu");

    const ul = document.createElement("ul");

    tabs.forEach((tab) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.classList.add("menu__tab_button");
      button.textContent = tab;
      li.appendChild(button);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
  }



