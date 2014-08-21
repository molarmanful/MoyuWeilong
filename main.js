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
  	$('.text').text('I am the virtual Moyu Weilong.');
  	cube.twist('mmeess');
  	$('.text').text('I have cool stickers.');
  	cube.twist('mmeess');
  	$('.text').text('I am smooth, fast, and $15.');
  	$('.text').text('I don\'t pop.');
  	cube.twist('meME');
  });
});
