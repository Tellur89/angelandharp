$(".btn_menu").on("click", function(){
    $(".btn_menu").toggleClass("btnc");
    $(".sidebar").toggleClass("side");
    $(".container-fluid").toggleClass("container_small");
    $(".title").toggleClass("title-move");
    $(".icons_social").toggleClass("icons_social-move");
    $(".row").toggleClass("row_small");
    $(".photo_background").toggleClass("photo_background_small");
    $(".photo_background1").toggleClass("photo_background1_small");
    $(".link").toggleClass("link_small");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}


