$(document).ready(function () {
$('.arrows__right').click(function () {
  $('.owl-carousel').trigger('next.owl.carousel', [1000]);
});

$('.arrows__left').click(function () {
  $('.owl-carousel').trigger('prev.owl.carousel', [1000]);
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  // autoplay: true,
  // autoplayTimeout: 4000,
  // autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
});
});
// $(document).ready(function () {
//   $('.slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // autoplay: true,
//     // autoplaySpeed: 4000,
//     prevArrow: $('.arrows__left'),
//     nextArrow: $('.arrows__right'),
//     responsive: [{
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 580,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
// });