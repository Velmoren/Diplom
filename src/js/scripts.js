$(document).ready(function () {
  $('.arrows__right').click(function () {
    $('#slider-1').trigger('next.owl.carousel', [1000]);
  });

  $('.arrows__left').click(function () {
    $('#slider-1').trigger('prev.owl.carousel', [1000]);
  });

  $('#slider-1').owlCarousel({
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
  $('.arrows__right').click(function () {
    $('#slider-2').trigger('next.owl.carousel', [1000]);
  });

  $('.arrows__left').click(function () {
    $('#slider-2').trigger('prev.owl.carousel', [1000]);
  });

  $('#slider-2').owlCarousel({
    loop: true,
    margin: 32.5,
    // autoplay: true,
    // autoplayTimeout: 4000,
    // autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 5
      },
      1900: {
        items: 5
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