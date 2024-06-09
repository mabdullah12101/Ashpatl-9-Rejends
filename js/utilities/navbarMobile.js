document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.btn-menu');
    const closeBtn = document.querySelector('.close-btn');
    const navMobile = document.querySelector('.nav-mobile');

    btnMenu.addEventListener('click', () => {
        navMobile.classList.add('nav-mobile-show');
    });

    closeBtn.addEventListener('click', () => {
        navMobile.classList.remove('nav-mobile-show');
    });
})