$(document).ready(function(){
	window.cube = new ERNO.Cube()
	cube.camera.position.z = 2800//3000
	cube.camera.fov = 25
	cube.camera.updateProjectionMatrix()
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
		.start( cube.time )
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
		if( cubelet.type === 'core'   ) $(cubelet).remove()
		if( cubelet.type === 'center' ) $(cubelet).remove()
		var delay
		if( cubelet.type === 'edge'   ) delay = (  800 ).random( 1000 )
		if( cubelet.type === 'corner' ) delay = ( 1100 ).random( 1500 )
		new TWEEN.Tween( cubelet.position )
			.to({

				x: tmp.x,//0,
				y: tmp.y,//0,
				z: tmp.z//0

			}, 1000 )
			.delay( delay )
			.easing( TWEEN.Easing.Quintic.Out )
			.onComplete( function(){

				cubelet.isTweening = false
			})
			.start( cube.time )

		cubelet.isTweening = true
	})
	var 
	W = ERNO.WHITE,
	O = ERNO.ORANGE,
	B = ERNO.BLUE,
	R = ERNO.RED,
	G = ERNO.GREEN,
	Y = ERNO.YELLOW

	;[

		//  Front slice

		[ W, R,  ,  , B,   ],    [ W, R,  ,  ,  ,   ],    [ W, R, G,  ,  ,   ],//   0,  1,  2
		[ W,  ,  ,  , B,   ],    [ W,  ,  ,  ,  ,   ],    [ W,  , G,  ,  ,   ],//   3,  4,  5
		[ W,  ,  , O, B,   ],    [ W,  ,  , O,  ,   ],    [ W,  , G, O,  ,   ],//   6,  7,  8


		//  Standing slice

		[  , R,  ,  , B,   ],    [  , R,  ,  ,  ,   ],    [  , R, G,  ,  ,   ],//   9, 10, 11
		[  ,  ,  ,  , B,   ],    [  ,  ,  ,  ,  ,   ],    [  ,  , G,  ,  ,   ],//  12, XX, 14
		[  ,  ,  , O, B,   ],    [  ,  ,  , O,  ,   ],    [  ,  , G, O,  ,   ],//  15, 16, 17


		//  Back slice

		[  , R,  ,  , B, Y ],    [  , R,  ,  ,  , Y ],    [  , R, G,  ,  , Y ],//  18, 19, 20
		[  ,  ,  ,  , B, Y ],    [  ,  ,  ,  ,  , Y ],    [  ,  , G,  ,  , Y ],//  21, 22, 23
		[  ,  ,  , O, B, Y ],    [  ,  ,  , O,  , Y ],    [  ,  , G, O,  , Y ] //  24, 25, 26

	].forEach( function( cubeletColorMap, cubeletId ){

		cubeletColorMap.forEach( function( faceColor, faceIndex ){

			var c = cube.cubelets[ cubeletId ].faces[ faceIndex ].element.querySelector( '.sticker' ).classList
			
			while( c.length ) c.remove( c[ 0 ])
			c.add( 'sticker', faceColor.name )
			cube.cubelets[ cubeletId ].faces[ faceIndex ].color = faceColor
		})
	})
	cube.object3D.children.forEach( function( child ){

		if( child instanceof THREE.CSS3DObject && child.element.classList.contains( 'faceLabel' )){

			child.position.multiplyScalar( 0.8 )
		}
	})
	delete cube.showFaceLabels
	delete cube.hideFaceLabels
	ERNO.Cubelet.prototype.setOpacity = function( opacityTarget, onComplete ){

		if( this.opacityTween ) this.opacityTween.stop()
		if( opacityTarget === undefined ) opacityTarget = 1
		if( opacityTarget !== this.opacity ){

			var 
			that = this,
			tweenDuration = ( opacityTarget - this.opacity ).absolute().scale( 0, 1, 0, this.cube.opacityTweenDuration )

			this.opacityTween = new TWEEN.Tween({ opacity: this.opacity })
				.to({

					opacity: opacityTarget
				
				}, tweenDuration )
				.easing( TWEEN.Easing.Quadratic.InOut )
				.onUpdate( function(){

					that.css3DObject.element.style.opacity = this.opacity
					that.opacity = this.opacity
				})
				.onComplete( function(){

					if( onComplete instanceof Function ) onComplete()
				})
				.start( cube.time )
		}
	}
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('button').click(function(){
    $('#directions').slideToggle();
  });
});
