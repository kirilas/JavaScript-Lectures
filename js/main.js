// console.log("2 + 2 * 2 =", 2 + 2 * 2); // 6
// console.log("2 + 2 =", 2 + 2); // 4
// console.log("5 - 3 * 2 =", 5 - 3); // 2
// console.log("5 * 3 * =", 5 * 3); // 15
// console.log("5 % 3 =", 5 % 3); // 2
// var x = 25;
// console.log("-x ="); // -25

// var  y = '25';
// console.log("y =", y);  string '25'
// console.log("typeof y=");  // string 
// console.log("+y =", + y); // number 25;
// console.log("typeof =y", typeof +y); //number

// console.log("5 > 3 =", 5 > 3); // true;
// console.log("5 < 3 =", 5 < 3); // false;
// console.log("3 >= 3 =", 3 >= 3); // true;
// console.log("3 != '5' =", 3!= '5'); // true;
// console.log("5 !== '5' =", 5 !== '5'); // false;
// console.log("null == undefined =", null == undefined); // true;
// console.log("null == undefined =", null == undefined); // false;

// function test() {
	// return "test success!";
// }

// console.log(true && test() && "test" && "end of ands list") // "end of list";
// console.log(true && test() && 0 && "end of ands list") // 0;
// console.log(false && 6) // false;

// console.log(false || 6) // 6;
// console.log(true || 6) // true;
// console.log(false || "end" || 0) // "end";
// console.log("start" || true || 0) // "start";

// console.log("!0 =", !0) // true;
// console.log("!"" =', !"") // true;
// console.log("!"true because contains text" =, !"true because contains text") // false;
// console.log("!\"true because \\contains text\"", !"true because contains text") // false;
// console.log("!true ", !true) // false;
// console.log('!!"Im am string and I want to be bool" =', !!"Im am string and I want to be bool") // true;

// var x = (3, 4, 5);
// console.log(x); //5;

// var x = 10, y = 5, z = x + y; 
// console.log(z); // 15;
// console.log("undefined + 25 =", undefined + 25); // NaN;
// console.log("NaN == NaN =", NaN == NaN); // false;
// console.log("NaN === NaN =", NaN === NaN); // false;
// console.log(typeof NaN =", typeof NaN); // number;
// console.log("2 * (2 + 3) =", 2 * (2 + 3)); // 10;

// var x = 10;
// x--; // 10
// console.log(x); //9
// console.log(x--); //10

// var y = 10;
// --y; //9
// console.log(y); //9
// console.log(--y); //8


// console.log("'x' > 'y' =", 'x' > 'y') //false
// console.log("'x' > 'y' =", 'x' > 'y') //true
// console.log("'test' > 'tes' =", 'test' > 'tes') //true
// console.log("'test' > 'tes' =", 'test' > 'zes') //false
// console.log("'1' > '2' =", '1' > '2') //false
// console.log("'12' > '2' =", '12' > '2') //false
// console.log("+'12' > +'2' =", +'12' > +'2') //true

// console.log("'2' > 1 =", '2' > 1); //true
// console.log("'1.0' == 1 =", '1.0' == 1); //true
// console.log("true == 1", true == 1); //true
// console.log("false == 0 && false == '' =", false == 0 && false ==""); //true
// console.log("false == 0  =", false == 0); //true

// console.log("null == undefined =", null == undefined); //true
// console.log("null > 0", null > 0); //false
// console.log("null == 0", null == 0); //false
// console.log("null < 0", null < 0); //false
// console.log("null >= 0", null >= 0); //true
// console.log("null <= 0", null <= 0); //true

// rtue == ! "", !0, !false, !null, !undefined, !NaN, [], [],
// false == "", 0, false, null, undefined, NaN;



// if (true) {
	// console.log(true);
// }

// if (true)
	// console.log("1");


// if (25 && 0 || false) {
	// console.log("Success?");
// }else {
	// console.log("Not success :(");
// }

// var userName = 325; //OR "Vasya" || "Petya"
// if  (userName == "Vasya") {
	// alert("Hello admin "+name);
// }
// else if (typeof userName == "string") {
	// alert("Heloo user "+name);
// }
// else {
	// alert("You enter not a name!");
// }


// if (10 > 15) {
	// var x = "test";
// } else {
	// var x = "test";
// }

// //var x = /* if */10 > 15 ?/* then */ "test" : /* else */ "rest";
// var y = /* if */10 < 15 ?/* then */ "test" : /* else */ "rest";
// console.log(x); // "rest";
// console.log(y); // "test";
// var z = 10 > 15 ? "test" : true ? "last" : "best";
// console.log(z); // "last;"

// var x = "text";
// switch (x){
	// case: "text":
	// cosole.log("Action 1");
	// break;
	// case: "lost":
	// console.log("Action 2");
	// break;
	// case true:
	// console.log("Action 3");
	// break;
	// case 25:
	// console.log("Action 4");
	// break;
	// default:
	// console.log("Default action");
// }

// var x = '25'
// if (typeof x == "string" && x >= 25 || x != "some text") {
	// cosole.log("Action 1");
// }

// var x = [];
// if (typeof x == "array" && x[0] === undefined) {
	// cosole.log("Action 1");
// }
// else {
	// console.log("Nope, because typeof x =", typeof x);
// }


var x = 125, y = "";
if (x * 0) {
	cosole.log("Action 1");
	// console.log("Because any not defined entity is 'undefined'");
}
else if (!x + y) {
	console.log("Action 2");
	console.log(!x + y);
	//console.log("Nope, because typeof x =", typeof x");
}
else {
	cosole.log("Action 3");	
}


 
