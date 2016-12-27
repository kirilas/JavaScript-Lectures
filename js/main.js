// //It is function
// function fn () {
	
// }
// var object = ();  // [], function () {}

// // It is method
// object.method = function () {};

// // It is functional expresion
// var functionX = function () {};
	// return "test";
 
 // // It is name functional expresion
 // var functionX = function fnName () {
	 // if (true) {
		 // fnName();
	 // }
 // };
 
 // console.log(functionX());
 
 // var newFnName = new Function("x", "return x");
 
 // console.log(newFnName(256));
 
 // (function() {
	 // console.log("test 1");
 // }}();
 
  // (function() {
	 // console.log("test 2");
 // }}();
 
// var test = (function privatName(x) {
	 // if (x < 1) {
		// return privatName(x + 1);
	 // }
	 // return x;
 // }}(0);
 // console.log(test);
 
 // (function privatName() {
	 
 // }());
 
 // var arrayWidthFunctions = [
	// function () {return 0;},
	// function () {return 1;},
	// function () {return 2;}
 // ];
 // arrayWidthFunctions.methodOfArray = function () {
	 // return "I am a method";
 // }
 
 // console.log(arrayWidthFunctions[1]());
 // console.log(arrayWidthFunctions.methodOfArray()); 
 
 // function fnName(){
	 // return "I am function";
 // }
 // fnName.methodOfFunction = function () {
	 // return "I am method";
 // }
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName["methodOfFunction"]());
 
// console.log(fnName);
 
// var mewFunction = fnName;
 
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName["methodOfFunction"]());
 
// console.log(newFunction);
  
// newFunction = null;
  
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName["methodOfFunction"]());

// cosole.log(fnName);

// var objct = {
	// x: 10
// }
// // console.log(obj.x);

// function changeX(test) {
	// test.x = 25;
// }
// console.log(objct.x); 

// var x = 10;
// var y = x;
// console.log("Old x =", x);
// console.log("Old y =", y);
// x + 1;
// changeX(x)
// function changeX(test) {
	// test = 25;
// }
// console.log("New x =", x); 
// console.log("New y =", y); 
 
 
// var x = true ? function(){ return 25; }() : false;
// console.log(x); 

// var fn = x == 25 && function () { return 50 };

// console.log(fn);  

// function test(number, name) {
	// console.log(arguments);
	// console.log(number += 10);
	// console.log("Heloo", name);
	// var x = Array.apply(null, arguments);
	// console.log(x);
	// // arguments[1]...
	// // arguments[3]...
// }
// test(1, "Vasya", null, [], 256, "test");



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 