function hideSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
    sidebar.style.display = 'none'; // Hide the sidebar
}

let slideIndex = 1;

function showSlides(n) {
    
  let slides = document.getElementsByClassName('slides')[0];
  let slideWidth = slides.offsetWidth;
  let currentSlide = slideIndex - 1;

  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  if (n === -1) {
    slideIndex--;
    if (slideIndex === 0) {
      slideIndex = 4;
    }
  } else if (n === 1) {
    slideIndex++;
    if (slideIndex > 4) {
      slideIndex = 1;
    }
 }
}


function nextSlide() {
  showSlides(1);
}

function lastSlide() {
  showSlides(-1);
}





