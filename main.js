$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = 0;
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
    $('#directions').slideToggle();
  });
  function rotate(object, axis, radians){
  	var rotationmatrix = new THREE.Matrix4();
  	rotationmatrix.makeRotationAxis(axis.normalize(), radians);
  	rotationmatrix.multiplySelf(object.matrix);
  	object.matrix = rotationmatrix;
  	object.rotation.setEulerFromRotationMatrix(object.matrix);
  }
  rotate(cube, 'XYZ', 4)
});
