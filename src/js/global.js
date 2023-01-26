export function render() {
  //scrollToTop btn
  const scrollTopBtn = document.querySelector('.scrollToTop-btn')

  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('active', window.scrollY > 500)
  })

  scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
  //hamburger menu

  const hamburgerBtn = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open')
    nav.classList.toggle('show-nav')
  })
}

