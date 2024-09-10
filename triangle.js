"use strict";
var gl;
var points;
var points1;
window.onload = function init(){
	var canvas = document.getElementById( "triangle-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	points = new Float32Array([
		 0.0,  0.0, 
		 0.5,  0.0, 
		 0.5, 0.5, 
	]);
	points1 = new Float32Array([
		 0.0,  0.0, 
		 0.0,  0.5, 
		 0.5, 0.5,
	]);
	var points2 = new Float32Array([
		 -0.25,  -1.0, 
		 0,  -0.5, 
		 -0.5, -0.5,
	]);
	var vertices = new Float32Array([
		 -0.75,-1.0, 
		 -0.5,-0.0,
		 -1.0,-0.0,
	]);
	var vertcolors = new Float32Array([
		0.0, 0.0, 1.0,
		0.0, 1.0, 0.0,
		1.0, 0.0, 0.0,
	]);
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, points, gl.STATIC_DRAW );
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	render();
	
	
	
	var program = initShaders( gl, "vertex-shader", "fragment1-shader" );
	gl.useProgram( program );
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, points1, gl.STATIC_DRAW );
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	render1();
	
	
	var program = initShaders( gl, "vertex-shader", "fragment2-shader" );
	gl.useProgram( program );
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, points2, gl.STATIC_DRAW );
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	render1();
	
	
	var program = initShaders( gl, "vertex1-shader", "fragment3-shader" );
	gl.useProgram( program );
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	var cbufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, cbufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertcolors, gl.STATIC_DRAW );
	var aColor = gl.getAttribLocation( program, "aColor" );
	gl.vertexAttribPointer( aColor, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( aColor );
	render1();
}
function render(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.TRIANGLES, 0, 3 );
}
function render1(){
	gl.drawArrays( gl.TRIANGLES, 0, 3 );
}