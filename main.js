var idleInterval = setInterval(timerIncrement, 10000);
$(document).ready(function(){
  scramblers['333'].initialize(null, Math);
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
  $(document).mousemove(function (e) {
    clearInterval(idleInterval);
  });
  $(document).keypress(function (e) {
    clearInterval(idleInterval);
  });
  $('#solve').css('display', 'none');
  $('html').css('display', 'none').delay(500).fadeIn('slow');
  $('#three').css('display', 'none');
  window.cube = new ERNO.Cube();
  cube.position.y = 0;
  cube.twistDuration = 50;
  // update 'data-posit' when twisted
        cube.addEventListener('onTwistComplete', function(e) {
        	var posit = '';
        	var colormap = {};
        	colormap[cube.up.cubelets[4].up.color.initial] = 'U';
        	colormap[cube.left.cubelets[4].left.color.initial] = 'L';
        	colormap[cube.front.cubelets[4].front.color.initial] = 'F';
        	colormap[cube.right.cubelets[4].right.color.initial] = 'R';
        	colormap[cube.back.cubelets[4].back.color.initial] = 'B';
        	colormap[cube.down.cubelets[4].down.color.initial] = 'D';
        	[8, 7, 6, 5, 4, 3, 2, 1, 0].forEach(function(i) {
        		posit += colormap[cube.up.cubelets[i].up.color.initial];
        	});
            	[8, 7, 6, 5, 4, 3, 2, 1, 0].forEach(function(i) {
                	posit += colormap[cube.right.cubelets[i].right.color.initial];
        	});
        	[8, 7, 6, 5, 4, 3, 2, 1, 0].forEach(function(i) {
        	        posit += colormap[cube.front.cubelets[i].front.color.initial];
	        });
                [2, 5, 8, 1, 4, 7, 0, 3, 6].forEach(function(i) {
        	        posit += colormap[cube.down.cubelets[i].down.color.initial];
                });
                [6, 3, 0, 7, 4, 1, 8, 5, 2].forEach(function(i) {
        	        posit += colormap[cube.left.cubelets[i].left.color.initial];
        	});
        	[6, 3, 0, 7, 4, 1, 8, 5, 2].forEach(function(i) {
        	        posit += colormap[cube.back.cubelets[i].back.color.initial];
        	});
        	window.document.body.setAttribute('data-posit', posit);
        });
  $('#changecubeblack').css('display', 'none');
  $('#changecubenorm').css('display', 'none');
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubeloose').click(function(){
  	cube.setRadius(15);
  	$('#changecubeloose').css('display', 'none');
  	$('#changecubenorm').css('display', 'inline-block');
  });
  $('#changecubenorm').click(function(){
  	cube.setRadius(0);
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
  	$('#demotext').text('MOYU LINGPO');
  	cube.edges.setRadius(-140);
	cube.corners.setRadius(-60);
	cube.centers.setRadius(-140);
	$('.cube').css('height', '150%');
	$('.cube').css('width', '150%');
	$(this).css('display', 'none');
	$('#three').css('display', 'inline-block');
  });
  $('#three').click(function(){
  	$('#demotext').text('MOYU WEILONG');
  	cube.edges.setRadius(0);
  	cube.centers.setRadius(0);
  	cube.corners.setRadius(0);
  	$('.cube').css('height', '100%');
  	$('.cube').css('width', '100%');
	$(this).css('display', 'none');
	$('#two').css('display', 'inline-block');
  });
  $('#solve').click(function(){
  	
  });
  $('button').click(function(){
  	$(this).blur();
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
