$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = 0;
	var white = false;
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubebgcolor').click(function(){
  	if(white == 'true'){
  		$('.face').css('background-color', 'black');
  		$('.faceIntroverted').css('background-color', 'black');
  		$('.faceIntroverted').css('border-color', 'black');
  		var white = false;
  	} else {
  		$('.face').css('background-color', 'white');
  		$('.faceIntroverted').css('background-color', 'white');
  		$('.faceIntroverted').css('border-color', 'gray');
  		var white = true;
  	}
  });
});
