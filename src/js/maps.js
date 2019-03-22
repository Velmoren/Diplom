$(document).ready(function () {
  var count = 0;
  var targetLink = $('#link-contacts');
  var target = $('#map');
  // target.append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.3782502696902!2d37.537126678695145!3d55.850055223303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537bf9668ac29%3A0x18dfd9d5b810d58b!2z0JDQstGC0L7QvNC-0YLQvtGA0L3QsNGPINGD0LsuLCA00JAg0YHRgtGA0L7QtdC90LjQtSAyMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyNTQzOA!5e0!3m2!1sru!2sby!4v1553100565299" width="100%" height="416" frameborder="0" style="border:0" allowfullscreen scrollwheel="false"></iframe>');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToMap = targetPos - winHeight;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToMap & count == 0) {
      target.append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.3782502696902!2d37.537126678695145!3d55.850055223303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537bf9668ac29%3A0x18dfd9d5b810d58b!2z0JDQstGC0L7QvNC-0YLQvtGA0L3QsNGPINGD0LsuLCA00JAg0YHRgtGA0L7QtdC90LjQtSAyMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyNTQzOA!5e0!3m2!1sru!2sby!4v1553100565299" width="100%" height="416" frameborder="0" style="border:0" allowfullscreen scrollwheel="false"></iframe>');
      count++;
    }
  });
  $('#link-contacts').mouseenter(function() {
    target.append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.3782502696902!2d37.537126678695145!3d55.850055223303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537bf9668ac29%3A0x18dfd9d5b810d58b!2z0JDQstGC0L7QvNC-0YLQvtGA0L3QsNGPINGD0LsuLCA00JAg0YHRgtGA0L7QtdC90LjQtSAyMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyNTQzOA!5e0!3m2!1sru!2sby!4v1553100565299" width="100%" height="416" frameborder="0" style="border:0" allowfullscreen scrollwheel="false"></iframe>');
    count++;
  });
/* код закоментирован и оставлен для использования в будущем. Код загружает карту при скролле до нее, либо по наведению на якорную ссылку в навигации */
});
