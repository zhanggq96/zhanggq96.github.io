//$(document).ready(function() {
//
//  $(window).scroll(function () {
//      //if you hard code, then use console
//      //.log to determine when you want the 
//      //nav bar to stick.  
//      console.log($(window).scrollTop())
//    if ($(window).scrollTop() > 0) {
//      $('.nav').addClass('navbar-fixed');
//    }
//    if ($(window).scrollTop() < 0) {
//      $('.nav').removeClass('navbar-fixed');
//    }
//  });
//});

function window_onload() {
  window.addEventListener("scroll",navbar_reset_top,false);
}

var navbar_top=0;

function navbar_reset_top() {
  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
  if(scrollTop>navbar_top&&navbar.className==="navbar-absolute") {
    document.getElementById("navbar").className="navbar-fixed";
  }
  else if(scrollTop<navbar_top&&navbar.className==="navbar-fixed") {
    document.getElementById("navbar").className="navbar-absolute";
  }
}