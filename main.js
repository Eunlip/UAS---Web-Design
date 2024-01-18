'use strict';

const backToTop = document.querySelector('.back-to-top');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  console.log(window.scrollY);
  if (window.scrollY > 1225) {
    backToTop.style.opacity = 1;
    backToTop.classList.remove('animate__animated');
    backToTop.classList.remove('animate__backOutRight');
    backToTop.classList.add('animate__animated');
    backToTop.classList.add('animate__backInRight');
  } else {
    if (currentScrollPosition < lastScrollPosition) {
      backToTop.style.opacity = 0;
      backToTop.classList.add('animate__animated');
      backToTop.classList.add('animate__backOutRight');
    }
  }

  lastScrollPosition = currentScrollPosition;
});
