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

// observer contact section

const map = document.querySelector('.contact-map')
const cardContact = document.querySelectorAll('.contact-card')
const colLeft = document.querySelectorAll('.col-left')

const option2 = {
  rootMargin: "0px 0px -50px 0px",
  threshold: 0.5
}

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show-map', entry.isIntersecting)
    if (entry.isIntersecting) contactObserver.unobserve(entry.target)
  })
})

contactObserver.observe(map)




const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show-card', entry.isIntersecting)
    if (entry.isIntersecting) cardObserver.unobserve(entry.target)
  })
}, option2)

cardContact.forEach((item) => {
  cardObserver.observe(item)
})

colLeft.forEach((item) => {
  cardObserver.observe(item)
})