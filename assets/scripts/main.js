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
    slidesPerView: 2.6
});