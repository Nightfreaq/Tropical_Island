const nav = document.querySelector(".nav");
const bars = document.querySelector(".burger-btn");
const navLinks = document.querySelectorAll(".nav__item");

const btnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const navShow = () => {
	nav.classList.toggle("nav--active");

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	navAnimation();
};

const navAnimation = () => {
	let = delayTime = 0;

	navLinks.forEach((link) => {
		link.classList.toggle("links-animation");
		link.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

bars.addEventListener("click", navShow);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach((section) => {

    if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
      btnBars.classList.add('black-bars-color')
    } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
      btnBars.classList.remove('black-bars-color')
    }
  });
};

window.addEventListener('scroll', handleObserver)
