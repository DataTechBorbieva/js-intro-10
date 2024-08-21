
//var - let - const keywords are used for variables 
//1. let allows us to change the value of the variable at any point of the program
let firstName = 'John';

console.log(firstName); // 'John'

//Re-assign a new value to a variable
firstName = 'James';

console.log(firstName); // 'James'
console.log(firstName); // 'James'

// 2. const stands for constant 
//pi = 3.14
//g = 9.8 or 10

const pi = 3.14

console.log(pi); //3.14

pi = 10; //Error: TypeError: Assignment to constant variable

console.log(pi); //Not executed

// 3.var is the old let (before 2015)
var lastName = 'Doe';

lastName = 'Smith';

console.log(lastName); //Smith

//Another difference bt let and const

let city = 'Chicago'; // variable initialization = decalre a variable and assign  a value

let country; // declaring a variable or variable declaration
country = 'US'; // assignment / value assignment to a variable

//const firstMonth; //Not allowed, constant must be initialized
//firstMonth = 'January';

const firstMonth = 'January'; //constant MUST be initialized

let numberOfStudentInBatch10;
console.log(numberOfStudentInBatch10); // undefined 

numberOfStudentInBatch10 = 20;

console.log(numberOfStudentInBatch10); //20