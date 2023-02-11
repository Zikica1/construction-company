async function load() {
  const page = await import('./global.js');
  page.render()
}

load()

const imgAbout = document.querySelectorAll('.img-about')

const aboutObserverImg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('clip-img-show', entry.isIntersecting)
    if (entry.isIntersecting) aboutObserverImg.unobserve(entry.target)
  })
}, {
  rootMargin: "0px 0px -150px 0px",
})

imgAbout.forEach((imgAbout) => {
  aboutObserverImg.observe(imgAbout)
})

const aboutItems = document.querySelectorAll('.about-inner-content-text')

const aboutObserverItem = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('about-fadeIn-show', entry.isIntersecting)
    if (entry.isIntersecting) aboutObserverItem.unobserve(entry.target)
  })
}, {
  threshold: 0.5,
})

aboutItems.forEach((aboutItems) => {
  aboutObserverItem.observe(aboutItems)
})

const aboutClientsText = document.querySelector('.about-clients-inner-content')

const aboutObserverClients = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('about-client-show', entry.isIntersecting)
    if (entry.isIntersecting) aboutObserverClients.unobserve(entry.target)
  })
})

aboutObserverClients.observe(aboutClientsText)

const widgetImg = document.querySelectorAll('.widget-img');

const aboutObserverWidget = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('about-widget-show', entry.isIntersecting)
    if (entry.isIntersecting) aboutObserverWidget.unobserve(entry.target)
  })
}, {
  rootMargin: '0px 0px -100px 0px',
})

widgetImg.forEach((widgetImg) => {
  aboutObserverWidget.observe(widgetImg)
})