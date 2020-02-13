/*  -------------------
		START CODE : https://stackoverflow.com/questions/27193732/three-js-creating-a-right-triangular-prism
    -------------------	*/
	PrismGeometry = function ( vertices, height ) {

		var Shape = new THREE.Shape();

		( function f( ctx ) {

			ctx.moveTo( vertices[0].x, vertices[0].y );
			for (var i=1; i < vertices.length; i++) {
				ctx.lineTo( vertices[i].x, vertices[i].y );
			}
			ctx.lineTo( vertices[0].x, vertices[0].y );

		} )( Shape );

		var settings = { };
		settings.amount = height;
		settings.bevelEnabled = false;
		THREE.ExtrudeGeometry.call( this, Shape, settings );

	};

	PrismGeometry.prototype = Object.create( THREE.ExtrudeGeometry.prototype );

/* 	--------------------
		END CODE : https://stackoverflow.com/questions/27193732/three-js-creating-a-right-triangular-prism
	--------------------	*/