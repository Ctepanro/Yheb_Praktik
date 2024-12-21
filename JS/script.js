var nav = document.querySelector('.menu-menu');
var menuToggle = document.querySelector('.hamburger');
var line = document.querySelector('.line')

menuToggle.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('show-menu');
  menuToggle.classList.toggle('active');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 560 && nav.classList.contains('show-menu')) {
    nav.classList.remove('show-menu');
    menuToggle.classList.remove('active');
  }
});



const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide(){

  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide(){
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider(){
  slides.forEach((slide, index) =>{
    if (index === slideIndex){
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();