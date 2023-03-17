const ANIMATION = document.querySelectorAll(".animated");
const SLIDERCARDS = document.querySelectorAll(".testimonials .card");
$(function () {
  //animate navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(".landing").position().top) {
      $(".navbar").addClass("minimize");
    } else {
      $(".navbar").removeClass("minimize");
    }
  });
  //observe animated elements
  const observer = new IntersectionObserver(
    function test(entries) {
      entries.forEach((element) => {
        element.target.classList.toggle("animation", element.isIntersecting);
      });
    },
    {
      threshold: 0.6,
      rootMargin: "150px",
    } 
  );
  //catch animated elements
  ANIMATION.forEach((element) => {
    observer.observe(element);
  });
  // console.log(SLIDERCARDS);
  SLIDERCARDS.forEach(element => {
    element.classList.add("card-animation");
    // element.target.css("animation-name", "cards-animation");
  });
  $(".our-team .card").hover(function(){
    $(this).find('img').css("transform", "scale(1.05)");
  },function(){
    $(this).find("img").css("transform", "scale(1)");
  });
});
