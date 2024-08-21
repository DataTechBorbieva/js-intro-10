
let favNumber = 7;
let firstKidName = 'Alex';

let cars = ['Toyota','Tesla','Honda','BMW'];
let numbers = [7, 6, 5, 25, 100];

console.log(cars, numbers); //[ 'Toyota', 'Tesla', 'Honda', 'BMW' ] [ 7, 6, 5, 25 ]

//Getting a particular element from an array
// index of the element in an array always starts with zero - 0

console.log(cars [2]); //Honda

console.log(numbers[1]); //6

//Updating the existing elements with new values

cars[0] = 'GMC';

console.log(cars); //[ 'GMC', 'Tesla', 'Honda', 'BMW' ]

cars[3]; //BMW
let myFavCar = cars[3];

//getting a number of elements , getting a size of an array
//length is an array property which returns back the total number of elements in the array
console.log(cars.length)//4
console.log(numbers.length)//5

const students = ['Alex', 'John', 'Jane', 'Mariia'];

console.log(students[-1]); //undefined
console.log(students[4]); //undefined

students[2] = 'Jessie'; //allowed even if array is declared with const

// students = 1; //not allowed since  the array is declared with const ERROR

students[4] = 'Data'; 
console.log(students); //[ 'Alex', 'John', 'Jessie', 'Mariia', 'Data' ]

students [6] = 'Katy';
console.log(students); //[ 'Alex', 'John', 'Jessie', 'Mariia', 'Data', <1 empty item>, 'Katy' ]
console.log(students.length); //7

// Creating an array with the constructor
const array = new Array('Maria', 25, null, undefined, Symbol('Hello'), 25n);
const array2 = ['Maria', 25, null, undefined, Symbol('Hello'), 25n];

console.log(typeof array, typeof array2, typeof cars, typeof numbers); // all objects

//All the reference types are OBJECTS

//Accessing the first and last element in array dynamically
const nums = [10,20,30,40,50];

let first = nums[0]; //
let last = nums[nums.length - 1];

console.log (first, last); //10 / 50




