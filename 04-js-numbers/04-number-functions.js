
let num = 10;
console.log(num); //10
console.log(num.toString()) //10
console.log(typeof num.toString()); //string

console.log(num + 5 ); //15
console.log(num.toString() + 5 ); //105

// toFixed() vs toPrecision()

console.log((123.23).toFixed(1)); //123.2
console.log((123.23).toPrecision(1));

console.log((10.951).toFixed(2)); //10.95
console.log((10.957).toFixed(2)); //10.96 rounds up

console.log((10.957).toPrecision(2)); //11 rounds up to bigger

//converting other values (data types) to numbers

let n1 = '5', n2 = '3';

console.log(n1 + n2); //'53'
console.log(Number(n1) + Number(n2)); //8 converted string 5 and 3 to number
console.log(parseInt(n1) + parseInt(n2)); //8
console.log(parseFloat(n1) + parseFloat(n2)); //8

let num1 = '5.1', num2 = '5.2';

console.log(num1 + num2); //5.15.2
console.log(Number(num1) + Number(num2)); //10.3
console.log(parseInt(num1) + parseInt(num2)); //10
console.log(parseFloat(num1) + parseFloat(num2)); //10.3

console.log(Number.parseFloat(num1) + Number.parseFloat(num2));

//isFinite
console.log(isFinite(5)); //true
console.log(isFinite(Infinity)); //false
console.log(isFinite(-Infinity)); //false

//isInteger(), isSafeInteger();
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

console.log(Number.isInteger(5)); //true
console.log(Number.isInteger(5.1)); //false

console.log(Number.isInteger(598489300203848490038294)); //true
console.log(Number.isSafeInteger(598489300203848490038294)); //false

