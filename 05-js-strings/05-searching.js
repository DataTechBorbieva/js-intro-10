
//startsWith() vs endsWith() vs includes()

let str = 'TechGlobal';
console.log(str.startsWith('Hi')); //false
console.log(str.startsWith('Tech')); //true
console.log(str.startsWith('T')); //false
console.log(str.startsWith('t')); //false

//str.toLowerCase().startsWith('tech'); //true

console.log(str.startsWith('')); //true -> starts with empty string

console.log(str.endsWith('apple')); //false
console.log(str.endsWith('obal')); //false
console.log(str.endsWith('la')); //false
console.log(str.endsWith('l')); //true
console.log(str.endsWith('Global')); //true
console.log(str.endsWith('')); //true

console.log(str.includes('G')); //true
console.log(str.includes('oab')); //false
console.log(str.includes('')); //true
console.log(str.includes('Tech')); //true
console.log(str.includes('gloab')); //false

/*
startsWith()
TASK: checks if the string starts with another substring
RETURN: boolean
ARGUMENT: takes a sub-string as an argument 
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static


endsWith()
TASK: checks if the string ends with another substring
RETURN: boolean
ARGUMENT: takes a sub-string as an argument 
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static


includes()
TASK: checks if the string contains/ includes substring
RETURN: boolean
ARGUMENT: takes a substring as an argument 
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static
*/

//indexOf() vs lastIndexOf()

let message = 'Can I can a can?';
console.log(message.charAt(4)); //I
console.log(message.indexOf('I')); //4
console.log(message.indexOf('?')); //15

console.log(message.indexOf('can')); //6 -> it will look for the first match , and returns only 1 index
console.log(message.lastIndexOf('can')); //12 last 'can'


console.log(message.indexOf('Can')); //0 
console.log(message.lastIndexOf('Can')); //0 

console.log(message.lastIndexOf('A')); //-1
console.log(message.indexOf('CAN')); //-1
console.log(message.indexOf('apple')); //-1
console.log(message.indexOf('')); //0
console.log(message.lastIndexOf('')); //16

/*

indexOf()
TASK: checks if the string contains/ includes substring 
RETURN: returns the first index of the first found match
NOTE: if does not match or it can not find the substring within the original string it returns -1
ARGUMENT: takes a substring as an argument 
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static

lastIndexOf()
TASK: checks if the string contains/ includes substring 
RETURN: returns the first index of the last found match
NOTE: if does not match or it can not find the substring within the original string it returns -1
ARGUMENT: takes a substring as an argument 
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static

*/