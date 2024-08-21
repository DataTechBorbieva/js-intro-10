
const user = {     //object with 6 properties

    firstName:'John',
lastName: 'Doe',
age: 25,
phoneNumber:'000-000-0000',
email: 'johndoe@gmail.com',
password: 'john1234'

};  

console.log(user.firstName) //John //getting specific info is using a dot notation or bracket notation
console.log(user['email']); 

console.log(user); 

console.log(typeof user); //object

let abc = user.firstName;
let xyz = user.age;

//Updating the property values, using dot notaion

user.firstName = 'Alex';
user['phone'] = '111-111-1111';

// adding a new property ro an object

user.password = 'test1234';

console.log(user);

//Removing an existing property from the object 
delete user.age;
delete user['lastName'];

console.log(user);

const student = {};
const devices = [];
let str = '';