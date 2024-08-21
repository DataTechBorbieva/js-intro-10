//Array: stores multiple elements
const myNumberArray = [1, 2, 3, 4, 5];

//Printing the array
console.log(myNumberArray);

//Size of array
console.log(myNumberArray.length); //5

//Accessing array elements using indexes/indices
console.log(myNumberArray[2]); //3

//Updating array elements using indexes
myNumberArray[4] = 99;

console.log(myNumberArray); //[ 1, 2, 3, 4, 99 ]

//Get the last element 
console.log(myNumberArray[myNumberArray.length - 1]);

//Creating an array using contructor;
const myWords = new Array('I','Like','Arrays'); //not used a lot

const arr = []; // empty array or new Array()
arr.length; //0
arr[5] = 10; //  [ <5 empty items>, 10 ]        [, , , , , 10]

console.log(arr);
console.log(arr.length); //6

//............... .