document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel')

    carousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll('.slide')
        const slidePagination = carousel.querySelector('.slide-pagination')
        const slideBtnPrev = carousel.querySelector('.slide-btn-prev')
        const slideBtnNext = carousel.querySelector('.slide-btn-next')

        let prevIndex;
        let currentIndex;

        if (carousel.classList.contains('carousel-left')) {
            prevIndex = slides.length - 1;
            currentIndex = slides.length - 1;
        } else {
            prevIndex = 0;
            currentIndex = 0;
        }

        const init = () => {
            slides[currentIndex].classList.add('slide-active')
            updateDisableSlideBtn()
            renderSlidePaginationBtn()
        }


        const updateSlide = () => {
            slides[prevIndex].classList.remove('slide-active')
            slides[currentIndex].classList.add('slide-active')

            updateDisableSlideBtn()
            updateDisableSlideBtnPagination()
        }

        const updateDisableSlideBtn = () => {
            if (currentIndex === 0) {
                slideBtnPrev.setAttribute('disabled', true)
            } else {
                slideBtnPrev.removeAttribute('disabled')
            }

            if (currentIndex === slides.length - 1) {
                slideBtnNext.setAttribute('disabled', true)
            } else {
                slideBtnNext.removeAttribute('disabled')
            }
        }

        const renderSlidePaginationBtn = () => {
            for (let index = 0; index < slides.length; index++) {
                const slidePaginationBtn = document.createElement('button')
                slidePaginationBtn.classList.add('slide-btn-pagination')

                if (currentIndex === index) {
                    slidePaginationBtn.classList.add('slide-btn-pagination-active')
                    slidePaginationBtn.setAttribute('disabled', true)
                }

                slidePagination.insertBefore(slidePaginationBtn, slideBtnNext)

                slidePaginationBtn.addEventListener('click', () => {
                    prevIndex = currentIndex;
                    currentIndex = index;
                    updateSlide()
                })
            }
        }

        const updateDisableSlideBtnPagination = () => {
            const slideBtnPaginations = carousel.querySelectorAll('.slide-btn-pagination')

            slideBtnPaginations[prevIndex].classList.remove('slide-btn-pagination-active')
            slideBtnPaginations[prevIndex].removeAttribute('disabled')
            slideBtnPaginations[currentIndex].setAttribute('disabled', true)
            slideBtnPaginations[currentIndex].classList.add('slide-btn-pagination-active')
        }

        init()

        slideBtnNext.addEventListener('click', () => {
            prevIndex = currentIndex;
            currentIndex++;
            updateSlide()
        })

        slideBtnPrev.addEventListener('click', () => {
            prevIndex = currentIndex;
            currentIndex--;
            updateSlide()
        })
    })
})