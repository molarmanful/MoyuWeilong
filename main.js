$(document).ready(function(){
  window.cube = new ERNO.Cube();
  cube.camera.position.z = 2800//3000
	cube.camera.fov = 25
	cube.camera.updateProjectionMatrix()
	cube.cubelets.forEach(function(cubelet){
		if(cubelet.type === 'core' || cubelet.type === 'center'){
			$(cubelet).remove();
		}
	});
  var container = $( '#containerforcube' );
  container.append( cube.renderer.domElement );
  $('button').click(function(){
    $('#directions').slideToggle();
  });
});
