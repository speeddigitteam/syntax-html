// =============navigation toggle ========
$(".toggle").click(function() {
    $(".menu").addClass("active");
});

$(".menu-close").click(function() {
    $(".menu").removeClass("active");
});
// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 70) {
        $(".main-navigation").addClass("navbar-fixed");
        $(".navigation").addClass("navigation-fixed");
    } else {
        $(".main-navigation").removeClass("navbar-fixed");
        $(".navigation").removeClass("navigation-fixed");
    }
});

// FOR BACK2TOP BUTTON
$(window).on("scroll", function() {
    var scroll = $(this).scrollTop();
    if (scroll > 500) {
        $(".scroll__top").show();
    } else {
        $(".scroll__top").hide();
    }
});
// ======preloader=======
setTimeout(function() {
        document.getElementById("preloader").style.opacity = "0";
        document.getElementById("preloader").style.visibility = "hidden";
    }, 3000)
    // ============product mixitup init===

// ========team slider ==========
var swiper = new Swiper(".team-slider", {

    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    autoplay: false,
    speed: 1000,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});



// ========customer slider ==========
var swiper = new Swiper(".customerSlider", {

    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    autoplay: false,
    speed: 1000,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});

// ========news slider ==========
var swiper = new Swiper(".top-news", {

    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    autoplay: false,
    speed: 1000,
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});


// ========banner slider ==========
var swiper = new Swiper(".bannerSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    speed: 1000,
});


// =======video popup=========
$('.play-video').on('click', function(e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $('#video-overlay').append('<iframe width="996" height="560" src="https://www.youtube.com/embed/yeREIXAKXRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$('video-overlay, .video-overlay-close').on('click', function(e) {
    e.preventDefault();
    close_video();
});
$(document).keyup(function(e) {
    if (e.kayCode === 27) {
        close_video();
    }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// =======video popup=========

// FOR FAQ SECTION ACCORDION
$(function($) {
    var panels = $(".faq-ans").hide();
    panels.first().show();

    $(".faq-que").click(function() {
        var $this = $(this);
        panels.slideUp();
        $this.next().slideDown();
    });
});

$(".faq-que").click(function() {
    $(".faq-que i").addClass("icofont-plus");
    $(this.children[1]).removeClass("icofont-plus");
    $(this.children[1]).addClass("icofont-minus");
});

// =======================customer review home 2 ============
var swiper = new Swiper(".productSlider", {
    pagination: {
        el: ".review-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    speed: 1000,
});


// ==========message sent ========
function myFunction() {
    alert("Submit Your Message Please wait for reply!!");
}