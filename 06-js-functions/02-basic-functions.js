

/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false

EVEN: number is divisible by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0
*/

function isEven(number){
    if (number % 2 === 0 )
        return true;
    else return false;
}

console.log(isEven(4));

function isEven(number){
return ({})
}

/*  AKIN's WAY
function isEven(num){
return num %2 ===0;
}

console.log(isEven(5)); false , because === is returning true or false
*/


/*
Write a function named initials which takes 2 arguments as fname and lname and return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/

function initials(str1, str2){
    return  ` '${str1.charAt(0)}.${str2.charAt(0)}.'`
};

/*
function initials(str1, str2){
    return  ` '${str1.[0]}.${str2.charAt[0]}.'`
};
*/
let str1 = 'Alex', str2 = 'John';
console.log(initials(str1,str2)); // 'A.J.'

function inits(str){
let array = str.split(' ')
return `'${array[0].charAt(0)}${array[1].charAt(0)}'`
//array[0][0] + words[1][0].toUpperCase()
}
let str = 'Alex Smith'
console.log(inits(str)); //'AS'


/* AKIN's WAY
function inits(fullName){
fullName[0].toUpperCase() + fullName[fullName.indexOf(' ') + 1].toUpperCase();
}
*/


/*
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included 
Be careful as the numbers given can be different considering min, max

getRandomNumber(3, 5)       -> 
getRandomNumber(5, 3)       -> 
getRandomNumber(-5, 15)     -> 
*/
//Math.floor(Math.random() * (max - min + 1)) + min;

function getRandomNumber(num1, num2){
    if (num1 > num2)
        return Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
    else return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

}

console.log(getRandomNumber(-8,15));
console.log(getRandomNumber(-100,15));
console.log(getRandomNumber(4,15));
console.log(getRandomNumber(70,15));

//AKIN's WAY

/*

function getRandomNumber(num1,num2){
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/