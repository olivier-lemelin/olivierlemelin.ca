(function () {

  // Function to hide the main content sections of this page.
  var hideContent = function(instantly) {
    $('.content').hide(1);
  };

  var unhideElement = function(event) {
    const activeElem = $( '.content' ).filter( ':visible' );
    const clickedElem = $( '#' + _.split(event.currentTarget.id, '-')[0] );
    const scrollToId = '#' + clickedElem[0].id + '-anchor';


    // Scroll up the previously selected element, then hide it.
    $(activeElem).slideUp(500).hide(1);

    // Then, scroll down the new element.
    $(clickedElem)
      .delay(500)
      .slideDown(500);

    // We need this, otherwise there has been no time to refresh
    // the layout of the site.
    window.setTimeout(function() {

      // Fetch the title element to scroll to.
      var target = $(scrollToId);

      // Animate the scroll to the new section.
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 500);

    }, 1100);
  };

  // On document ready, fade in the container.
  $(function() {

    $(".button-collapse").sideNav();
    $('.parallax').parallax();

    // Fade in the container once it has been properly set up.
    $("body").hide(0).delay(500).fadeIn(1000);
  });

})();
