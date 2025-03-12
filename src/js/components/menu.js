


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
// export  function createMenu(tabs) {

    const nav = document.createElement("nav");
    nav.classList.add("sellers-menu");
  //  nav.classList.add(titleArray, menuClass);



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


  // export function createMenuSell(tabs, activeTab) {
  //   const nav = document.createElement("nav");
  //   nav.classList.add("sellers-menu");
  
  //   const ul = document.createElement("ul");
  
  //   tabs.forEach((tab, index) => {
  //     const li = document.createElement("li");
  //     const button = document.createElement("button");
  //     button.classList.add("menu__tab_button");
  //     button.textContent = tab;
  
  //     if (index === activeTab) {
  //       button.classList.add("menu__tab_button_active");
  //     }
  
  //     li.appendChild(button);
  //     ul.appendChild(li);
  //   });
  
  //   nav.appendChild(ul);
  //   return nav;
  // }
  
  export function createMenu(tabs, menuClass) {
    const nav = document.createElement("nav");
    nav.classList.add(menuClass);
  
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
  