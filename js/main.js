// var obj = {};

// var obj = new object();

var object = {
	key1: "value",
	key: null,
	"user": {
		"firstname": "vasya",
		lastname: "Sidorov"
	}
};


// var object = {};
// object.key1 = "value";
// object.key2 = null;
// object["user"] = {
	// "firstname": "vasya",
	// lastname: "Sidorov"	
// };


// console.log(object.key1);

// delete object.key1;

// console.log(object.key1);

// object.key1 = undefined;

// if (object.key1 !== undefined) {
	// console.log("No result");
// }

// if ("key1" in object) {
	// console.log("Has result");
// }

// for (var key in object) {
	// console.log(object[key]);
// }


// var obj = {
	// "1": "value1",
	// "25": "value2",
	// "10": "value3",
	// "test1": "value4",
	// "asd": "value5",
	// "15": "value6",
	// "11": "value7",
// }
// for (var key in obj) {
	// console.log(key);
// }

// var keys = Object.keys(obj);

// console.log(keys);

// for (var i = 0; i < keys.length; i++) {
	// console.log(keys[i], obj[keys[i]]);
// }

// var obj = {
	// "key1": 10,
	// "key2": 15
// }

// Object.defineProperty(object, "key1", {
	// writable: false
// })

// object.key1 = 25;

// console.log(object.key1);

// Object.defineProperty(object, "key1", {
	// writable: true
// })

// object.key1 = 25;

// console.log(object.key1);

// Object.defineProperty(object, "key1", {
	// configurable: false,
	// writable: false,
	// enumerable: false	
// });

// console.log(Object.keys(object));
// object.key1 = "test";
// console.log(object.key1);

// Object.defineProperty(object, "key1", {
	// enumerable: true
// });


// Object.defineProperty(object, "test", {
	// get: function () { return this.value / 3},
	// set: function (newValue) { this.value * 2 }
// });

// console.log(object.test);

// object.test = 10;

// console.log(object.test);


// Object.defineProperties(object, {
	// "fullName": {
		// get: function () {
			// return this.firstName+" "+this.lastName;
		// },
		// set: function (newValue) {
			// this.firstName = newValue.split(" ") [0];
			// this. lastName = newValue.split(" ") [i];
		// }
	// }
// }


// var array = [0, 1];
// console.log("push 10:", array.push(10)); //3
// console.log(array); //[0,1,10]
	
// console.log("pop:", array.pop()); //10	
// console.log(array); //[0, 1]

// console.log("unshift 256:", array.unshift(256)); //3
// console.log(array); //[256, 0, 1]

// console.log("shift:", array.shift()); //256
// console.log(array); //[0, 1]


// var array = [0,1,2,3];
// array.splice(1,2,5,6,7,8); // [1,2]
// console.log(array); // [0,5,6,7,8,3]

// console.log(array.splice(1, 0, "test")); // []
// console.log(array); // [0, "test", 5, 6, 7, 8, 3]


// var string = "ab,bc,cd";
// console.log(string.split(",", 2)); // ["ab", "bc"]

// var url = "https://www.google.com/mail";
// var urlArray = url.split("/");
// console.log(urlArray);
// if (urlArray[urlArray.length - 1] === "mail") {
	// console.log("We are on email");
// }

// var objectString = "test:value, test2:value2";
// function stringToObject(string) {
	// var object = {};
	// var keysWithValues = string.split(",");
	// for (var i = 0; i < keysWithValues.length; i++) {
		// var keyAndValue = keysWithValues[i].split(":");
		// newObject[keyAndValue[0]] = keyAndValue[i];
	// }
	// return newObject;
// }
// console.log(stringToObject(objectString));

// var string = "Some string";
// console.log(string.split(""));

// var array = ["ab", "bc", "cd"];
// console.log(array.join());
// console.log(array.join("|"));

// console.log(["a", "b", "c", "d"].slice(1, 3)); // ["b", "c"]
// console.log(["a", "b", "c", "d"].slice(1)); // ["b", "c", "d"]
// console.log(["a", "b", "c", "d"].slice(-3, -1)); // ["c", "d"]


// console.log([1, 2, 19].sort()); // [1, 19, 2]

// var sortedArray = [1, 2, 15, 10, 9]
// sortedArray.sort(function (a, b) {
	// if (a < b)
		// return -1;
	// if (a > b)
		// return 1;
	
// })
// // sortedArray.sort(function (a, b) {
	// // return a - b;
// // })
// console.log(sortedArray);


// var arr = [1,2,3];
// arr.reverse();
// console.log(arr); // [3,2,1]

// var arr1 = [1,2,3];
// var arr2 = [3,4,5];
// var arr3 = ["test", "rest", "best"];
// console.log(arrl.concat(arr2, (), null, arr3));

// var object = {
	// "test": "rest";
// };
// var array = [1,"test", object];
// console.log(array.indexOf(1)); //0
// console.log(array.indexOf("test")); //1
// console.log(array.indexOf(object)); //2
// console.log(array.indexOf(1)); //0
// console.log(array.indexOf({"test": "rest"})); //-1
// console.log(array.lastIndexOf(1)); //3
// if (~array.indexOf("test"))
	// console.log("We have test in array");



// var array = ["test", 2, 25];
// var arrayofNumber = array.filter(function (element, index, array) {
	// return typeof element === "number";
// };
// console.log(arrayofNumber);


// var array = [1,2,3,4,5];
// var newArray = array.map(function (element, index, array) {
	// return element * 10;
// })
// console.log(array);
// console.log(newArray);


// var array = [25,456,345,"string];
// var isAllNumbers = array.every(function (element) {
	// return typeof element === "number";
// });
// console.log(isAllNumbers);
// array.pop();
// isAllNumbers = array.every(function (element) {
	// return typeof element === "number";
// });
// console.log(isAllNumbers);


// var array = [1,2,3,4,5];
// var summaOfNumbers = array.reduce(function (startValue, element, index, array) {
	// return startValue + element;
// }, 0);
// console.log(summaOfNumbers);







































