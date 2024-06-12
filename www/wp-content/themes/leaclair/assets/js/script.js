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
    
    // Section toggle functionality
    const titleProtagonist = document.querySelector('.title-protagonist');
    const titleCite = document.querySelector('.title-cite');
    const sectionInfosFirst = document.querySelector('.section-infos--first');
    const sectionInfosSecond = document.querySelector('.section-infos--second');
    const detailProtagonist = document.querySelector('.detail-protagonist');
    const detailCite = document.querySelector('.detail-cite');

    const toggleSection = (sectionToToggle, detailToToggle, sectionToRemove, detailToRemove) => {
        sectionToToggle.classList.toggle('active');
        detailToToggle.classList.toggle('active');
        sectionToRemove.classList.toggle('active');
        detailToRemove.classList.toggle('active');
    };

    titleProtagonist.addEventListener('click', () => {
        toggleSection(sectionInfosSecond, detailProtagonist, sectionInfosFirst, detailCite);
    });

    titleCite.addEventListener('click', () => {
        toggleSection(sectionInfosFirst, detailCite, sectionInfosSecond, detailProtagonist);
    });

});
