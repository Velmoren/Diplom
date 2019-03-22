$(document).ready(function () {
  var button1 = $('.btn-open-feedback');
  var button2 = $('.btn-open-request');
  var close1 = $('#close1');
  var close2 = $('#close2');
  var modal1 = $('#feedback-modal'); /* оставил на будущюю реализацию */
  var wrap1 = $('#feedback-wrap');
  var modal2 = $('#request-modal'); /* оставил на будущюю реализацию */
  var wrap2 = $('#request-wrap');

  var timer; /* переменная, принимающая таймер */
  button1.on('click', function () {
    wrap1.fadeIn();
    OffScroll();
    // timer = setTimeout(function () {
    //   wrap.fadeOut();
    //   $(window).unbind('scroll');
    // }, 5000);
    /* устанавливает таймер на закрытие модального окна */
  });
  button2.on('click', function () {
    wrap2.fadeIn();
    OffScroll();
    // timer = setTimeout(function () {
    //   wrap.fadeOut();
    //   $(window).unbind('scroll');
    // }, 5000);
    /* устанавливает таймер на закрытие модального окна */
  });
  close1.on('click', function () {
    wrap1.fadeOut();
    // clearTimeout(timer); /* отчищаем переменную таймер */
    $(window).unbind('scroll'); /* снова позволяем прокрутку сайта */
  });
  close2.on('click', function () {
    wrap2.fadeOut();
    // clearTimeout(timer); /* отчищаем переменную таймер */
    $(window).unbind('scroll'); /* снова позволяем прокрутку сайта */
  });
});

/* функция остановки прокрутки во время появления модального окна без убирания самой полосы прокрутки */
function OffScroll() {
  var winScrollTop = $(window).scrollTop();
  $(window).bind('scroll', function () {
    $(window).scrollTop(winScrollTop);
  });
}