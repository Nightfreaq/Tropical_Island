
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

  navAnimation ();
}

const navAnimation = () => {

  let = delayTime = 0;

  navLinks.forEach(link => {
    link.classList.toggle('links-animation')
    link.style.animationDelay = '.' + delayTime + 's'
    delayTime++

    if(link.classList.contains('links-animation')){
      link.classList.remove('links-animation')
    }
  })

}

bars.addEventListener('click', handleNav)
