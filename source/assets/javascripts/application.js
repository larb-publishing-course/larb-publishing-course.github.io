//= require_tree .

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
    console.log(currentScroll);
    if (currentScroll > offset) {
      $sidebar.find('ul').addClass("sticky");
    } else if (currentScroll <= offset ) {
      $sidebar.find('ul').removeClass("sticky");
    }
  })

});
