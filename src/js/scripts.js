/* параметры слайдера секции progects */
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

  /* параметры слайдера секции customers */
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
  /* скрипт делает верхнее фото из двух прозрачным со скоростью 800 MS */
  $('.layouts-card').hover(
    function() {
      $(this).find('img.nocolor').stop().animate({ 'opacity': '0' }, 800);
  },
    function() {
      $(this).find('img.nocolor').stop().animate({ 'opacity': '1' }, 800);
  });

});