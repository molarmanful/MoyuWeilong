$(document).ready(function(){
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
  $('html').css('display', 'none').delay(500).fadeIn('slow');
  window.cube = new ERNO.Cube();
  cube.position.y = 0;
  $('#changecubeblack').css('display', 'none');
  $('#changecubenorm').css('display', 'none');
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubeloose').click(function(){
  	$('.sticker').css('height', '100%');
  	$('.sticker').css('width', '100%');
  	$('.face').css('height', '.88em');
  	$('.face').css('width', '.88em');
  	$('#changecubeloose').css('display', 'none');
  	$('#changecubenorm').css('display', 'inline-block');
  });
  $('#changecubenorm').click(function(){
  	$('.sticker').css('height', '98%');
  	$('.sticker').css('width', '98%');
  	$('.face').css('height', '1em');
  	$('.face').css('width', '1em');
  	$('#changecubeloose').css('display', 'inline-block');
  	$('#changecubenorm').css('display', 'none');
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
});
