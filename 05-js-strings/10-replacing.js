
//replace orange with apple

let str = "I like apple and pineapple";

let strR1 = str.replace('apple', ' orange');

console.log(strR1); //I like  orange and pineapple

//replace all apple occurrences with orange

let strR2 = str.replaceAll('apple', 'orange');

console.log(strR2); //I like orange and pineorange

/*
TASK: used to replace an occurence of a substring within the original String
RETURN: it returns a new string  with the replaced value
ARGUMENTS: takes 2 argumnets (target string to be replaced ) and source: is the new value
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non - static

the only difference between replace() replaceAll()

*/
