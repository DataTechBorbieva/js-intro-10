
const names = ['Alex', 'John'];
console.log(names); // [ 'Alex', 'John' ]
console.log('-----------------Adding the last elements------------------------')
//adding element to the end of array
console.log(names.push('Mariia')); //3

let result = names.push('Jane', 'Joe', 'Data');
console.log(result); //6
console.log(names); //[ 'Alex', 'John', 'Mariia', 'Jane', 'Joe', 'Data' ] 

//this method changes the original value 
//non-static
console.log('-----------------Removing the last elements------------------------')
//Removing elements form the end of the array
//this method only returns 1 removed element 
console.log(names.pop()); //Data
names.pop(); //Joe
names.pop(); //Jane
console.log(names); //[ 'Alex', 'John', 'Mariia' ]

names.pop();
names.pop();
names.pop();
console.log(names) //[] -> empty , because all the names were removed from an array

console.log('-----------------Adding elements to the beginnig of array-----------------------');
//adding elements to the beginnig of array
const numbers = [10, 20, 30];
console.log(numbers);// [ 10, 20, 30 ]
numbers.unshift(99);
console.log(numbers);// [ 99, 10, 20, 30 ]

numbers.unshift(11, 56, 78);
console.log(numbers); //[11, 56, 78, 99, 10, 20, 30 ];

console.log('-----------------Removing elements to the beginnig of array-----------------------');
numbers.shift();//11
numbers.shift();//56
numbers.shift();//78

console.log(numbers); //[ 99, 10, 20, 30 ]

numbers.shift(); 
numbers.shift();
numbers.shift();
numbers.shift();
console.log(numbers); //[]
