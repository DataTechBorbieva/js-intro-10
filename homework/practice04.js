const { getRandomNumber } = require('../utils/MathHelper.js');

//generate 2 random numbers between 0 and 1 and return true if both are 1 and 0/  and false if numbers are different


console.log('--------------Task-01-----------------');

let t1Num1 = get.getRandomNumber(0,1);
let t1Num2 = get.getRandomNumber(0,1);

if ((t1Num1 === 1 && t1Num2 === 1) || (t1Num1 === 0 && t1Num2 === 0)) console.log(true);
console.log(false);

//Akins short way
if (t1Num1 === t1Num2) console.log(true);
console.log(false);

//Akins best way
console.log(t1Num1 === t1Num2);

console.log('--------------Task-02-----------------');

/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"


Test data 1:
"v"

Expected result 1:
"v" is a letter

Test data 2:
"5"

Expected result 2:
"5" is a digit

Test data 3:
"@"

Expected result 3:
INVALID INPUT
*/

let t2character = '8'; // 

let t2CharacterASCII = t2character.charCodeAt(0); 

if(t2CharacterASCII >= 48 && t2CharacterASCII <= 57) {
    console.log(`"${t2character}" is a digit`);
}
else if ((t2CharacterASCII >= 65 && t2CharacterASCII <= 90) || (t2CharacterASCII >= 97 && t2CharacterASCII <= 122)) {
    console.log(`"${t2character}" is a letter`);
}
else {
    console.log('INVALID INPUT');
}


console.log('--------------Task-03-----------------');
/*
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter


Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter


Test data 4:
" "

Expected result 4:
"INVALID INPUT"

32         Space
48-57      [0-9]
65-90      [A-Z]
97-122     [a-z]
rest is special characters
*/

let t3character = 'S';

let t3characterASCII = t3character.charCodeAt(0);
//if... else if ... else 
if (t3characterASCII >= 65 && t3characterASCII <= 90) console.log(`${t3characterASCII} is an uppercase`);
else if(t3characterASCII >= 97 && t3characterASCII <= 122) console.log(`${t3characterASCII} is a lowercase`);
else console.log('Invalid input');

// nested if...else
if((t3ASCII >= 65 && t3ASCII <= 90) || (t3ASCII >= 97 && t3ASCII <= 122)) {
    if(t3ASCII <= 90) console.log(`"${t3character}" is an uppercase letter`);
    else console.log(`"${t3character}" is a lowercase letter`);
}
else {
    console.log("INVALID INPUT");
}

console.log('--------------Task-04-----------------');
/*
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/

let t4character = '<';
let t4ASCII = t4character.charCodeAt(0);
if((t4ASCII >= 65 && t4ASCII <= 90) || (t4ASCII >= 97 && t4ASCII <= 122) || (t4ASCII >= 48 && t4ASCII <= 57) || t4ASCII === 32) {
    console.log(`"${t4character}" is not a special character`);
}
else {
    console.log(`"${t4character}" is a special character`);
}

console.log('--------------Task-05-----------------');

/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a" is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N" is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t5character = 'U';

let t5charASCII = t5character.charCodeAt(0);
if((t5charASCII >= 65 && t5charASCII <= 90) || (t5charASCII >= 97 && t5charASCII <= 122)) {
    t5character = t5character.toLowerCase();
    if (t5character === 'a' || t5character === 'e' || t5character === 'i' || t5character === 'o' || t5character === 'u') {
        console.log(`"${t5character}" is a vowel`);
    }
    else {
        console.log(`"${t5character}" is not a vowel`);
    }
}
else {
    console.log("INVALID INPUT");
}




let t5ASCII = t5character.charCodeAt(0);
if((t5ASCII >= 65 && t5ASCII <= 90) || (t5ASCII >= 97 && t5ASCII <= 122)) {
    if ('aeouiAEOUI'.includes(t5character)) {
        console.log(`"${t5character}" is a vowel`);
    }
    else {
        console.log(`"${t5character}" is not a vowel`);
    }
}
else {
    console.log("INVALID INPUT");
}