
const {getRandomNumber} = require('../utils/MathHelper.js');

/*Generate a random number between 1 and 100 both inclusive
And check if the number is 7
if its 7, print true
otherwise false

Pseudo Code:
1. generate a random number
2. check if it is 7 or not
3. depending on condition print the result */
console.log('-------------TASK-01----------------');

let r1 = getRandomNumber(1, 10); 
console.log('Random number = ', r1 );

if (r1 === 7) console.log(true);
else  console.log(false);

(r1 === 7) ?  console.log(true) : console.log(false);

//or console.log(r1 === 7); 

// another way of using ternary operator for assignment
let result = r1 === 7 ? true : false;
console.log(result);

let gender = '';
let name = gender === 'female' ? 'Jane' : 'John';
console.log(name); 


console.log('-------------TASK-02----------------')
let r2 = getRandomNumber(1, 10); 
if(r2 % 2 === 0) console.log('EVEN');
else console.log('ODD');


(r2 % 2 === 0) ? console.log('EVEN') : console.log('ODD');

let resultEvenOdd = r2 % 2 === 0 ? 'EVEN' : 'ODD';
console.log(resultEvenOdd);

console.log(r2 % 2 === 0 ? 'EVEN' : 'ODD');

