//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 400) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// //enable redacted text removal on touch
// $(document).ready(function() {
//     $('.hover').bind('touchstart', function(a) {
//         a.preventDefault();
//         $(this).toggleClass('hover_effect');
//     });
// });

//jQuery to change image
$(window).scroll(function() {
    if ($(".navbar").offset().top > 70 && $(".navbar").offset().top <= 140) {
        $("#iPhone").attr("src", "img/2.png");
    }
    else if ($(".navbar").offset().top > 140 && $(".navbar").offset().top <= 210)  {
        $("#iPhone").attr("src", "img/3.png");
    }
    else if ($(".navbar").offset().top > 210 && $(".navbar").offset().top <= 280)  {
        $("#iPhone").attr("src", "img/4.png");
    }
    else if ($(".navbar").offset().top > 280)  {
        $("#iPhone").attr("src", "img/5.png");
    }
    else {
        $("#iPhone").attr("src", "img/1.png");
    }
});

// $('#iPhone').on('click',function(){
//     $("#iPhone").attr("src", "img/2.png");
// });

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
