$(document).ready(function(){
  window.cube = new ERNO.Cube();
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  cube.cubelet.forEach(function(cubelet){
    if(cubelet.type = 'core' || cubelet.type = 'center') {
      $(cubelet).remove();
    }
  });
  $('button').click(function(){
    $('#directions').slideToggle();
  });
});
