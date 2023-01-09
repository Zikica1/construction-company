//hamburger menu

const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open')
  nav.classList.toggle('show-nav')
})