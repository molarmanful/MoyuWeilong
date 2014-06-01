$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.cubelets.forEach(function(cubelet){
		if(cubelet.type === 'core' || cubelet.type === 'center'){
			$(cubelet).remove();
		}
	});
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('button').click(function(){
    $('#directions').slideToggle();
  });
});
