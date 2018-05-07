var path = document.querySelector('#star-path');
var pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

window.addEventListener("scroll", function(e) {
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength;
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
    
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});

$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")
    }
});



jQuery(function($) {

  var html = $('html');
  var viewport = $(window);
  var viewportHeight = viewport.height();

  var scrollMenu = $('#section-menu');
  var timeout = null;

  function menuFreeze() {
    if (timeout !== null) {
      scrollMenu.removeClass('freeze');
      clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
      scrollMenu.addClass('freeze');
    }, 2000);
  }
  scrollMenu.mouseover(menuFreeze);


  var sectionsHeight = {},
    viewportheight, i = 0;
  var scrollItem = $('.scroll-item');
  var bannerHeight;

  function sectionListen() {
    viewportHeight = viewport.height();
    bannerHeight = (viewportHeight);
    $('.section').addClass('resize');
    scrollItem.each(function() {
      sectionsHeight[this.title] = $(this).offset().top;
    });
  }
  sectionListen();
  viewport.resize(sectionListen);
  viewport.bind('orientationchange', function() {
    sectionListen();
  });

  var count = 0;

  scrollItem.each(function() {
    var anchor = $(this).attr('id');
    var title = $(this).attr('title');
    count++;
    $('#section-menu ul').append('<li><a id="nav_' + title + '" href="#' + anchor + '"><span>' + count + '</span> ' + title + '</a></li>');
  });

  function menuListen() {
    var pos = $(this).scrollTop();
    pos = pos + viewportHeight * 0.625;
    for (i in sectionsHeight) {
      if (sectionsHeight[i] < pos) {
        $('#section-menu a').removeClass('active');
        $('#section-menu a#nav_' + i).addClass('active');;
        var newHash = '#' + $('.scroll-item[title="' + i + '"]').attr('id');
        if (history.pushState) {
          history.pushState(null, null, newHash);
        } else {
          location.hash = newHash;
        }
      } else {
        $('#section-menu a#nav_' + i).removeClass('active');
        if (pos < viewportHeight - 72) {
          history.pushState(null, null, ' ');
        }
      }
    }
  }
  scrollMenu.css('margin-top', scrollMenu.height() / 2 * -1);


  scrollMenu.find('a').click(function() {
    var href = $.attr(this, 'href');
    $('html').animate({
      scrollTop: $(href).offset().top
    }, 500, function() {
      window.location.hash = href;
    });
    return false;
  });

  
  function scrollHandler() {
    menuListen();
    menuFreeze();
  }
  scrollHandler();
  viewport.on('scroll', function() {
    scrollHandler();
    //			window.requestAnimationFrame(scrollHandler);
  });
    
    
});