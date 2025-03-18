export default function createHead() {
  const elemHead = document.createElement("div");
  elemHead.classList.add("container", "head");
  elemHead.innerHTML = `
     <div class="container head">
        <div class="head__logo"> <span> Shop</span>per</div>
        <div class="head__buttons">
                <div class="head__buttons__search">
                    <input class="head__buttons__search__input" type="text" placeholder="Search Items">
                    <button class="head__buttons__search__button">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>

                <button class="head__buttons__items-added">
                    <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.25002 7.25V7.13012C7.25002 4.96238 8.71763 3.06964 10.8171 2.52979C11.5931 2.33024 12.407 2.33024 13.183 2.52979C15.2824 3.06964 16.75 4.96238 16.75 7.13013V7.25H18.2511C18.8224 7.25 19.3073 7.66898 19.3901 8.23423L19.6088 9.72668C20.0393 12.6651 20.0393 15.6507 19.6088 18.5891C19.4008 20.0081 18.2565 21.1052 16.83 21.2531L16.2011 21.3183C13.4079 21.608 10.5921 21.608 7.79888 21.3183L7.17001 21.2531C5.74347 21.1052 4.59918 20.0081 4.39127 18.5891C3.96072 15.6507 3.96072 12.6651 4.39127 9.72668L4.60994 8.23423C4.69276 7.66898 5.17761 7.25 5.74889 7.25H7.25002ZM11.1906 3.98252C11.7216 3.84599 12.2784 3.84599 12.8094 3.98252C14.2459 4.3519 15.25 5.64693 15.25 7.13013V7.25H8.75002V7.13012C8.75002 5.64693 9.75417 4.3519 11.1906 3.98252ZM7.25002 8.75V11C7.25002 11.4142 7.5858 11.75 8.00002 11.75C8.41423 11.75 8.75002 11.4142 8.75002 11V8.75H15.25V11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11V8.75H17.9496L18.1246 9.94414C18.534 12.7384 18.534 15.5774 18.1246 18.3717C18.0162 19.1118 17.4193 19.684 16.6753 19.7611L16.0464 19.8264C13.356 20.1054 10.644 20.1054 7.95361 19.8264L7.32474 19.7611C6.5807 19.684 5.98386 19.1118 5.87542 18.3717C5.46601 15.5774 5.46601 12.7384 5.87542 9.94414L6.05039 8.75H7.25002Z"
                                fill="var(--primary-color)" />
                    </svg></div>
                    <div class="head__buttons__items-added__text"> 0 Items Added</div>
                </button>

                <button class="head__buttons__login">
                    <div class="head__buttons__login__img"> <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 1.75C9.37665 1.75 7.25 3.87665 7.25 6.5C7.25 9.12335 9.37665 11.25 12 11.25C14.6234 11.25 16.75 9.12335 16.75 6.5C16.75 3.87665 14.6234 1.75 12 1.75ZM8.75 6.5C8.75 4.70507 10.2051 3.25 12 3.25C13.7949 3.25 15.25 4.70507 15.25 6.5C15.25 8.29493 13.7949 9.75 12 9.75C10.2051 9.75 8.75 8.29493 8.75 6.5Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9 12.75C6.37665 12.75 4.25 14.8766 4.25 17.5C4.25 20.1234 6.37665 22.25 9 22.25H15C17.6234 22.25 19.75 20.1234 19.75 17.5C19.75 14.8766 17.6234 12.75 15 12.75H9ZM5.75 17.5C5.75 15.7051 7.20507 14.25 9 14.25H15C16.7949 14.25 18.25 15.7051 18.25 17.5C18.25 19.2949 16.7949 20.75 15 20.75H9C7.20507 20.75 5.75 19.2949 5.75 17.5Z"
                                fill="white" />
                    </svg></div>
                    <div class="head__buttons__login__text"> Login or Sign Up </div>
                </button>

            </div>
        </div>
</div>
    `;
  return elemHead;
}
