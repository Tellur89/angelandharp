$(".btn_menu").on("click", function(){
    $(".btn_menu").toggleClass("btnc");
    $(".title").toggleClass("title-move");
    $(".icons_social").toggleClass("icons_social_small");
    $(".photo_background").toggleClass("photo_background_small");
    $(".photo_back").toggleClass("photo_background1_small");
    $(".link").toggleClass("link_small");
    $(".row").toggleClass("row_small");
    $(".row_venue").toggleClass("row_venue_small");
    $(".row_footer").toggleClass("row_footer_small");
    $(".book_link").toggleClass("book_link_small");
    $(".footer").toggleClass("row_small");
   
    $(".row_about").toggleClass("row_about_small");
    
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

$(document).ready(function(){
  $("#sidebarCollapse").on("click", function(){
      $("#sidebar").toggleClass("active");
  });
});


