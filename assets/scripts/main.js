// ACCORDION
document.querySelector('.accordions').addEventListener('click', function (e) {

    if (e.target.classList.contains('accordion__title')) {
        const acc = document.querySelectorAll('.accordion');
        console.log(acc)
        acc.forEach(x => x.classList.remove('active'));
        e.target.parentElement.classList.add('active');
    }
})
// SLIDER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 425px
        500: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 2.6
        },
        1920: {
            slidesPerView: 4
        },
    },
});