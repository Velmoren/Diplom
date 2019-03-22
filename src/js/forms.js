$(document).ready(function () {
  /* маска для телефона */
  $('.phone').mask('8 (999) 999-99-99');

  /* скрипт валидации формы hero и отправки данных */
  $('#hero-form').validate({
    focusInvalid: false,
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      phone: {
        required: "&#10006;"
      },
      name: {
        required: "&#10006;",
        minlength: jQuery.validator.format(""),
        maxlength: jQuery.validator.format("")
      },
      email: {
        required: "&#10006;",
        email: "",
        success: "valid"
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    submitHandler: function (e) {
      event.preventDefault(),
        $.ajax({
          url: "mailer/smart-hero.php",
          type: "POST",
          data: $(e).serialize(),
          success: function (e) {
            $('.hero-form').css({
              display: 'none'
            });
            $('.window-of-thanks__hero').css({
              display: 'block'
            });
            setTimeout(function () {
              $('.hero-form').css({
                display: 'block'
              });
              $('.window-of-thanks__hero').css({
                display: 'none'
              });
            }, 5e3);
            $("#hero-name").val("");
            $("#hero-phone").val("");
            $("#hero-email").val("");
            ym(52919680, "reachGoal", "hero-ym");
          },
          error: function (e, r) {
            console.log(e + ": " + r);
          }
        })
    }
  });

  /* скрипт валидации формы feedback и отправки данных */
  $('#feedback-form').validate({
    focusInvalid: false,
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      phone: {
        required: "&#10006;"
      },
      name: {
        required: "&#10006;",
        minlength: jQuery.validator.format(""),
        maxlength: jQuery.validator.format("")
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    submitHandler: function (e) {
      event.preventDefault(),
        $.ajax({
          url: "mailer/smart-feedback.php",
          type: "POST",
          data: $(e).serialize(),
          success: function (e) {
            $('.feedback-form').css({
              display: 'none'
            });
            $('.window-of-thanks__feedback').css({
              display: 'block'
            });
            setTimeout(function () {
              $('.feedback-form').css({
                display: 'flex'
              });
              $('.window-of-thanks__feedback').css({
                display: 'none'
              });
            }, 5e3);
            $("#feedback-name").val("");
            $("#feedback-phone").val("");
            ym(52919680, "reachGoal", "feedback-ym");
          },
          error: function (e, r) {
            console.log(e + ": " + r);
          }
        })
    }
  });
  $('#request-form').validate({
    focusInvalid: false,
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      phone: {
        required: "&#10006;"
      },
      name: {
        required: "&#10006;",
        minlength: jQuery.validator.format(""),
        maxlength: jQuery.validator.format("")
      },
      email: {
        required: "&#10006;",
        email: "",
        success: "valid"
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    submitHandler: function (e) {
      event.preventDefault(),
        $.ajax({
          url: "mailer/smart-request.php",
          type: "POST",
          data: $(e).serialize(),
          success: function (e) {
            $('.request-form').css({
              display: 'none'
            });
            $('.window-of-thanks__request').css({
              display: 'block'
            });
            setTimeout(function () {
              $('.request-form').css({
                display: 'flex'
              });
              $('.window-of-thanks__request').css({
                display: 'none'
              });
            }, 5e3);
            $("#hero-name").val("");
            $("#hero-phone").val("");
            $("#hero-email").val("");
            ym(52919680, "reachGoal", "request-ym");
          },
          error: function (e, r) {
            console.log(e + ": " + r);
          }
        })
    }
  });
});