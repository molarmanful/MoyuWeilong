$(document).ready(function(){
  window.cube = new ERNO.Cube();
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
});
