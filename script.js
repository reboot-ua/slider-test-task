const slidesData = [
    {
        image: 'images/image_1.png',
        price: '$1,000,000',
        addressLine1: '82 VICTORY LANE',
        addressLine2: 'WESTFORD, MA',
        bed: 2,
        bath: 2,
        area: '800'
    },
    {
        image: 'images/image_1.png',
        price: '$950,000',
        addressLine1: '10 MAPLE DRIVE',
        addressLine2: 'CAMBRIDGE, MA',
        bed: 3,
        bath: 2,
        area: '1,800'
    },
    {
        image: 'images/image_1.png',
        price: '$875,000',
        addressLine1: '5 LAKEVIEW ROAD',
        addressLine2: 'CONCORD, MA',
        bed: 4,
        bath: 3,
        area: '22,400'
    },
    {
        image: 'images/image_1.png',
        price: '$1,200,000',
        addressLine1: '99 HIGHLAND AVE',
        addressLine2: 'BOSTON, MA',
        bed: 5,
        bath: 4,
        area: '3,100'
    },
    {
        image: 'images/image_1.png',
        price: '$800,000',
        addressLine1: '99 HellWay AVE',
        addressLine2: 'BOSTON, MA',
        bed: 5,
        bath: 9,
        area: '13,100'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    slidesData.forEach(data => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
      <div class="property-card">
        <img class="property-image" src="${data.image}" alt="Slide Image" />
        <div class="property-details">
          <div class="left-block">
            <div class="property-price">${data.price}</div>
            <div class="property-address">${data.addressLine1}</div>
            <div class="property-address-second">${data.addressLine2}</div>
          </div>
          <div class="right-block">
            <div class="center">
              <div class="detail"><div class="value">${data.bed}</div><div class="label">BED</div></div>
              <div class="divider"></div>
              <div class="detail"><div class="value">${data.bath}</div><div class="label">BATH</div></div>
              <div class="divider"></div>
              <div class="detail"><div class="value">${data.area}</div><div class="label">SQ FT</div></div>
            </div>
            <div class="right">
              <div class="view-details-btn">VIEW DETAILS ></div>
            </div>
          </div>
        </div>
      </div>
    `;
        swiperWrapper.appendChild(slide);
    });

    const propertiesSwiper = new Swiper('.properties-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        autoplay: {
            delay:3000,
        },
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
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

    document.querySelector('.swiper-button-prev-custom')
        .addEventListener('click', () => propertiesSwiper.slidePrev());
    document.querySelector('.swiper-button-next-custom')
        .addEventListener('click', () => propertiesSwiper.slideNext());

});