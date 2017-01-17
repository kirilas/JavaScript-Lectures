function getRandomlnt(min, max) {
	return Math.floor(Math.random()*(max-min+1))+min;
}


// function blockGlower(width, height){
  
 // var w = parseFloat(width);
 // var h = parseFloat(height);
 
 // var wEnd = width.slice((""+w).length);
 // var hEnd = width.slice((""+h).length);
 
 // return 'width:' + w*1.5 + wEnd + ',' + 'height:' + h*1.5 + hEnd +',';
// }

// console.log(blockGlower("12px", "20%"));


// function getTwoNumbers() {
	// var arr = [];
	// var result = [];
	// for (var i = 0, i < 5, i++);
	
// }





// function checkNumberType(number){
  // return number%1==0?"integer":"float";
// }
// console.log(checkNumberType(243));
// console.log(checkNumberType(24.3));


// function getRandomParts(string) {
	// var start = getRandomInt(0, (string.length - 1));
	// var end = getRandomInt(0, (string.length - 1));
	// return string.substring(start, end);
// }

// console.log(getRandomParts('abcd'));

// function getRandomPart(string){
 
 // var result = '',
  // arr = [];
  
 // for (var i = 0; i < 2; i++) {
  // arr. push(getRandomint(0, string.length));
 // }

 // arr.sort();
 
 // result = string.slice(arr[0], arr[1]);
 
 // return result;
  
// }

// console.log(getRandomPart('string'));

function getTwoSymbols(string){
    var value1 = getRandomInt(0,string.length);
    var value2 = getRandomInt(0,string.length);  
    var stringArray = string.split("");
    var symbol1,symbol2;
    symbol1 = stringArray[value1];
    symbol2 = stringArray[value2];

    return symbol1.toLowerCase() === symbol2.toLowerCase() ? symbol1:symbol1+symbol2;

}

console.log(getTwoSymbols("tshis is a string"));

























