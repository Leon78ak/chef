$(document).ready(function() {

  $('.main-nav__link').on('click', function(e) {
    e.preventDefault();

    var
      section = $(this).attr('href');
      mainNav = $('.main-nav');


    mainNav.removeClass('main-nav--opened');
    mainNav.addClass('main-nav--closed');
    showSection(section);
  });

  $('[data-fancybox="gallery"]').fancybox({
    buttons : [
      'close'
    ],
    animationEffect: "zoom",
    animationDuration: 500,
    transitionEffect: "fade",
    transitionDuration: 1000
  });


});

var animationActions = {
  fadeInRight: function () {
    $(this).addClass('fadeInRight');
  },
  fadeInLeft: function () {
    $(this).addClass('fadeInLeft');
  }
};

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var elems = $('.animate');

  elems.each(function () {
    var $this = $(this);

    if (checkDistance(scrollTop, $this)) {
      var animationType = $this.data('animation');
      animationActions[animationType].call($this);
    }
  })

  checkSection();
});

function showSection(section) {
  var
    direction = section.replace(/#/, ''),
    reqSection = $('.section').filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top;

  $('body, html').animate({scrollTop: reqSectionPos}, 500)
}

function checkSection() {
  $('.section').each(function() {
    var
      $this = $(this),
      topEdge = $this.offset().top - 400,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();

    if (topEdge < wScroll && bottomEdge > wScroll) {
      var
        currentId = $this.data('section');
        reqLink = $('.main-nav__link').filter('[href="#' + currentId + '"]');

        reqLink.closest('.main-nav__item').addClass('active')
          .siblings().removeClass('active');
    }
  })
}

function checkDistance(scrollTop, elem) {
  var
    offset = elem.offset().top,
    windowMargin = Math.ceil($(window).height() / 3),
    topBorder = offset - scrollTop - windowMargin,
    bottomEdge = elem.outerHeight(true) + offset,
    bottomBorder = scrollTop + windowMargin - bottomEdge;

    return topBorder <= 0 && bottomBorder <= 0;
}
