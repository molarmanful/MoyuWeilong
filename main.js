$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = -2000
	new TWEEN.Tween( cube.position )
		.to({

			y: 90

		}, 1000 * 2 )
		.easing( TWEEN.Easing.Quartic.Out )
		.start( cube.time )
	cube.rotation.set(

		( 120 ).degreesToRadians(),
		( 420 ).degreesToRadians(),
		(  20 ).degreesToRadians()
	)
	new TWEEN.Tween( cube.rotation )
		.to({

			x: (  20 ).degreesToRadians(),
			y: ( -30 ).degreesToRadians(),
			z: (   0 ).degreesToRadians()

		}, 1000 * 4 )
		.easing( TWEEN.Easing.Quartic.Out )
		.onComplete( function(){

			cube.isReady = true			
		})
		.start( cube.time )
	cube.isReady = false
	cube.twistDuration = 1000
	cube.autoRotate = false
	cube.cubelets.forEach( function( cubelet ){
		var tmp = {

			x: cubelet.position.x,
			y: cubelet.position.y,
			z: cubelet.position.z
		}
		var distance = 1000
		cubelet.position.set(

			cubelet.addressX * distance,
			cubelet.addressY * distance,
			cubelet.addressZ * distance
		)
		var delay
		if( cubelet.type === 'core'   ) delay = 0
		if( cubelet.type === 'center' ) delay = (  200 ).random(  500 )
		if( cubelet.type === 'edge'   ) delay = (  800 ).random( 1000 )
		if( cubelet.type === 'corner' ) delay = ( 1100 ).random( 1500 )
		new TWEEN.Tween( cubelet.position )
			.to({

				x: tmp.x,//0,
				y: tmp.y,//0,
				z: tmp.z//0

			}, 1000 )
			.delay( delay )
			//.easing( TWEEN.Easing.Quadratic.Out )
			.easing( TWEEN.Easing.Quintic.Out )
			.onComplete( function(){

				cubelet.isTweening = false
			})
			.start( cube.time )

		cubelet.isTweening = true
	})
	cube.cubelets.forEach(function(cubelet){
		if(cubelet.type === 'core' || cubelet.type === 'center'){
			cubelet.setOpacity(0);
		}
	});
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('button').click(function(){
    $('#directions').slideToggle();
  });
});
