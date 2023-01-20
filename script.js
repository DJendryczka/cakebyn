const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon')

hamburgerIcon.addEventListener('click', ()=>{
    console.log('klik')
    mobileMenu.classList.toggle('hidden')
})

/* Carousel */
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const timeOut = setTimeout('autoSlide', 1000)
console.log(slides);


document
  .getElementById('carousel-button-next')
  .addEventListener('click', moveToNextSlide);
document
  .getElementById('carousel-button-prev')
  .addEventListener('click', moveToPrevSlide);
  // Next on is to made carousel automaticly go to next slide...
function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}
 function autoSlide(){
    hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
  setTimeout(autoSlide, 5000);
 }
 
function moveToNextSlide() {
    hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
}
function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
  slides[slidePosition].classList.add('carousel-item-visible');
}
window.onload=autoSlide()

