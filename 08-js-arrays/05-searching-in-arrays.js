const numbers = [5, 10, 5, 10, 25, 100, 77, 5, 5];

//We can check 
numbers.includes(5);//true
numbers.includes(77);//true

numbers.includes(20);//false


//indexOF() vs lastIndexOf()
console.log(numbers.indexOf(5)); //0
console.log(numbers.lastIndexOf(5)); //8

console.log(numbers.indexOf(10)); //1
console.log(numbers.lastIndexOf(10)); //3

console.log(numbers.indexOf(25));//4 
console.log(numbers.lastIndexOf(25)); //4


console.log(numbers.indexOf(3)); //-1
console.log(numbers.lastIndexOf(7)); //-1


//How to check if array ontaines an elemnt without includes() method
const cities = ['Chicago', 'Berlin', 'Rome', 'Brugge'];
console.log(cities.includes('Berlin')); //true
console.log(cities.indexOf('Berlin') !== -1); //true

cities.includes('Berlin', -1);//false
const arr = [10,20,30,40,25,100,5,10,20,90];
arr.includes(30); //true
arr.includes(30, arr.length / 2); //looking for an elemnt 30 in the second half of array
