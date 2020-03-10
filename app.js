$(function(){
    $('.box1').mouseover(function(){
        $('.box1').css({'background-color': '#0000FF'});
    });
    $('.box1').mouseout(function(){
        $('.box1').css({'background-color': 'red'});
    });
    $('.box1').mouseover(function(){
    	$('.box1').toggleClass('box-ext')
    });
});