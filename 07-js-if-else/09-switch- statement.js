

const{getRandomNumber} = require('../utils/MathHelper.js');
/*
Generate a random number bt 1 and 10 both included
if the number is 1, print '3 POINTS'
if the number is 2, print '2 POINTS'
if the number is 3, print '1 POINT'

if the number is anything else , print '0 POINT'
*/


console.log('\n----------IF - ELSE STATEMENT-------------\n');
 let number = getRandomNumber(1,10);
 console.log('Random numnber is = ',number); //10
 if(number === 1) console.log('3 POINTS');
 else if(number === 2) console.log('2 POINTS');
 else if (number === 3) console.log('1 POINT');
 else console.log('0 POINT');

 console.log('\n----------TERNARY OPERATOR-------------\n');
let result =
number === 1 ? '3 POINTS' : 
number === 2 ? '2 POINTS' :
number === 3 ? '1 POINT' : '0 POINT';

console.log(result); //0 POINT

console.log('\n----------SWITCH STATEMENT-------------\n'); //default is optional
switch(number){
    case 1: console.log('3 POINTS');
    break;
    case 2: console.log('2 POINTS');
    break;
    case 3: console.log('1 POINT');
    break;
    default: console.log('0 POINT');
}

const date = new Date();
console.log(date.getDate()); //5
console.log(date.getMonth()); //7  (August is 7th months because JS devs consider January as 0))
console.log(date.getFullYear()); //2024
console.log(date.getDay()) //1 -> Monday (because JS devs consider Sunday as 0)

console.log(date.toLocaleTimeString()); //7:31:33 PM
console.log(date.toLocaleDateString()); //8/5/2024

/*
0 Sunday
1 Monday
.
.
.
.
6 Saturday

in case it returns 0 or 6, print 'WEEKEND'
otherwise, print 'WEEKDAY' 
*/

console.log('\n----------TASK-2-------------\n');  

//IF ELSE
let day = date.getDay();

if(day >= 1 && day <= 5) console.log('WEEKDAY');
else console.log('WEEKEND'); 

if(day !== 0 && day !== 6) console.log('WEEKDAY');
else console.log('WEEKEND');

if(day === 0 || day === 6) console.log('WEEKEND');
else console.log('WEEKDAY');

//SWITCH
switch(day){
    case 0: 
    case 6: console.log('WEEKEND');
    break;
    default:  console.log('WEEKDAY');
}

//TERNARY
console.log(day === 6 || day === 0 ? 'WEEKEND' : 'WEEKDAY'); //WEEKDAY

//SWITCH and BOOLEAN
switch(day === 0 || day === 6) {
    case true: 
        console.log('WEEKEND');
        break;
    default: 
        console.log('WEEKDAY');
}

console.log('\n----------TASK-3-------------\n');
/*
Find and print the quarter that our r2 is in
1 and 25 inclusive  -> print 'FIRST'
26 and 50 inclusive  -> print 'SECOND'
51 and 75 inclusive  -> print 'THIRD'
76 and 100 inclusive  -> print 'FOURTH'
*/

let r2 = getRandomNumber(1,100);
console.log('The random number for TASK-3 = ', r2);
//if-else
if (r2 >= 76) console.log('FOURTH');
else if (r2 >= 51) console.log('THIRD');
else if  (r2 >= 26) console.log('SECOND');
else console.log('FIRST');

//switch
switch(true){
    case r2 >= 76:
        console.log('FOURTH');
        break;
    case r2 >= 51:
         console.log('THIRD');
         break;
    case r2 >= 26:
         console.log('SECOND');
         if(r2 > 10){
             console.log('The number is more than 10');
             if(r2 % 2 === 0) console.log('The number is even ');
             else console.log('The number is odd');
         }
         else console.log('The number is less than 10');
         break;
    default:
        console.log('FIRST');
}

