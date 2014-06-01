$(document).ready(function(){
  window.cube = new ERNO.Cube();
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  if(cubelet.type = 'center'){
    cubelet.remove();
  }
  $('button').click(function(){
    $('#directions').slideToggle();
  });
});
