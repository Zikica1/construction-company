async function load() {
  const page = await import("./global.js");
  page.render();
}

load()


//Observer project section
const projectItems = document.querySelectorAll('.projectItems');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('reset', entry.isIntersecting)
    if (entry.isIntersecting) projectObserver.unobserve(entry.target)
  })
}, {
  threshold: 0.1,
})

projectItems.forEach((item) => {
  projectObserver.observe(item)
})


const links = document.querySelectorAll('.link');
const project = document.querySelectorAll('.project');

let activeLink = 0;

links.forEach((link, i) => {

  link.addEventListener('click', () => {
    if (activeLink != i) {
      links[activeLink].classList.remove('active');
      link.classList.add('active');
      project[activeLink].classList.remove('active');

      activeLink = i;
      project[i].classList.add('active')
    }
  })
})
