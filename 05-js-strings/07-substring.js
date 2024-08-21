
let str = 'TechGlobal';

// 1. get the substring at the beginning or in the middle
console.log(str.substring(0,4));// 'Tech' last index is not included we should go 1 index more
console.log(str.slice(0,4));


console.log(str.substring(4,7));// 'Glo' last index is not included we should go 1 index more
console.log(str.slice(4,7)); //'Glo'

//2. get the substring from any index and going all the way till the end
console.log(str.substring(4)); //'Global'
console.log(str.slice(4)); //'Global'

console.log(str.substring(str.length-3));//'bal'
console.log(str.substring(7)); // or hardcoded 'bal'

//Difference
let lan = 'JavaScript';
console.log(lan.slice(-6)); //Script

//get the last 3 characters
console.log(lan.substring(lan.length - 3)); //ipt

//get Sc from lan
console.log(lan.slice(4,6)); //Sc
console.log(lan.slice(-6,-4)); //Sc

console.log('TypeScript'.substring(-6,-4)); //empty -> substring() deos not work with negative index
console.log('TypeScript'.slice(-6,-4)) //Sc

/*
slice()
trim()
TASK: retrive a ssubstring from another string based on the given indexes
RETURN: returns a new substring
ARGUMENT: takes 1 or 2 index arguments, first starting included, second ending index excluded
NOTE: Slice will work with negative indexes as well
NOTE: if the left index is greater then the right index, then it returns empty string
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static


substring()
TASK: retrive a ssubstring from another string based on the given indexes
RETURN: returns a new substring
ARGUMENT: takes 1 or 2 index arguments, first one is the starting index incliuded, second ending is excluded
NOTE: it will work with negatived indexes and converts into 0
NOTE: if the left index is greater than the right index, it modifies to correct way and give you a meaningful substring.
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static
*/

console.log('Batch-10'.substring (-10,100)); //'Batch-10'
console.log('Batch-10'.substring (3,100)); //'ch-10'
