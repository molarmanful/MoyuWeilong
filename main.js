$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = 0;
	$('#changecubeblack').css('display', 'none');
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubewhite').click(function(){
  	$('.face').css('background-color', 'white');
  	$('.faceIntroverted').css('background-color', 'white');
  	$('.faceIntroverted').css('border-color', 'gray');
  	$('#changecubewhite').css('display', 'none');
  	$('#changecubeblack').css('display', 'inline-block');
  });
  $('#changecubeblack').click(function(){
  	$('.face').css('background-color', 'black');
  	$('.faceIntroverted').css('background-color', 'black');
  	$('.faceIntroverted').css('border-color', 'black');
  	$('#changecubewhite').css('display', 'inline-block');
  	$('#changecubeblack').css('display', 'none');
  });
  $('#demo').click(function(){
  	cube.twist('xxxxyyyyzzzz');
  	var timer = setInterval(function(){$('.text').text('I am the virtual Moyu Weilong.');}, 5000);
  	cube.twist('mmeess');
  	var timer = setInterval(function(){$('.text').text('I have cool stickers.');}, 5000);
  	cube.twist('mmeess');
  	var timer = setInterval(function(){$('.text').text('I am smooth, fast, and $15.');}, 5000);
  	var timer = setInterval(function(){$('.text').text('I don\'t pop.');}, 5000);
  	cube.twist('meME');
  });
});
