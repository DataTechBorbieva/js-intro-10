
// + operator is used for noth concatenation and addition
//concat is used for combining strings with strings or other data types

console.log( 3 + 2 + 1); // 6
console.log( 3 + 2 + '1'); // '51' its a string 
console.log( 3 + '2' + 1); // '321' all string 

//if number + nummber = addition
//if number + string = concat result is string
//if string + number = concat result is string
//string + string = concat result is string 

console.log( typeof('5' - 2)); // 3 number 
console.log( typeof('5' * '3')); // 15 number 
console.log('5apples' * 2); //NaN = Not a number
console.log(2 + 3 * 2 - 'Hello'); //NaN = Not a number

console.log( true + 5 ); //6  true boolean converts into 1
console.log( false * 5 ); //0 false boolean converts into 0

console.log( 'abc' + true); //abctrue
console.log( '123' + false); //123false

console.log('true' + 123); //true123