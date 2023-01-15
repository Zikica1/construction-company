//hamburger menu

const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open')
  nav.classList.toggle('show-nav')
})

//observer home

const infoItems = document.querySelectorAll('.info-item');
const experienceItems = document.querySelectorAll('.experience-anim');
const teamCard = document.querySelectorAll('.team-card')

const optionInfo = {
  threshold: 0.25,
  rootMargin: "0px 0px -50px 0px"
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, optionInfo)

infoItems.forEach((item) => {
  observer.observe(item)
})

experienceItems.forEach((item) => {
  observer.observe(item)
})

teamCard.forEach((item) => {
  observer.observe(item)
})