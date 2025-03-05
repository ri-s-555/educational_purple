import createHead from "./head.js";
import createFeaturedProducts from "./featured_products.js";
import createSellers from "./sellers.js";
import createTrendingEarphones from "./trending_earphones.js";
import createNewLaunches from "./new_launches.js";
import createFooter from "./footer.js";

import '../scss/index.scss'


const bodyWrapper = document.querySelector("body");
// bodyWrapper.appendChild(createHead ());
// bodyWrapper.appendChild(createFeaturedProducts())
// bodyWrapper.appendChild(createSellers())
// bodyWrapper.appendChild(createTrendingEarphones())
// bodyWrapper.appendChild(createNewLaunches())
bodyWrapper.appendChild(createFooter())
