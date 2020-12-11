function mainPage(){
  $(".se-pre-con").hide()
  window.scrollTo(0,0);
}
var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n>=slides.length) {slideIndex = 0;}
  if(n<0){slideIndex=slides.length;}
  if(n<slides.length && n>=0){slideIndex= n;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

autoSlides();
function autoSlides() {
  showSlides(slideIndex);
  slideIndex++;
  setTimeout(autoSlides, 5000); // Change image every 5 seconds
}