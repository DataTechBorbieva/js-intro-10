

console.log('----------------TASK-01-----------------');

/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript"
"I don't like books"                                -> "I like books"
*/
let sentence1 = "I like apples and oranges" ;
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

let array1 = sentence1.split(' ');
let array2 = sentence2.split(' ');
let array3 = sentence3.split(' ');



console.log(sentence1.slice(7, 12).toUpperCase());
console.log(sentence2.slice(0, 4) + sentence2[14].toUpperCase() + sentence2.slice(15, 20));
console.log(sentence3.replace(" don't", ''));


/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters     
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/


let s1 = 'JavaScript';

console.log(
    `
The length is = ${s1.length}
The first char is = ${s1[0]}
The last char is = ${s1.slice(-1)}
    `);

s1.toLowerCase();
console.log(s1.includes('a') || s1.includes('e') ||  s1.includes('i') ||  s1.includes('o') || s1.includes('u'));




console.log('----------------TASK-03-----------------');



/*
Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1:
let s2 = "x";

Expected Result 1:
"x"


Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"


Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"

*/

//find middle of an odd string

let s0 = 'civic';


let s2 = 'civic';
console.log(s2[(s2.length - 1) / 2]);
console.log(s2[Math.floor(s2.length - 1) / 2]);
console.log(s2[Math.trunc(s2.length - 1) / 2]);
console.log(s2[Math.parseInt(s2.length - 1) / 2]);

console.log('----------------TASK-04-----------------');

//find middle of an even string

let s4 = 'banana';
console.log(s4[s4.length / 2 - 1] + (s4[s4.length / 2]));

console.log(s4.slice(s4.length / 2 - 1, s4.length / 2 + 1 )); //'na' -> middle of string


console.log('----------------TASK-05-----------------');

/*
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""


Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc"


Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"
*/


/*
TASK 05
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters


Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 


Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

//let s5 = "";

//get middle of a string when string is at least 4 chars 
let s5 = "JavaScript";
console.log(` 
The first 2 characters are = ${s5.substring(0,2)}
The last 2 characters are = ${s5.slice(-2)}
The other characters are = ${s5.slice(2,s5.length -2)}
`);


let s8 = 'We like Apple';
let firstWord = s8.slice(0,s8.indexOf(' '));
let lastWord = s8.slice(s8.lastIndexOf(' ') + 1);
let middleWorld = s8.slice(s8.indexOf(' ') + 1, s8.lastIndexOf(' '));
console.log(lastWord + ' ' + middleWorld + ' ' + firstWord); //Apple like We

/*
TASK 10
Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1:
let s9 = "Good morning";

Expected Result 1:
2


Test Data 2:
let s9 = "Hello";

Expected Result 2:
1


Test Data 3:
let s9 = "I like Apple";

Expected Result 3:
3



Test Data 4:
let s9 = "JavaScript is nice to learn";

Expected Result 4:
5
*/

console.log('----------------TASK-09-----------------');
//find how many words in a string

let s9 = "JavaScript is nice to learn and fun i hope to get a nice job";

console.log(s9.split(' ').length);
 


console.log('----------------TASK-10-----------------');

//find how many words in a string
let s10 = 'I like Apple';//12
console.log(s10.length); 
console.log(s10.length - s10.replaceAll(' ','').length + 1) //3 words // spaces + 1



console.log('----------------TASK-06-----------------');
/*
Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.

Test Data 1:
let s5 = "ab";;

Expected Result 1:
true

Test Data 2:
let s5 = "abcd";

Expected Result 2:
false

Test Data 3:
let s5 = "12ab12";;

Expected Result 1:
true

Test Data 4:
let s5 = "JavaScript";

Expected Result 4:
false
*/

let s6 = "cake";
let firstTwoChars = s6.slice(0,2);
let lastTwoChars = s6.slice(-2);
console.log(firstTwoChars === lastTwoChars); 





console.log('----------------TASK-07-----------------');
/*
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 
Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2:
23ree */

let str1Task6 = "1234";
let str2Task6 = "Green";

console.log(str1Task6.slice(1,str1Task6.length-1) + str2Task6.slice(1,str2Task6.length-1)); //23ree

console.log('----------------TASK-08-----------------');
/*
Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false
Test Data 2:
let s7 = "red";
Expected Result 2:
false
Test Data 1:
let s7 = "";
Expected Result 1: */

let s7 = "xxredxx";
console.log(s7.startsWith('xx') && s7.endsWith('xx'));






