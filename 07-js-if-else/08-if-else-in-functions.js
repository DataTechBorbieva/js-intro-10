
function startE(str){
   if (str.toLowerCase().startsWith('e')) return true;
   else return false;
}

/* way 2  
function startE(str){
if(str[0] === 'E' || name[0] === 'e')return true;
return false;
}

 way 3 also returns true // false

function startE(str){
return (str[0] === 'E' || name[0] === 'e') 
}


*/ 
console.log(startE('John')); //false
console.log(startE('Eddie')); //true
console.log(startE('')); //false
console.log(startE('1234')); //false



/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/


console.log('\n---------------TASK-1-----------------\n');


// way 1
/*
function divisible5(number){
  if (number % 5 == 0) return true;
  return false;
}

console.log(divisible5(13)); //false
*/

//way 2
function divisible5(number){
    return (number % 5 == 0)
  }
  
  console.log(divisible5(15)); //true

console.log('\n---------------TASK-2-----------------\n');
//way 1
/*
function fooBar(num){
 return (num % 5 === 0 && num % 7 == 0) ? 'foobar' :
    num % 7 === 0 ? 'bar' :
    num % 5 === 0 ? 'foo' : num;
}
   */

//way 2
function fooBar(num){
    if  (num % 5 === 0 && num % 7 == 0) return 'foobar'; //we need to put this condition first to get 'foobar'
    else if (num % 7 === 0) return 'bar';
    else if (num % 5 === 0) return 'foo' ;
     return num;
}

//way 3
/*
function fooBar(number) {
    if (number % 5 === 0 && number % 7 === 0) return 'foobar';
    else if (number % 7 === 0) return 'bar';
    else if (number % 5 === 0) return 'foo';
    return number;

}
*/

console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(7));
console.log(fooBar(0));
console.log(fooBar(35));

console.log('\n---------------TASK-3-----------------\n');

/*

Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/
function getGrade(num){
if (num >= 90 && num <= 100) return 'A';
else if (num >= 80 && num <= 89) return 'B';
else if (num >= 70 && num <= 79) return 'C';
else if (num >= 60 && num <= 69) return 'D';
return 'F';
}

//if i know that number is 0-100
function getGrade(num){
    if (num >= 90) return 'A';
    else if (num >= 80) return 'B';
    else if (num >= 70) return 'C';
    else if (num >= 60) return 'D';
    return 'F';
    }