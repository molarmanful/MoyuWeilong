$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = 0;
	var white = 0;
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubebgcolor').click(function(){
  	if(white == 0){
  		$('.face').css('background-color', 'white');
  		$('.faceIntroverted').css('background-color', 'white');
  		$('.faceIntroverted').css('border-color', 'gray');
  		var white = 1;
  	} else {
  		$('.face').css('background-color', 'black');
  		$('.faceIntroverted').css('background-color', 'black');
  		$('.faceIntroverted').css('border-color', 'black');
  		var white = 0;
  	}
  });
});
