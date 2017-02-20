$(document).ready(function(){

  (function(){
    var animenuToggle = document.querySelector('.animenu__toggle'),
        animenuNav    = document.querySelector('.animenu__nav'),
        hasClass = function( elem, className ) {
          return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
        },
        toggleClass = function( elem, className ) {
          var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
          if( hasClass(elem, className ) ) {
            while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
              newClass = newClass.replace( ' ' + className + ' ' , ' ' );
            }
            elem.className = newClass.replace( /^\s+|\s+$/g, '' );
          } else {
            elem.className += ' ' + className;
          }
        },           
        animenuToggleNav =  function (){        
          toggleClass(animenuToggle, "animenu__toggle--active");
          toggleClass(animenuNav, "animenu__nav--open");        
        }

    if (!animenuToggle.addEventListener) {
        animenuToggle.attachEvent("onclick", animenuToggleNav);
    }
    else {
        animenuToggle.addEventListener('click', animenuToggleNav);
    }
  })()

    $(".header-top-block").removeClass("nav_default");
    $('.menu li a').removeClass("default-menu-list");
    $(window).scroll(function(){
        if ($(window).width() <= 1000) {
            $(".header-top-block").removeClass("nav_default").fadeIn('fast');
            $('.menu li a').removeClass("default-menu-list").fadeIn('fast');
        } else {
            if ($(this).scrollTop() > 75) {
                $(".header-top-block").addClass("nav_default").fadeIn('fast');
                $('.menu li a').addClass("default-menu-list").fadeIn('fast');
            }
            else{
                $(".header-top-block").removeClass("nav_default").fadeIn('fast');
                $('.menu li a').removeClass("default-menu-list").fadeIn('fast');
            }
        };
    });
   // $('a[href*=\\#]').bind("click", function(e){
   //    var anchor = $(this);
   //    $('html, body').stop().animate({
   //       scrollTop: $(anchor.attr('href')).offset().top
   //    }, 1000);
   //    e.preventDefault();
   // });
   // return false;

  $(document).ready(function(){ 
    var touch   = $('#touch-menu');
    var menu  = $('.nav');

    $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
    
    $(window).resize(function(){
      var w = $(window).width();
      if(w > 992 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  $('.screen_3-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated flipInX',
      offset: 100
    });
  });

  $(document).ready(function(){
    $(".header-nav-list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });

  $(function() {
    $('#button-down').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
});﻿