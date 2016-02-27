(function ($) {
  jQuery(document).ready(function ($) {
    pageScroll();
    scroll();
  });
})(jQuery);

var pageScroll = function () {
  var divs = $('section');
  var dir = 'up'; // wheel scroll direction
  var div = 0; // current div
  $(document.body).on('DOMMouseScroll mousewheel', function (e) {
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
          dir = 'down';
      } else {
          dir = 'up';
      }
      // find currently visible div :
      div = -1;
      divs.each(function(i){
          if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
              div = i;
          }
      });
      if (dir == 'up' && div > 0) {
          div--;
      }
      if (dir == 'down' && div < divs.length) {
          div++;
      }
      //console.log(div, dir, divs.length);
      $('html,body').stop().animate({
          scrollTop: divs.eq(div).offset().top
      }, 500);
      $('nav').toggleClass('alt');
      return false;
  });
  $(window).resize(function () {
      $('html,body').scrollTop(divs.eq(div).offset().top);
  });
}

var scroll = function () {
  $(".scroll").click(function (event) { // When a link with the .scroll class is clicked
    event.preventDefault(); // Prevent the default action from occurring
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Animate the scroll to this link's href value
  });
}
