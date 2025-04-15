document.addEventListener('DOMContentLoaded', function() {
    const propertiesSwiper = new Swiper('.properties-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        autoplay: {
            delay:3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
    const prevBtn = document.querySelector('.swiper-button-prev-custom');
    const nextBtn = document.querySelector('.swiper-button-next-custom');

    prevBtn.addEventListener('click', () => propertiesSwiper.slidePrev());
    nextBtn.addEventListener('click', () => propertiesSwiper.slideNext());

});