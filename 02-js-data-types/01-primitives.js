//string

let name = "John";
console.log(name); //John
console.log(typeof name); // string

//number 
let num1 = 10; //absolute number
let num2 = 3.14; //floating / decimal number
console.log(num1, num2);
console.log(typeof num1, typeof num2);

//boolean: are used with if else condition
let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5;

let isUserNameCorrect = 'admin' === 'johndoe';

console.log(isRainy); //false
console.log(isAuthenticated); //true
console.log(result); //false
console.log(isUserNameCorrect); //false

console.log (typeof isAuthenticated, typeof result); //boolean

//undefined vs null
let className1; //undefined
let className2 = undefined; //undefined

let courseName = null; //null

console.log(typeof courseName, typeof className2); //object / undefined

courseName = 'Batch-10';
className2 = 'SDET';

console.log(typeof courseName, typeof className2);  //string //string

let address = 'Chicago';
console.log(typeof address); //string

address = 12345;
console.log(typeof address); //number

//bitInt

let n1 = 4859933002048857389390050838n;
let n2 = BigInt("5749393008548493959595");
console.log(n1 , n2);

console.log(typeof n1 ,typeof n2);

console.log(Number.MAX_SAFE_INTEGER); // biggest safe integer 
console.log(Number.MIN_SAFE_INTEGER); //negative  safe integer


let safeMaxInt = 9007199254740991; 
let safeMinInt = -9007199254740991;

//symbol

let s1 = Symbol ('UA');

console.log(s1);

console.log(typeof s1);






