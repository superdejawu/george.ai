import React from 'react';
var THREE = require("three");
// let CANVAS = require("canvas");
// import three from '../scripts/three.min.js';
// import canvasTest from '../scripts/canvas.js';



	var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );

		var renderer = new THREE.WebGLRenderer({
		  antialias: true,
		  alpha: true
		});
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		var geometry = new THREE.BoxGeometry( 2, 2, 2 );

		for ( var i = 0; i < geometry.faces.length; i ++ ) {
    geometry.faces[ i ].color.setHSL( Math.random(), 0.5, 0.5 ); // pick your colors
}
		var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, wireframe: true } );
		var cube = new THREE.Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 5;
		camera.position.x=-1;
		camera.position.y=0;


		function render() {
			requestAnimationFrame( render );

			cube.rotation.x += 0.002;
			cube.rotation.y += 0.002;

			renderer.render( scene, camera );


		}
		render();


export default class Canvas extends React.Component {
	render() {
		return <div style={{"color":"white"}}>




		</div>;

			
	}


}

