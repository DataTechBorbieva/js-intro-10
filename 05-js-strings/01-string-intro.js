let firstName = 'John';
let lastName = "Doe";

let fullname1 = firstName + ' ' + lastName; // traditional concat with + operator
let fullname2 = `${firstName} ${lastName}`; //concat with backticks (string templates - template lierals) after ES6

console.log(fullname1); // 'John Doe'
console.log(fullname2); // 'John Doe'


let fullname3 = firstName.concat(' ').concat(lastName);
console.log(fullname3); //'John Doe' -> concatenation using concat() method - function

/*
concat() function
TASK: combines 2 strings together
RETURN: returnes a new string
ARGUMENTS: takes a string or multiple strings as an argument - parameter in thr parantheses 
CHANGE ORIGINAL VALUE: concat method does NOT modify the original values
STATIC on NON - STATIC: non-static

*/

console.log('Hello'.concat(', ', 'Batch-10', 9)); //Hello, Batch-109





