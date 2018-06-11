$(document).ready(function() {

  $('.main-nav__link').on('click', function(e) {
    e.preventDefault();

    var section = $(this).attr('href');
    var mainNav = $('.main-nav');


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
  },
  fadeInDown: function () {
    $(this).addClass('fadeInDown');
  }
};

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var headerHeight = $('.page-header').height();
  var elems = $('.animate');
  // var items = $('.product__item');

  elems.each(function () {
    var $this = $(this);

    if (checkDistance(scrollTop, $this)) {
      var animationType = $this.data('animation');
      animationActions[animationType].call($this);
    }
  })

  checkSection();
  fixMenu(scrollTop);
  // animationDelay(items);
});

function showSection(section) {
  var direction = section.replace(/#/, '');
  var reqSection = $('.section').filter('[data-section="' + direction + '"]');
  var reqSectionPos = reqSection.offset().top;

  $('body, html').animate({scrollTop: reqSectionPos - 40}, 500);
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

function fixMenu(scrollTop) {
  var headerHeight = $('.page-header').height();
  var mainNav = $('.main-nav');

  if (scrollTop > headerHeight - 60) {
    mainNav.addClass('fixed');
  } else {
    mainNav.removeClass('fixed');
  }
}

// function animationDelay(items) {
//   var delayStart = 0;
//   var counter = 0;
//   var timer;

//   function each() {
//     var item = items.eq(counter);

//     item.css({
//       'animation-delay' : delayStart + 's'
//     });

//     delayStart = delayStart + 0.5;

//     counter++;

//     if (counter > items.length) {
//       if (timer) {
//         clearTimeout(timer);
//       }
//     }

//     timer = setTimeout(each, 1000);
//   }

//   each();

// }
