const {getRandomNumber} = require('../utils/MathHelper.js');

console.log('\n---------------TASK-1-----------------\n');
/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.

Test data 1:
20, 70, 25

Expected Output 1: 
false

Test data 2:
65, 80, 90

Expected Output 2: 
true

*/
let r1 = getRandomNumber(1, 100);
let r2 = getRandomNumber(1, 100);
let r3 = getRandomNumber(1, 100);

console.log(r1, ' ' + r2, ' ' + r3);
//if else
if((r1 + r2 + r3) / 3 >= 50) console.log('true');
else console.log('false');

//with ternary 
console.log((r1 + r2 + r3) / 3 >= 50 ? 'true' : 'false');


console.log('\n---------------TASK-2-----------------\n');
/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print "NO MATCH"
-If any of those 2 numbers are equal, then print "DOUBLE MATCH"
-If all 3 numbers are equal, then print "TRIPLE MATCH"

Test data 1:
3, 3, 3

Expected Output 1: 
TRIPLE MATCH

Test data 3:
1, 2, 3

Expected Output 3: 
NO MATCH

Test data 4:
1, 1, 2

Expected Output 4: 
DOUBLE MATCH

*/
let num1 = getRandomNumber(1, 3);
let num2 = getRandomNumber(1, 3);
let num3 = getRandomNumber(1, 3);

console.log(num1,+' ' + num2,+' ' + num3);


if(num1 === num2 && num2 === num3 && num1 === num3) console.log('TRIPLE MATCH');
else if(num1 !== num2 && num2 !== num3 && num1 !== num3) console.log('NO MATCH');
else console.log('DOUBLE MATCH');


console.log('\n---------------TASK-3-----------------\n');
/*
Requirement:
Write a function named as hasA() which takes a string word as an argument and returns true
 if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true
*/
function hasA(str) {
    if(str.toLowerCase().includes('a')) return 'true';
    return 'false';
}

console.log(hasA('Tech'), hasA('Air')); //false, true


console.log('\n---------------TASK-4-----------------\n');
/*
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument
 and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.


Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple"
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"
*/

function doubleOrTripleWord(str) {
    if(str.length % 2 === 0) return str.repeat(3);
    
    return str.repeat(2);
}
console.log(doubleOrTripleWord('Tech')); //TechTechTech
console.log(doubleOrTripleWord('Joe')); //JoeJoe



console.log('\n---------------TASK-5-----------------\n');
/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument and 
returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.


Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		-> "Hello"
firstWord("") 		-> ""
firstWord("    ") 		-> ""

*/
function firstWord(str) {
if (str.length > 0) 
    array = str.split(' ');
    return array[0] ;
}

console.log(firstWord('Hello World')); //Hello -> could not think of returning empty string, need more time,will get back to it later


console.log('\n---------------TASK-6-----------------\n');
/*
Requirement:
Write a function named as lastWord() which takes a string word as an argument 
and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.


Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript"
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/

function lastWord(str) {
    if(str.length > 0)
    return str.split(' ').at(-1);
}

console.log(lastWord('Hello TechGlobal'));


console.log('\n---------------TASK-7-----------------\n');
/*
Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument 
and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.


Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript"
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""

*/
function firstlastWord(str) {
   let array = str.split(' ');
   return array[0] + ' ' + array.at(-1); 
   return'';//also need to return empty , will need to think more, and i have a bad internet connection
}

console.log(firstlastWord('Data likes JavaScript'));

console.log('\n---------------TASK-8-----------------\n');
/*
Requirement:
Write a function named as startVowel() which takes a string word as an argument 
and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false

*/
function startVowel(str) {
   
   if (str.toLowerCase().at(0).startsWith('a') ||  
   str.toLowerCase().at(0).startsWith('e') ||
   str.toLowerCase().at(0).startsWith('o') ||
   str.toLowerCase().at(0).startsWith('u'))
     return true;
     return false;
}

console.log(startVowel('hello')); //false
console.log(startVowel('Apple')); //true

console.log('\n---------------TASK-9-----------------\n');
/*
Requirement: 
Write a function named as swap4() which takes a string word as an argument 
and returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.


Examples:
swap4("abc") 	-> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 		-> ""
swap4("    ") 		-> ""
swap4("Apple") 	-> ""

*/
function swap4(str) {
   let first4 = str.slice(0, 4);
   let last4 = str.slice(-4);
   let mid = str.slice(4, str.slice(-4));

   if (str.length >= 8) {
    return last4 + mid + first4;
   }
    return '';
}

console.log(swap4('JavaScript'));//riptJava
console.log(swap4('DatkaiymBorbieva'));//ievaDatk
console.log(swap4('apple'));//empty


console.log('\n---------------TASK-10-----------------\n');
/*
Requirement: 
Write a function named as swapFirstLastWord() which takes a string word
 as an argument and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.


Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/
function swapFirstLastWord(str) {
    if(str.length >= 2){
    let firstWord = str.split(' ').at(0)
    let lastWord = str.split(' ').at(-1)
    let midWord = str.slice(str.indexOf(' '), str.lastIndexOf(' '));
    let str2 = lastWord + midWord +' '+ firstWord;
    return str2;
    }
    return '';
}

console.log(swapFirstLastWord('Datkaiym likes JavaScript'));
console.log(swapFirstLastWord('Datkaiym JavaScript'));
console.log(swapFirstLastWord('Ad')); //this one is also not passed , need more time, it should be empty string 