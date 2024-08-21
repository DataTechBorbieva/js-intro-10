
//Get a random number bt 0 and 10 -> 0 inclusive and 10 exlusive

let ranNum = Math.random() * 10;


console.log(ranNum); //1.0031573423269347
console.log(Math.floor(ranNum)); //1
console.log(Math.ceil(ranNum)); //2
console.log(Math.round(ranNum)); //1
console.log(Math.trunc(ranNum)); //1

//Get a random number bt 1 and 10 -> both inclusive

let ranNum1_10 = Math.random() * 10;

console.log(Math.ceil(ranNum1_10)); //1 and 10 both inclusive

//Get a random number between 0 and 25 -> both inclusive

/*
RULE: you can use bellow steps only when your range starts with 0
1.generate a random number between 0 and 1
2.multiply this number with the count of desired number  (how many numbers you can get in your range)
largerNumber - smallerNumber + 1 => 25 - 0 + 1 = 26
3.Floor the result 

*/

//let ranNum0_25  = Math.random() * 25;

let ranNum0_25 = Math.floor(Math.random() * 26);
console.log(Math.round(ranNum0_25));

//get a random number between 13 and 27 both inclusive

/*
RULE: you can use below steps if your range does NOT start with ZERO!
1.generate a random number between 0 and 1
2.multiply this number with the count of desired numbers ( how many numbers you can get in your range)
largerNumber - smallerNumber + 1 => 27 - 13 + 1 => 15
3.Floor the result
4.add smaller number to the flooredresult

Math.floow(Math.random() * (max - min + 1)) + min


*/


let runNum13_27 = Math.floor(Math.random() * 15) +13;

console.log(ranNum13_27);

//get a random number between 943 and 1005 -> both included

let r1 = Math.floor(Math.random() * (1005 - 943 + 1) + 943);

//get a number between 14 and 19 -> 14 inclusive , 19 exclusive

console.log(Math.floor(Math.random() * (18 - 14 + 1) + 14));
 



// FORMULA
//  console.log(Math.floor(Math.random() * range) + startNumber);

//generate random  from 111 - 126 both included
console.log(Math.floor(Math.random() * 16) + 111);

//generate a random number between 1 and 50 thoth inclusive
//if the random number is divisible by 7 print true
//if the random is NOT divisible by 7 print false
let ran = Math.floor(Math.random() * 50) + 1;
console.log(ran)
console.log(ran % 7 === 0);