
// property access  with[] vs charAt() vs codeCharAt() vs at()

let str = 'TechGlobal';

console.log(str [0]); //'T'
console.log(str.charAt(0)); //'T'
console.log(str.charCodeAt(0)); //84
console.log(str.at(0)); //'T'

//get the last character
console.log(str[str.length - 1]); 
console.log(str.charAt(str.length -1));
console.log(str.at(str.length -1)); 

let city = 'Rome';// 0 1 2 3

console.log(city[-1]);  //undefined
console.log(city.charAt(-1)); //''
console.log(city.at(-4)); // 'e' -> last character
console.log(city.at(-8)); // undefined

console.log(city[4]);  //undefined
console.log(city.charAt(4)); //''
console.log(city.at(4)); // undefined
console.log(city.at(8)); //undefined

/*
[] property access is the most used when getting characters starting from the left index(0)
 [0] returns the first character
 [1] returns the second character
 at() method is useful getting charactdrs starting from left index using negative indices
 at(-1) returns the last character
 at(-2) returns the second last character

[] property  access
 TASK: gets a single character from the string using an index
 RETURN: returns the single character as a string 
 NOTE: it returns undefined if the given index is not valid for the string
 CHANGE ORIGINAL VALUE: does not modify the original value


 charAt() method
 TASK: gets a single character from the string using an index
 RETURN: returns the single character as a string 
 NOTE: it returns empty string ('') if the given index is not valid for the string
 CHANGE ORIGINAL VALUE: does not modify the original value
 STATIC - NON - STATIC : non - static


 charCodeAt() method
 TASK: gets a single character's Unicode - ASCII decimal representation from string using an index 
 RETURN: returns the single character's Unicode - ASCII decimal representation  as a number 
 NOTE: it returns NaN
 CHANGE ORIGINAL VALUE: does not modify the original value
 STATIC - NON - STATIC : non - static
*/