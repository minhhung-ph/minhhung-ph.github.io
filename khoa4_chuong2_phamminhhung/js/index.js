import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
import * as OnscrollAnimate from "./Onscroll.js";
import * as FeatureboxAnimate from "./FeatureBox.js"
let menu_btn = document.querySelector('.navlink-btn');
OnscrollAnimate.turnNavbarToSticky();
OnscrollAnimate.animateParallax();
window.onscroll = () => {
    OnscrollAnimate.turnNavbarToSticky();
    OnscrollAnimate.animateParallax();
    OnscrollAnimate.showBackToTopBtn();
}
OnscrollAnimate.slideToTop();
FeatureboxAnimate.detectFeatureBox();
$(".counter").countUp({
    time: 1000,
    delay: 10,
});
const swiper1 = new Swiper(".testimonial_swiper", {
    loop: true,
    autoplay: true,
    speed: 1000,
    spacebetween: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 1,
    breakpoints: {
        415: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        821: {
            slidesPerView: 1
        }
    }
});
const swiper2 = new Swiper(".testimonial2_swiper", {
    loop: true,
    autoplay: true,
    speed: 1000,
    spacebetween: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 1,
    breakpoints: {
        415: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        821: {
            slidesPerView: 5
        }
    }
})
menu_btn.addEventListener('click', () => {
    document.querySelector('.navlink-list').classList.toggle('display-navlink');
})