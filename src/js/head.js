export default function createHead () {

    const elemHead = document.createElement ("div")
    elemHead.classList.add("container", "head");
    elemHead.innerHTML = `
    <div class="container header">
        <div class="header-logo"> <span> Shop</span>per</div>
        <div class="header-buttons">
                <div class="search">
                    <input class="search-input" type="text" placeholder="Search Items">
                    <button class="search-button">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.9935 17.7563L15.0219 13.7847C16.022 12.5177 16.6249 10.9226 16.6249 9.1875C16.6249 5.08638 13.2885 1.75 9.18738 1.75C5.08625 1.75 1.74988 5.08638 1.74988 9.1875C1.74988 13.2886 5.08625 16.625 9.18738 16.625C10.9234 16.625 12.5176 16.023 13.7846 15.022L17.7563 18.9937C17.9269 19.1643 18.1509 19.25 18.3749 19.25C18.5989 19.25 18.8229 19.1643 18.9935 18.9937C19.3356 18.6515 19.3356 18.0985 18.9935 17.7563ZM3.49988 9.1875C3.49988 6.0515 6.05138 3.5 9.18738 3.5C12.3234 3.5 14.8749 6.0515 14.8749 9.1875C14.8749 12.3235 12.3234 14.875 9.18738 14.875C6.05138 14.875 3.49988 12.3235 3.49988 9.1875Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>

                <button class="items-added-button">
                    <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.25002 7.25V7.13012C7.25002 4.96238 8.71763 3.06964 10.8171 2.52979C11.5931 2.33024 12.407 2.33024 13.183 2.52979C15.2824 3.06964 16.75 4.96238 16.75 7.13013V7.25H18.2511C18.8224 7.25 19.3073 7.66898 19.3901 8.23423L19.6088 9.72668C20.0393 12.6651 20.0393 15.6507 19.6088 18.5891C19.4008 20.0081 18.2565 21.1052 16.83 21.2531L16.2011 21.3183C13.4079 21.608 10.5921 21.608 7.79888 21.3183L7.17001 21.2531C5.74347 21.1052 4.59918 20.0081 4.39127 18.5891C3.96072 15.6507 3.96072 12.6651 4.39127 9.72668L4.60994 8.23423C4.69276 7.66898 5.17761 7.25 5.74889 7.25H7.25002ZM11.1906 3.98252C11.7216 3.84599 12.2784 3.84599 12.8094 3.98252C14.2459 4.3519 15.25 5.64693 15.25 7.13013V7.25H8.75002V7.13012C8.75002 5.64693 9.75417 4.3519 11.1906 3.98252ZM7.25002 8.75V11C7.25002 11.4142 7.5858 11.75 8.00002 11.75C8.41423 11.75 8.75002 11.4142 8.75002 11V8.75H15.25V11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11V8.75H17.9496L18.1246 9.94414C18.534 12.7384 18.534 15.5774 18.1246 18.3717C18.0162 19.1118 17.4193 19.684 16.6753 19.7611L16.0464 19.8264C13.356 20.1054 10.644 20.1054 7.95361 19.8264L7.32474 19.7611C6.5807 19.684 5.98386 19.1118 5.87542 18.3717C5.46601 15.5774 5.46601 12.7384 5.87542 9.94414L6.05039 8.75H7.25002Z"
                                fill="var(--primary-color)" />
                    </svg></div>
                    <div class="items-added-button-text"> 0 Items Added</div>
                </button>

                <button class="login-button">
                    <div class="login-button-img"> <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 1.75C9.37665 1.75 7.25 3.87665 7.25 6.5C7.25 9.12335 9.37665 11.25 12 11.25C14.6234 11.25 16.75 9.12335 16.75 6.5C16.75 3.87665 14.6234 1.75 12 1.75ZM8.75 6.5C8.75 4.70507 10.2051 3.25 12 3.25C13.7949 3.25 15.25 4.70507 15.25 6.5C15.25 8.29493 13.7949 9.75 12 9.75C10.2051 9.75 8.75 8.29493 8.75 6.5Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9 12.75C6.37665 12.75 4.25 14.8766 4.25 17.5C4.25 20.1234 6.37665 22.25 9 22.25H15C17.6234 22.25 19.75 20.1234 19.75 17.5C19.75 14.8766 17.6234 12.75 15 12.75H9ZM5.75 17.5C5.75 15.7051 7.20507 14.25 9 14.25H15C16.7949 14.25 18.25 15.7051 18.25 17.5C18.25 19.2949 16.7949 20.75 15 20.75H9C7.20507 20.75 5.75 19.2949 5.75 17.5Z"
                                fill="white" />
                    </svg></div>
                    <div class="login-button-text"> Login or Sign Up </div>
                </button>

            </div>
        </div>
        <nav class="container menu">
            <ul>
                <li class="features">Features</li>
                <li class="products">Products</li>
                <li class="blog">Blog</li>
                <li class="about">About</li>
            </ul>
        </nav>
        <div class="container latest-product">
            <div class="latest-product__descr">
                <h1 class="latest-product__descr_title">Discover Our<br>Latest Products</h1>
                <p class="latest-product__descr_text">Lorem ipsum is a placeholder text commonly used to demonstrate
                    the visual form of a product</p>
                <button class="button-add-to-card">Buy Now</button>
                <div class="latest-product__descr_reviews">
                    <div class="latest-product__descr_reviews__img">
                        <img class="latest-product__descr_reviews__img-img" src="./img/Reviews_1.png" alt="reviews_1">
                        <img class="latest-product__descr_reviews__img-img pos-rel-left" src="./img/Reviews_2.png"
                            alt="reviews_2">
                        <img class="latest-product__descr_reviews__img-img pos-rel-left" src="./img/Reviews_3.png"
                            alt="reviews_3">
                        <img class="latest-product__descr_reviews__img-img pos-rel-left" src="./img/Reviews_4.png"
                            alt="reviews_4">
                    </div>
                    <div class="latest-product__descr_reviews__text">15k Well <br>Reviews</div>

                </div>
            </div>
            <div class="latest-product__img">
                <div class="latest-product__img-play-video">
                    <img class="latest-product__img-play-video-icon" src="./img/Play Video.png" alt="play-video-img">
                    <p class="latest-product__img-play-video-text">Play Video</p>
                </div>
                <div class="latest-product__img-product">
                    <svg class="star_left" width="53" height="53" viewBox="0 0 53 53" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.5 0L33.6574 19.3426L53 26.5L33.6574 33.6574L26.5 53L19.3426 33.6574L0 26.5L19.3426 19.3426L26.5 0Z"
                            fill="#FFD600" />
                    </svg>
                    <svg class="latest-product__img-product-background" width="272" height="477" viewBox="0 0 272 477"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="272" height="477" rx="136" fill="#ECFEF4" />
                    </svg>
                    <img class="latest-product__img-product-product" src="./img/product_Red Beats Ml9c2zm:a.png"
                        width="270" height="299" alt="Red Beats Ml9c2zm/a">
                    <svg class="star_right" width="53" height="53" viewBox="0 0 53 53" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.5 0L33.6574 19.3426L53 26.5L33.6574 33.6574L26.5 53L19.3426 33.6574L0 26.5L19.3426 19.3426L26.5 0Z"
                            fill="#FFD600" />
                    </svg>
                </div>
            </div>
        </div>
    `
    return elemHead
}

