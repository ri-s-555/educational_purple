
export function creatCard ({color, price, name, review }) {
    const elem = document.createElement ("div")
    elem.innerHTML = `
    <div class="sellers-product__card">
                <div class="sellers-product__card-pick ${color}">
                    <div class="sellers-product__card-pick_img">
                        <img class="sellers-product__card-pick_img-product" src="${image}"
                            alt="${name}">
                    </div>
                    <div class="sellers-product__card-pick_descr">
                        <div class="sellers-product__card-pick_descr__name">${name}</div>
                        <div class="sellers-product__card-pick_descr__reviews">
                            <div class="sellers-product__card-pick_descr__reviews-svg">
                            
                            
<--                            ${getStarRating(review)} -->
                            </div>
                            <div class="sellers-product__card-pick_descr__reviews-text">${review} Reviews</div>
                        </div>
                        <div class="sellers-product__card-pick_descr__price">${price} $</div>
                    </div>
                </div>
                <button class="sellers-product__card-button">Add to cart</button>
            </div>
    `
    return elem
}

