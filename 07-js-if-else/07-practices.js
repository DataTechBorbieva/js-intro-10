
const{getRandomNumber} = require('../utils/MathHelper.js');

/*
Generate a random number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated number is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/
console.log('\n---------------TASK-1-----------------\n');

let r1 = getRandomNumber(-10, 10);
console.log('Random number is = ', r1);

if(r1 > 0) console.log('The number is POSITIVE');
else if (r1 < 0) console.log('The number is NEGATIVE');
else ('The number is ZERO');

console.log('\n---------------TASK-2-----------------\n');

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

// way 1
let r2 = getRandomNumber(1, 12);
console.log('My random number is = ',r2);
if (r2 === 12 || r2 === 1 || r2 === 2) console.log('Winter');
else if (r2 === 3 || r2 === 4 || r2 === 5) console.log('Spring');
else if (r2 === 6 || r2 === 7 || r2 === 8) console.log('Summer');
else console.log('Fall');

//with ternary
let season = 
(r2 === 12 || r2 === 1 || r2 === 2) ? 'Winter' :
(r2 === 3 || r2 === 4 || r2 === 5) ? 'Spring' :
(r2 === 6 || r2 === 7 || r2 === 8) ? 'Summer' : 'Fall';
console.log('Season is = ', season);

// way 2
if(r2 >= 3 && r2 <= 5) console.log('Spring');
else if (r2 >= 6 && r2 <= 8) console.log('Summer');
else if (r2 >= 9 && r2 <= 11) console.log('Fall');
else console.log('Winter');



