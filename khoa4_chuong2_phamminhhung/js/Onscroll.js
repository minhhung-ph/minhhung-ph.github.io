const navbar = document.querySelector('.header-nav');
const parallax = document.querySelector('.parallax');
const progress_bar = document.querySelector('.progress-bar');
const progress_bar1 = document.querySelector('.progress-bar1');
const progress_bar2 = document.querySelector('.progress-bar2');
const progress_span = progress_bar.querySelector('span');
const progress_span1 = progress_bar1.querySelector('span');
const progress_span2 = progress_bar2.querySelector('span');
const backToTop_btn = document.querySelector('.backToTop-btn');

function turnNavbarToSticky() {
    if (document.body.scrollTop >= 2) {
        navbar.classList.add('navbar-sticky');
    } else {
        navbar.classList.remove('navbar-sticky');
    }
}

function animateParallax() {
    if (document.body.scrollTop >= 864) {
        progress_bar.style.width = '80%';
        progress_bar1.style.width = '90%';
        progress_bar2.style.width = '70%';
        progress_span.innerText = progress_bar.style.width;
        progress_span1.innerText = progress_bar1.style.width;
        progress_span2.innerText = progress_bar2.style.width;
    }
}

function showBackToTopBtn() {
    if (document.body.scrollTop >= 380) {
        backToTop_btn.classList.add('btn-appear');
    } else {
        backToTop_btn.classList.remove('btn-appear');
    }
}

function slideToTop() {
    backToTop_btn.addEventListener("click", () => {
        console.log('click')
        window.scrollTo({
            top: 5,
            behavior: "smooth"
        });
    })
}
export { turnNavbarToSticky, animateParallax, showBackToTopBtn, slideToTop };