document.addEventListener('DOMContentLoaded', (event) => {
    // Language toggle functionality
    const langFr = document.querySelector('.lang-fr');
    const langEn = document.querySelector('.lang-en');

    const toggleActiveClass = (elementToAdd, elementToRemove) => {
        console.log('Click');
        elementToAdd.classList.add('active');
        elementToRemove.classList.remove('active');
    };

    langFr.addEventListener('click', () => toggleActiveClass(langFr, langEn));
    langEn.addEventListener('click', () => toggleActiveClass(langEn, langFr));
});
