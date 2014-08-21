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
  	setTimeout(function(){
  		cube.twist('mmeess');
	  	$('.text').text('I have cool stickers.');
	  	setTimeout(function(){
	  		cube.twist('mmeess');
		  	$('.text').text('I am smooth, fast, and $15.');
		  	setTimeout(function(){
		  		$('.text').text('I don\'t pop.');
		  		setTimeout(function(){
		  			cube.twist('meME');
		  		}, 5000);
		  	}, 5000);
		  	cube.twist('meME');
	  	}, 5000);
  	}, 5000);
  });
});
