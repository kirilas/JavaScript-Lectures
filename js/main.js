// war i = 0;
// wile (i < 10) {
	// i++; // 2
	// console.lod(i);
// }

// var i = 0;
// do { // runs at least once;
	// i++; 
	// console.log(i);
// } while (false);

// for (var i = 0; i < 10; i++) {
	// console.log(i);
// }

// for (var i = 10; i > 5; i--) {
	// console.log(i);
// }

// for (var i = 10; i > 0; i-=2) {
	// console.log(i);
// }

// var i = 10;
// for (; i > 5;) {
	// i --;
	// console.log(i);
// }


// var i = 0;
// while (i < 100) {
	// console.log(i);
	// i++;
// if (i > 10){
		// break;
	// }
// }

// var i = 0;
// do {
	// console.log(i);
	// i++;
    // if (i > 10){
		// break;
	// }
// }while (i < 100);


// for (var i = 0; i < 100; i++) {
	// console.log(i);
	// if (i > 10) {
	// break;
	// }
// }

// var i = 0;
// while (i < 10) {
	// i++;
	// if (i > 5 && i >8) {
		// continue;
	// }
	// console.log(i);
// }

// var i = 0;
// do {
	// i++;
	// if (i > 5 && i <8) {
		// continue;
	// }
	// console.log(i);
// } while (i > 10);


// for (var i = 0; i < 10; i++) {
	// if (i > 5 && i < 8) {
		// continue;
	// }
	// console.log(i);
// }

// for (var i = 0; i < 10; i++) {
	// i > 5 && i< 8? continue : null; // It is an errore!;
	// console.log(i); 
// }

// var i = 0;
// outerFor: while(true) {
	// console.log("outer i=", i);
	// while (true) {
		// i++;
		// console.log("inner i=", i);
		// if (i > 10) {
			// break outerFor;
		// }
	// }
// }

// var i = 0;
// outerFor: do {
	// console.log("outer i=", i);
	// do {
		// i++;
		// console.log("inner i=", i);
		// if (i > 10) {
			// break outerFor;
		// }
	// } while (true);
// } while (true);

// outerFor: for (var i = 0;;) {
	// console.log("outer=", i);
	// for (;;) {
		// i++;
		// console.log("inner=", i);
		// if (i > 10) {
			// break outerFor;
		// }
	// }
// }

// var = 0;
// outer: for (var i = 0; i < 1000;) {
	// console.log("outer i=", i);
	// for (;;) {
		// i++;
		// console.log ("inner i=", i);
		// if (i > 10) {
			// continue outer;
		// }
	// }
// }
	
// var i = 0;
// outer: while (i > 30;) {
	// console.log("outer i=", i);
	// while (true) {
		// i++;
		// console.log ("inner i=", i);
		// if (i > 10) {
			// continue outer;
		// }
	// }
// }


// var i = 0;
// outer: do {
	// console.log("outer i=", i);
	// do {
		// i++;
		// console.log ("inner i=", i);
		// if (i > 10) {
			// continue outer;
		// }
	// } while(true);
// } while (i < 30);


// var i = 11;
// outer: do {
	// console.log("outer i=", i);
	// do {
		// i++;
		// console.log ("inner i=", i);
		// if (i > 10) {
			// continue outer;
		// }
	// } while(true);
// } while (i < 30);

// var object = {
	// key1: "value 1",
	// key2: "value 2",
	// key3: "value 3",
	// anyKeyName: "any data",
	// isObject: {
		// test: "test"
	// },
	// isArray: [1, 2, null]
// }

// console.log(object.key1);
// console.log(object["key2"]);

// for (var key in object) {
	// console.log(key);
	// console.log(object[key]);
// }


// var array = [1, 2, 3, "string", null];

// array.someKey = "some value"; // discrease speed of work with array

// index of 1  is 0;
// index of "string" is 3,

// for (var index in array) {
	// console.log(index);
	// console.log(array[index]);
// }


// Arrays definition;
// var arr = [];
// var arr = [1, "srting", null];
// var arr = new Array(); // [];
// var arr = new Array(1, "srting", null); // [1, "srting", null];
// var arr = new Array(2); // [undefined, undefined];

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr);

// arr[0] = "test";

// console.log(arr[0] == "test");

// arr[0] = "test";

// var arr = [1, 2, 3];
// console.log(arr.length); // 3
// console.log(arr.push(10)); // 4
// console.log(arr.length); // 4
// arr.push("test") > 4 && console.log("We have a big array!");
// var newLenght = arr.push("test");
// console.log(newLenght);

// var z;
// if (z = 8 > 6) {
	// console.log("z = 8 > 6 =", z);
// }
// console.log("Our array =", arr);

//console.log(Array.isArray(arr));

// var array = ["test", 123, {}, [], null];
// for (var i = 0; i < array.length; i++) {
	// var curentElement = array[i];
	// if (typeof curentElement == "object" && !Array.isArray(curentElement) {
		// console.log(curentElement);
		// break;
	// }
	// console.log("iteration =", i+1);
// }

var array = ["test", 123, {}, [], null];
// var  newArray = [];
// for (var i = 0; i < array.length; i++) {
	// var curentElement = array[i];
	// if (typeof curentElement !== "object" && !Array curentElement != "function" || curentElement === null) {
		// newArray.push(curentElement);
	// }
	// console.log("iteration =", i+1);
// }

array.length = 10;
console.log(array);




































