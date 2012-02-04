/* 
 * simpleSlider jQuery Plugin v0.1.0
 * Copyright (c) 2012 Jorge Álvarez
 *
 * Licensed under the MIT license
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function( $ ) {
  $.fn.simpleSlider = function(options) {
    
    var settings = $.extend({
          duration  : 1000,
          easing    : 'linear'
        }, options),
        $slider = $(this),
        $next = $slider.find('.next'),
        $prev = $slider.find('.prev'),
        $content = $slider.find('.slider-content'),
        $slides = $slider.find('.slide'),
        slideWidth = $($slides[0]).outerWidth(),
        contentWidth = slideWidth * $slides.length,
        contentLeftPos = 0;
		    
    $content.width(contentWidth);
    $prev.hide();
    
    $next.click(function(e){
      contentLeftPos -= slideWidth;
      if(contentLeftPos <= -(contentWidth - slideWidth)) $(this).hide();
      if(contentLeftPos < 0) $prev.show();
      $content.animate({ left : contentLeftPos +'px' }, settings.duration, settings.easing);
      e.preventDefault();
    });
    
    $prev.click(function(e){
      contentLeftPos += slideWidth;
      if(contentLeftPos >= 0 - slideWidth) $(this).hide();
      if(contentLeftPos > -(contentWidth - slideWidth)) $next.show();
      $content.animate({ left : contentLeftPos+'px' }, settings.duration, settings.easing);
      e.preventDefault();
    });
    
  };
})( jQuery );