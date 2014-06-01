

//  Here we go.

document.addEventListener( 'DOMContentLoaded', function(){
	createCube()
	

    //////////////
   //          //
  //   Cube   //
 //          //
//////////////


function createCube(){


	//  We have to create a Cube instance
	//  and that will give us the cube of course,
	//  but also access to the camera, etc.

	window.cube = new ERNO.Cube()


	//  Camera adjustments.
	//  The default puts the cube up nice and close,
	//  but we need to sit a bit further away
	//  so we can read the text around the cube.

	cube.camera.position.z = 2800//3000
	cube.camera.fov = 25
	cube.camera.updateProjectionMatrix()


	//  We have a cube and have fixed our camera.
	//  Now lets choreograph the cube’s entrance.
	//  We’ll spin up from the bottom and reverse-explode.
	//  (Can’t really call it imploding, can we?)

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


	//  And we want each Cubelet to begin in an exploded position and tween inward.

	cube.cubelets.forEach( function( cubelet ){


		//  Originally it wasn’t necessary to hold onto this position
		//  because we knew for use setting position{} to 0,0,0 later
		//  would put the cube back together.
		//  But those were the easy days when the API was handled by
		//  one single person ;)

		var tmp = {

			x: cubelet.position.x,
			y: cubelet.position.y,
			z: cubelet.position.z
		}


		//  We want to start with each Cubelet exploded out away from the Cube center.
		//  We’re reusing the x, y, and z we created far up above to handle Cubelet positions.

		var distance = 1000
		cubelet.position.set(

			cubelet.addressX * distance,
			cubelet.addressY * distance,
			cubelet.addressZ * distance
		)


		//  Let’s vary the arrival time of flying Cubelets based on their type.
		//  A nice extra little bit of sauce!

		var delay
		if( cubelet.type === 'core'   ) delay = 0
		if( cubelet.type === 'center' ) $(cubelet).remove();
		if( cubelet.type === 'edge'   ) delay = (  800 ).random( 1000 )
		if( cubelet.type === 'corner' ) delay = ( 1100 ).random( 1500 )


		//  We want those cubelets to go home, which used to be 0,0,0.
		//  Alas, now we have to rely on a cloned previous position.

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


	//  Cuber’s API originally put the white face (complete a logo sticker) in front,
	//  making for a white (front), orange  (up), and blue (right) display.
	//  That’s not as pretty as white (front), blue (up), and red (right) so...
	//  UPDATE: Nah dawg, got to use White, Red, and Green like the Hungarian flag
	//  as a nice nod to Ernő Rubik himself.

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


	//  Also, we want to force the instance to use
	//  ERNO.Cube.prototype.showFaceLabels(), etc:

	delete cube.showFaceLabels
	delete cube.hideFaceLabels


	//  Ok, look... It’s way past my bedtime.
	//  I don’t even know why this works / didn’t work before.
	//  The exact same code is over in patches.js
	//  but somehow it doesn’t work there. WHYWHYHWYHWYW?
	//  Sincerely, Mr. tears and flowers.

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


	//  Now, after all that math and choreography
	//  we should probably actually draw the cube to somewhere!

	document.getElementById( 'containerforcube' ).appendChild( cube.renderer.domElement )


	//  Be default the Cube Id labels are zero-indexed.
	//  Great for coders, not for average Joe.
	//  Also, we want to pretend the Core isn’t a real Cubelet.
	//  The trick here is, the elements don’t exist for a few cycles...
	//  NOTE: We should only have to update cubelets 0 to 13
	//  but for some reason FireFox is very upset about this whole thing
	//  so we’ll loop through to 26 to make FF happy again.

	setTimeout( function(){

		var i

		for( i = 0; i <= 26; i ++ ){

			cube.cubelets[ i ].faces.forEach( function( face ){

				var e = face.element.querySelector( '.underline' )

				if( i < 13 ) e.innerHTML = +e.innerText + 1
				else if( i === 13 ) e.innerHTML = '&#10084;'
				else e.innerHTML = +e.innerText
			})
		}
		cube.showLogo()

	}, 100 );
