/**
* Template Name: Mamba - v2.0.1
* Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  window.addEventListener('scroll', function(){
    var header= document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY>0);
})
  // Stick the header at top on scroll
  /*$("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });*/

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 2;

        if ($('#header-sticky-wrapper').length) {
          scrollto -= $('#header-sticky-wrapper').outerHeight() - scrolled;
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Intro carousel
  /*var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });*/

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

})(jQuery); 

//About

function imageChange(img){
  var FullImage = document.querySelector('.mainPhoto');
  FullImage.src = img.src;

  document.querySelector('.mainPhoto').classList.add('repeat');
}

function remove(){
    document.querySelector('.mainPhoto').classList.remove('repeat');
}

function cambiarImagen(numero,imagen){
  if(numero == 1){
      //imagen.src= "../img/camion.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/slide/img-17.jpg')";
      //console.log("asssss");
    }
    if(numero ==2){
      //imagen.src= "assets/img/slide/img-17.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/camion.jpg')";
      //console.log("dadadad");
    }

    
}
function cambiarImagen1(numero,imagen){
  if(numero == 1){
      //imagen.src= "../img/camion.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/slide/img-14.jpg')";
      //console.log("asssss");
    }
    if(numero ==2){
      //imagen.src= "assets/img/slide/img-17.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/camion.jpg')";
      //console.log("dadadad");
    }

    
}
function cambiarImagen2(numero,imagen){
  if(numero == 1){
      //imagen.src= "../img/camion.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/slide/img-20.jpg')";
      //console.log("asssss");
    }
    if(numero ==2){
      //imagen.src= "assets/img/slide/img-17.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/camion.jpg')";
      //console.log("dadadad");
    }

    
}
function cambiarImagen3(numero,imagen){
  if(numero == 1){
      //imagen.src= "../img/camion.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/slide/img-18.jpg')";
      console.log("asssss");
    }
    if(numero ==2){
      //imagen.src= "assets/img/slide/img-17.jpg";
      var div = document.getElementById('img1');
      div.style.backgroundImage = "url('assets/img/camion.jpg')";
      console.log("dadadad");
    }

    
}

  
  console.log("fasfafasfasfafasfa");
//Maps
const coordenadas = { lat: -34.0000000, lng: -64.0000000 };
const coor1 = { lat: -24.18333, lng: -65.3 };
const coor2 = { lat: -24.78333, lng: -65.41667 };
const coor3 = { lat: 34.54167, lng: -58.61528 };
const coor4 = { lat: -27.46667, lng: -58.83333 };
const coor5 = { lat: -32.88333, lng: -68.81667 };
const coor6 = { lat: -34.33333, lng: -34.33333};
const coor7 = { lat: -28.46667, lng: -65.78333};
const coor8 = { lat: -31.73333, lng: -60.53333};
const coor9 = { lat: -27.38333, lng: -55.88333};
const coor10 = { lat: -51.63333, lng: -69.21667};
const coor11 = { lat: -27.45, lng: -58.98333};
const coor12 = { lat: -26.18333, lng: -58.18333};
const coor13 = { lat: -38.95, lng: -68.06667};
const coor14 = { lat: -31.63333, lng: -60.7};
const coor15 = { lat: -43.33333, lng: -65};
const coor16 = { lat: -40.8, lng: -63};
const coor17 = { lat: -27.78333, lng: -64.26667};
const coor18 = { lat: -34.60923, lng: -58.40808};
const coor19 = { lat: -37, lng: -66};
const coor20 = { lat: -53.78333, lng: -67.7};
const coor21 = { lat: -31.4, lng: -64.18333};
const coor22 = { lat: -29.43333, lng: -66.85};
const coor23 = { lat: -26.81667, lng: -65.21667};
const mapDiv = document.getElementById('map');
const input = document.getElementById('input');
let map;
let marker;
let autocomplete;
function initMap(){
 //muesta el mapa
  map = new google.maps.Map(mapDiv, {
    center: coordenadas,
    zoom: 5,
  });

  // marca el lugar por defecto en nuestra coordenadas
  marker = new google.maps.Marker({
    position: coordenadas,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor1,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor2,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor3,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor4,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor5,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor6,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor7,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor8,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor9,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor10,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor11,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor12,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor13,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor14,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor15,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor16,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor17,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor18,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor19,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor20,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor21,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor22,
    map:map,
  });
  initAutocomplete();
  marker = new google.maps.Marker({
    position: coor23,
    map:map,
  });

}

// completa la instancia
async function initAutocomplete(){
  autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function(){
    //console.log('place_changed')
    const place = autocomplete.getPlace();

    map.setCenter(place.geometry.location);
    //marca el lugar cuando buscamos
    marker.setPosition(place.geometry.location);
  });
}

// slider vista nueva clientes
const $next=document.querySelector('.nexts');
const $prev=document.querySelector('.prevs');

$next.addEventListener('click',()=>{
    const items=document.querySelectorAll('.items');
    document.querySelector('.slides').appendChild(items[0]);
});

$prev.addEventListener('click',()=>{
    const items=document.querySelectorAll('.items');
    document.querySelector('.slides').prepend(items[items.length-1]);
});

