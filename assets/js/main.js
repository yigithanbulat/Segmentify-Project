
$('.slider-wrapper').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: ".product-slider .slider-arrows .pre-arrow",
  nextArrow: ".product-slider .slider-arrows .next-arrow",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$(document).ready(function(){
    $('.product-slider .slider-sidebar li').click(function(){
      $('.product-slider .slider-sidebar li').removeClass("active");
      $(this).addClass("active");
  });
  });




  $( ".addtocart" ).click(function() {
    $( ".addtocart-alert" ).fadeIn( 600 ).delay( 3000 ).fadeOut( 500 );
  });






  