$(document).ready(function(){
	$('h1').html('Hello World');
});

$(function(){
  $('.box1').show(1000,function(){
  	$('.box1').slideDown(function(){
  	$('.box1').css({
  	'width': '200px;',
  	'height': '100px;',
  	'background-color': 'blue'
  });
  });
  });
});