// '.box1'click → box1-ext_classを追加
// mouseout     → box1-ext_classを解除

$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
   $('.box1').removeClass('box1-ext');
  });
});