
document.addEventListener('DOMContentLoaded', () => {
    const headerVideo = document.querySelector('.header-video');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const loading = document.querySelector('#loading');

    headerVideo.addEventListener('canplaythrough', () => {
        loading.classList.add('hidden');
        main.classList.remove('hidden');
        header.classList.remove('hidden');
    })

    // Kondisi jika selama 20 detik masih blm tampil kontennya maka refresh halaman
    setTimeout(() => {
        if (main.classList.contains('hidden')) {
            location.reload()
        }
    }, [20000])
})