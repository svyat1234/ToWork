const slides = document.querySelectorAll('.advantages__slider__content')
const sliderWrap = document.querySelector('.advantages__slider__wrap')
const bullets = document.querySelector('.advantages__bullets')

window.onload = () => {
    if (slides.length > 3) {
        sliderWrap.style.width = slides.length * 337 + 'px'
    }
    
    slides.forEach(slide => {
        bullets.innerHTML += `<div class="advantages__bullet"></div>`
    })
    
    const bullet = document.querySelectorAll('.advantages__bullet')
    bullet.forEach((bullet, id) => {
        if(id > slides.length - 3 ) {
            bullet.remove()
        }
    })

    let count = 0
    let offset = 0
    const bulletCount = () => {
        bullet[count].classList.add('advantages__bullet-active')
    }
    const bulletRemove = () => {
        bullet.forEach(bullet => {
            bullet.classList.remove('advantages__bullet-active')
        })
    }

    bulletCount()
    
    document.querySelector('.advantages__next').addEventListener('click', () => {
        bulletRemove()
        count++
        bulletCount()
        offset += slides[1].offsetWidth;
        if (count > slides.length - 3) {
            count = 0
            bulletCount()
            offset = 0
        }
        sliderWrap.style.transform = 'translateX' + '(' + -offset + 'px)';

    });


    document.querySelector('.advantages__prev').addEventListener('click', () => {
        bulletRemove()
        count--
        offset -= slides[1].offsetWidth;
        if (count < 0) {
            count = slides.length - 3
            bulletCount()
            offset = sliderWrap.offsetWidth - (slides[1].offsetWidth * 3);
        } else {
            bulletCount()
        }
        sliderWrap.style.transform = 'translateX' + '(' + -offset + 'px)';
    });

}

