function OffScroll(){var n=$(window).scrollTop();$(window).bind("scroll",function(){$(window).scrollTop(n)})}$(document).ready(function(){var n=$(".btn-open-feedback"),o=$(".btn-open-request"),c=$("#close1"),l=$("#close2"),e=($("#feedback-modal"),$("#feedback-wrap")),f=($("#request-modal"),$("#request-wrap"));n.on("click",function(){e.fadeIn(),OffScroll()}),o.on("click",function(){f.fadeIn(),OffScroll()}),c.on("click",function(){e.fadeOut(),$(window).unbind("scroll")}),l.on("click",function(){f.fadeOut(),$(window).unbind("scroll")})});