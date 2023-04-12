const slides = document.querySelectorAll('.advantages__slider__content')
const sliderWrap = document.querySelector('.advantages__slider__wrap')

window.onload = () => {
    console.log(slides.length * slides[1].offsetWidth);
    if (slides.length > 3) {
        sliderWrap.style.width = slides.length * 337 + 'px'
    }

    let offset = 0

    document.querySelector('.advantages__next').addEventListener('click', () => {
        offset = offset + slides[1].offsetWidth;
        if (offset * 2 > sliderWrap.offsetWidth) {
            offset = 0;
        }
        sliderWrap.style.transform = 'translateX' + '(' + -offset + 'px)';
    });

    document.querySelector('.advantages__prev').addEventListener('click', () => {
        offset = offset - slides[1].offsetWidth;
        if (offset < 0) {
            offset = sliderWrap.offsetWidth / 2;
        }
        sliderWrap.style.transform = 'translateX' + '(' + -offset + 'px)';
    });

}

