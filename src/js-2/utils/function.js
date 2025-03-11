import { creatCardSell } from "../components/card";

export function gidrationTemplate(array, wrapperString) {
  let cardsArray = [];

  array.forEach((item) => {
    cardsArray.push(creatCardSell(item)); //гидрация
  });

  const cardsWrapper = document.createElement("div");
  cardsWrapper.classList.add(wrapperString);

  cardsArray.forEach((item) => {
    cardsWrapper.appendChild(item);
  });

  return cardsWrapper;
}

export function switchTabButton_2(
  dataArray,
  titleArray,
  blockSection,
  wrapperString
) {
  const sellersMenu = blockSection.querySelector(".sellers-menu"); // сделай как тут let wrapper = blockSection.querySelector(`.${wrapperString}`);
  sellersMenu.addEventListener("click", (event) => {
    sellersMenu.querySelectorAll("button").forEach((item) => {
      item.classList.remove("menu__tab_button_active");
    });

    // найти cardsWrapper и очистить его, постле применить gidrationTemplate
    let wrapper = blockSection.querySelector(`.${wrapperString}`);
    if (wrapper) {
      wrapper.remove(); // Удаляет и сам элемент wrapper со страницы
    }


    titleArray.forEach((title, index) => {

      if (event.target.innerText == title) {
        blockSection.appendChild(
          gidrationTemplate(dataArray[index], wrapperString)
        );
        event.target.classList.add("menu__tab_button_active");
      }
    });
  });
}


// идея по поводу оптимизации ревью
// ${getStarRating(review)} вместо свг

// function getStarRating(review) {
//     const filledStar = `
//       <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
//            xmlns="http://www.w3.org/2000/svg">
//         <path d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
//               fill="#C00C00" />
//       </svg>`;

//     const emptyStar = `
//       <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
//            xmlns="http://www.w3.org/2000/svg">
//         <path d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
//               stroke="#C00C00" fill="none"/>
//       </svg>`;

//     return filledStar.repeat(review) + emptyStar.repeat(5 - review);
//   }
