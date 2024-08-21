/*
create a function wchih prints 'Hi when invoked
*/
//this is a void (0) argument function
function sayHi() { 
    console.log('Hi');
}

sayHi(); //'Hi'

/*
create a function which takes a string name as an argument and it returns 'Hello {name}!'
*/

function sayHello(name){
   return `Hello, ${name}`;
}

let result = sayHello('Bermet');
console.log(result);  //Hello, Bermet

/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greeting}, {name}!'

greet('Good Morning', 'John'); // Output: 'Good Morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
greet('Hi', 'Hicran'); // Output: 'Hi, Hicran!'
*/

function greet(str1, str2){
    console.log(`${str1}, ${str2}!`);
}

let n1 = 'Hello', n2 = 'Ali';
greet(n1,n2);



/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/
function sum(num1,num2){
    return num1 + num2;
 }

 console.log(sum(3, 6)); //9

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

 function product(num1, num2, num3){
    return num1 * num2 * num3;
 }

 let n4 = 1, n5 = 2, n6 = 3;

 console.log(product(n4 ,n5, n6));