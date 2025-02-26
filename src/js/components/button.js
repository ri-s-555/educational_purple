document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const items = document.querySelectorAll('.item');

    function clearActiveButtonClass() {
        document.querySelectorAll('.search-button').forEach(button => {
            button.classList.remove('search__tab_button_active');
        });
    }

    function getSearchValue() {
        return searchInput.value.toLowerCase();
    }

    function filterItems(searchValue) {
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchValue) && searchValue !== "") {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    function checkForNoMatches(searchValue) {
        const visibleItems = [...items].filter(item => !item.classList.contains('hidden'));
        if (visibleItems.length === 0) {
            console.log('Совпадений нет: ' + searchValue);
        }
    }

    function handleSearchButtonClick(event) {
        clearActiveButtonClass();
        const searchValue = getSearchValue();
        filterItems(searchValue);
        checkForNoMatches(searchValue);
        event.target.classList.add('search__tab_button_active');
    }

    searchButton.addEventListener('click', handleSearchButtonClick);

});
