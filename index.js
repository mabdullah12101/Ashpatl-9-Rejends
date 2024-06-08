const headerVideo = document.querySelector('.header-video');
const header = document.querySelector('header');
const main = document.querySelector('main');
const loading = document.querySelector('#loading');

document.addEventListener('DOMContentLoaded', () => {
    headerVideo.addEventListener('canplaythrough', () => {
        loading.classList.add('hidden');
        main.classList.remove('hidden');
        header.classList.remove('hidden');
    })
})