(function ($) {
  "use strict";

  // Scrollspy
  $("body").scrollspy({
    target: "#nav",
    offset: $(window).height() / 2,
  });

  // Mobile nav toggle
  $(".navbar-toggle").on("click", function () {
    $(".main-nav").toggleClass("open");
  });

  // Fixed nav
  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();
    var $win = $(window);
    var winH = $win.height();
    var winW = $win.width();
    if (winW < 1024) {
      winH = 1200;
    }
    if (wScroll > winH) {
      $("#header").addClass("fixed-navbar");
    } else {
      $("#header").removeClass("fixed-navbar");
    }
  });

  // Smooth scroll
  $(".main-nav a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 40,
      },
      800
    );
  });
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 40,
      },
      800
    );
  });

  // Section title animation
  $(".section-title").each(function () {
    var $this = $(this);
    $this.find(".title > span").each(function (i) {
      var $span = $(this);
      var animated = new Waypoint({
        element: $this,
        handler: function () {
          setTimeout(function () {
            $span.addClass("appear");
          }, i * 250);
          this.destroy();
        },
        offset: "95%",
      });
    });
  });

  // Galery Owl
  $("#galery-owl").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 500,
    responsive: {
      0: {
        stagePadding: 0,
      },
      768: {
        stagePadding: 120,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    autoplay: true,
    navSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Parallax Background
  $.stellar({
    responsive: true,
  });
})(jQuery);

function register() {
  document.location.href = "/registration";
}

let el = document.querySelectorAll("ul.main-nav li");
el.forEach((element) => {
  element.addEventListener("click", () => {
    let parent = document.querySelector("ul.main-nav");
    parent.classList.remove("open");
    $(".hamburger").removeClass("open");
  });
});
// To change faq prefix icons on click
let faqIcons = document.querySelectorAll('.material-icons');
let faqQues = document.querySelectorAll('.questions');
console.log(faqQues[0]);

faqQues.forEach(function(question, index){
  question.addEventListener("click", ()=>{
    faqIcons[index].classList.toggle("active");
  })
})