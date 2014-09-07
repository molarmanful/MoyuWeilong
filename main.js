$(document).ready(function(){
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
  var idleInterval = setInterval(timerIncrement, 10000);
  $(document).mousemove(function (e) {
    clearInterval(idleInterval);
  });
  $(document).keypress(function (e) {
    clearInterval(idleInterval);
  });
  $('html').css('display', 'none').delay(500).fadeIn('slow');
  $('#three').css('display', 'none');
  window.cube = new ERNO.Cube();
  cube.position.y = 0;
  cube.twistDuration = 50;
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
  	$('#changecubewhite').css('display', 'none');
  	$('#changecubeblack').css('display', 'inline-block');
  });
  $('#changecubeblack').click(function(){
  	$('.face').css('background-color', 'black');
  	$('.faceIntroverted').css('background-color', 'black');
  	$('#changecubewhite').css('display', 'inline-block');
  	$('#changecubeblack').css('display', 'none');
  });
  $('#two').click(function(){
  	$('demotext').text('MOYU LINGPO');
  	cube.edges.setRadius(-140);
	cube.corners.setRadius(-60);
	cube.centers.setRadius(-140);
	$('.cube').css('height', '150%');
	$('.cube').css('width', '150%');
	$(this).css('display', 'none');
	$('#three').css('display', 'inline-block');
  });
  $('#three').click(function(){
  	$('demotext').text('MOYU WEILONG');
  	cube.edges.setRadius(0);
  	cube.centers.setRadius(0);
  	cube.corners.setRadius(0);
  	$('.cube').css('height', '100%');
  	$('.cube').css('width', '100%');
	$(this).css('display', 'none');
	$('#two').css('display', 'inline-block');
  });
});
function timerIncrement() {
  cube.autoRotate = true;
  $(document).mousemove(function (e) {
    clearInterval(idleInterval);
    cube.autoRotate = false;
  });
  $(document).keypress(function (e) {
    clearInterval(idleInterval);
    cube.autoRotate = false;
  });
}
