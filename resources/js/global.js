$(document).ready(function(){
  $.localScroll();
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $("#ruby-scroll").css("-webkit-transform", "translateY(" + scroll/4 + "px)");
    $("#ruby-scroll").css("-moz-transform", "translateY(" + scroll/4 + "px)");
    $("#ruby-scroll").css("-o-transform", "translateY(" + scroll/4 + "px)");
  });
});