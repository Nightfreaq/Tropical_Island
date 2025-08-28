
const nav = document.querySelector('.nav')
const bars = document.querySelector('.burger-btn')
const navLinks = document.querySelectorAll('.nav__item')

const handleNav = () => {
  nav.classList.toggle('nav--active')

  navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
      nav.classList.remove('nav--active')
    })
  })
}

bars.addEventListener('click', handleNav)
