const navbar = document.querySelector('.container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.boxShadow = '0px 0px 8px 0px rgba(0, 0, 0, 0.15)';
    navbar.style.backgroundColor = '#fff';
    navbar.style.transition = 'all .3s ease-out';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.transition = 'all .3s ease-out';
  }
});
