$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = 0;
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
    $('#directions').slideToggle();
  });
});
