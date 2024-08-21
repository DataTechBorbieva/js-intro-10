
let num1 = 6, num2 = 4;

//the sum 
console.log('The sum = ' + (num1 + num2)); //10

//substraction 
console.log('The substraction = ' + (num1 - num2)); //2

//multiplication
console.log('The product = ' + num1 *  num2); //24

//divison
console.log('The division = ' + num1 / num2); //1.5

//remainder 
console.log('The remainder = ' + num1 % num2); //2

//exponent 
console.log('The exponent = ' +  num1 ** num2 ); //1296

console.log('The sum = ', num1 + num2);
console.log('The substraction = ', num1 - num2);


console.log('\n----------------ES6 Backticks interpolation-------------------\n');
//ES6 backticks
console.log(`The sum = ${num1 + num2}`); //The sum = 10
console.log(`The result of ${num1} multiplied by ${num2} = ${num1 * num2}`); //The result of 6 multiplied by 4 = 24

let fullname = 'John Doe';
let age = 25;
let num = 5;

//The person is John Doe and age is '25'. S/he will turn to '30' in 5 years.
console.log(`The person is '${fullname}' and age is '${age}'. S/he will turn to '${age + num}' in ${num} years.`)



/*
Assume that you are given a rectangle with width = 5  and heigth = 8 

Calculate the area and perimeter of the rectangle

area = width * heigth
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/

let width = 5; let height = 8;

console.log(`The area is = ${width * height}`); //40
console.log(`The perimeter is = ${2 * width + 2 * height}`); //26
console.log(`The perimeter is = ${2 * (width + height)}`); //26

let area;
let perimeter;


console.log(`The ${area} is = ${area = width * height}`); //40
console.log(`The ${perimeter} is = ${2 * width + 2 * height}`); //26
console.log(`The ${perimeter} is = ${2 * (width + height)}`); //26
 

/**
 * Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week

 */

/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week  26 payments
*/

let salary = 120000;

let monthly = 12;
let weekly = 52;
let biWeekly = 26;

console.log(`Annual average salary = $${salary}.
    Monthly salary is = $${salary / monthly}.
    Weekly salary is = $${(salary / weekly).toFixed(2)}.
    Bi-weekly salary is = $${(salary / biWeekly).toFixed(2)}.`)