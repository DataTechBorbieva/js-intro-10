
//*Assume given string of any legth
//get the last 5 chars from it

let str1 = 'Morning', str2 = 'Saturday', str3 = 'Hello';
console.log(`
Morning   -> ${str1.slice(-5)}
Saturday  -> ${str2.slice(-5)}
Hello     -> ${str3.slice(-5)}`);

console.log(str1.slice(str1.length-5));
console.log(str1.substring(str1.length-5));

if(str1.length < 5) throw Error('This string does not have 5 characters!');
else console.log(str.slice(-5));

//get the first 3 chars and the last 3 chars
//then concat them i new string
//JavaScript, Hello, '123'
let str = 'Hello';
console.log(
`Hello   -> ${str.slice(0,3) + str.slice(-3)}`)


function firLas3Chars(str){
    if (str.length < 3) throw Error('This string has less than 3!!!');
else return str.slice(0,3) + str.slice(-3);
}

console.log(firLas3Chars('Sunday'));
console.log(firLas3Chars('Tatyana')); 
console.log(firLas3Chars('Hi')); 
