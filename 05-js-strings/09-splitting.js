
let items = 'Apples, Oranges, Bananas, Eggs, Milk';

console.log(items.split(',')); //removes coma only and returns array [ 'Apples', ' Oranges', ' Bananas', ' Eggs', ' Milk' ]
console.log(items.split(', ')); // [ 'Apples', 'Oranges', 'Bananas', 'Eggs', 'Milk' ]

let sent = 'I like JavaScript';
console.log(sent.split('like')); //[ 'I ', ' JavaScript' ]   -> splits from 'like'

console.log('10 | 20 | 30 | 40 | 50'.split(' | ')); //[ '10', '20', '30', '40', '50' ]

//count how many words string has
let str = 'I like JavaScript more than Java';
console.log(str.split(' ').length); //6
console.log(str.split('')); 
 /* [
    'I', ' ', 'l', 'i', 'k', 'e',
    ' ', 'J', 'a', 'v', 'a', 'S',
    'c', 'r', 'i', 'p', 't', ' ',
    'm', 'o', 'r', 'e', ' ', 't',
    'h', 'a', 'n', ' ', 'J', 'a',
    'v', 'a'
  ]
*/

console.log(str.split(' ', 3));// [ 'I', 'like', 'JavaScript' ] 


/*
TASK: used to split the string into array elements with the given separator
RETURN: returns an array of elements
ARGUMENT: takes a string argument as separator, an optional limit argument
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static

*/

console.log(Array.isArray(str)); //false -> because its string

