document.addEventListener('DOMContentLoaded', function (){
  const nav = document.querySelector('.nav')

  function addShadow(){

    if(window.scrollY >=300){
      nav.classList.add('bg-shadow')
    } else{
      nav.classList.remove('bg-shadow')
    }
  }

  window.addEventListener('scroll', addShadow)
})

const navbar = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
  if(navbar.classList.contains('show')){
    navbar.classList.remove('show')}
})