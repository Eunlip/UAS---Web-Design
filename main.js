'use strict';

const navbar = document.querySelector('.container');
const nav_about = document.querySelector('.nav-about');
const nav_reviews = document.querySelector('.nav-reviews');
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > 3340) {
    document.querySelector('.bx-up-arrow-circle').style.opacity = 1;
  } else {
    document.querySelector('.bx-up-arrow-circle').style.opacity = 0;
  }
});
