// Randomly select iPhone comp image
$(function() {
  // var images = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];
  var images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'];
  var randimg = images[Math.floor(Math.random() * images.length)];
  $("#iPhone").attr("src", 'img/' + randimg);
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 400) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutCubic');
        event.preventDefault();
    });
});
