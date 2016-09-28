

// Utility functions
function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

// Main method
$(document).ready(function () {
  // nav menu
  $(".nav-menu-icon a").click(function () {
    $(".navigation-menu").toggleClass("active");
  });

  // Sticky sidebar
  var $sidebar = $(".page-content-sidebar");
  var offset = $sidebar.offset().top - 20 || undefined;
  var currentScroll = 0;

  window.addEventListener('scroll', function () {
    currentScroll = $(window).scrollTop();
    if (currentScroll > offset) {
      $sidebar.find('ul').addClass("sticky");
    } else if (currentScroll <= offset ) {
      $sidebar.find('ul').removeClass("sticky");
    }
  });

  window.addEventListener('resize', function () {
    var offset = $sidebar.offset().top - 20 || undefined;
  });

  // smooth scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 20
        }, 300);
        return false;
      }
    }
  });


});
