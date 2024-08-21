

console.log('\n--------------------TASK01--------------------');

/*
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

*/

let str1 = "5", str2 = "2";
console.log(`
The sum of 5 and 2 is = ${Number(str1) + Number(str2)}
The product of 5 and 2 is = ${Number(str1) * Number(str2)}
The division of 5 and 2 is = ${Number(str1) / Number(str2)}
The subtraction of  5 and 2 is = ${Number(str1) - Number(str2)}
The remainder of 5 and 2 is = ${Number(str1) % Number(str2)}
The exponentiation of 5 and 2 is = ${Number(str1) ** Number(str2)}
    `);

console.log('\n--------------------TASK02--------------------');

/*
Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250
*/

let s1 = "200", s2 = "-50";
console.log(`
The greatest value is = ${Math.max(Number(s1),Number(s2))}
The smallest value is = ${Math.min(Number(s1),Number(s2))}
The average is = ${(Number(s1) + Number(s2)) / 2}
The absolute difference is = ${Math.abs(Number(s1) - Number(s2))}
    `);


console.log('\n--------------------TASK03--------------------');
/*
Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/
//Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`
The absolute difference between numbers is = ${Math.abs(Math.floor(Math.random() * (50 - 1 + 1) + 1 ) - 
    Math.floor(Math.random() * (50 - 1 + 1)) + 1)}
`);

console.log('\n--------------------TASK04--------------------');

/*Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers.
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3 
*/

let n1 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let n2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let n3 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let n4 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let n5 = Math.floor(Math.random() * (50 - 1 + 1) + 1);

console.log(`
The max value = ${Math.max(n1, n2, n3, n4, n5)}
The min value = ${Math.min(n1, n2, n3, n4, n5)}
     `);


console.log('\n--------------------TASK05--------------------');

/*
Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/
////Math.floor(Math.random() * (max - min + 1)) + min;

let ranNum1 = Math.floor(Math.random() * (100 - 50 + 1) + 50),
ranNum2 = Math.floor(Math.random() * (100 - 50 + 1) + 50),
ranNum3 = Math.floor(Math.random() * (100 - 50 + 1) + 50);

console.log(`
The number 1 = ${ranNum1}
The number 2 = ${ranNum2}
The number 3 = ${ranNum3}
The sum of numbers is = ${ranNum1 + ranNum2 + ranNum3}
    `)


    
console.log('\n--------------------TASK06--------------------');

/*
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.
*/
//Math.floor(Math.random() * (max - min + 1)) + min;

let ranNumber1 = Math.floor(Math.random() * (100 - 1 + 1) + 1),
ranNumber2 = Math.floor(Math.random() * (100 - 1 + 1) + 1),
ranNumber3 = Math.floor(Math.random() * (100 - 1 + 1) + 1);

if (ranNumber1 > 25 && ranNumber2 > 25 && ranNumber3 > 25) 
    return console.log('true') ; 
else return console.log('false');

console.log('\n--------------------TASK07--------------------');

/*
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = "David"; 
console.log(`
The length of the name is = ${name.length}
The first character in the name is = ${name.charAt(0)}
The last character in the name is = ${name.charAt(name.length -1)}
The first 3 characters in the name are = ${name.slice(0,3)}
The last 3 characters in the name are =  ${name.slice(-3)}
    `);