$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = 0;
	var white = false;
	var time = 0;
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubebgcolor').click(function(){
  	if(white == false){
  		$('.face').css('background-color', 'white');
  		$('.faceIntroverted').css('background-color', 'white');
  		$('.faceIntroverted').css('border-color', 'gray');
  		var white = false;
  	} else {
  		$('.face').css('background-color', 'black');
  		$('.faceIntroverted').css('background-color', 'black');
  		$('.faceIntroverted').css('border-color', 'black');
  	}
  });
  var idleif = setInterval(idleact(), 1000);
  $(document).mousemove(function(){
  	var time = 0;
  });
  $(document).keypress(function(){
  	var time = 0;
  });
  function idleact(){
  	var time = time + 1;
  	if(time == 20){
  		cube.twist('mmeess');
  		var time = 0;
  	}
  }
});
