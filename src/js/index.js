//hamburger menu

const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open')
  nav.classList.toggle('show-nav')
})

//observer info section

const infoItems = document.querySelectorAll('.info-item');

const optionInfo = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px"
}

const observerInfo = new IntersectionObserver((entries, observerInfo) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show-info', entry.isIntersecting)
    if (entry.isIntersecting) observerInfo.unobserve(entry.target)
  })
}, optionInfo)

infoItems.forEach((item) => {
  observerInfo.observe(item)
})