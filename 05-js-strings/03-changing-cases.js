//toLowerCase() vs to UpperCase();

let company = 'TechGlobal';
console.log(company.toLowerCase()); //'techglobal'
console.log(company.toLocaleLowerCase()); //'techglobal' -> used to area or region
console.log(company.toUpperCase()); //'TECHGLOBAL' 


// John Doe Smith -> JDS
function initials(fullname) {
//fullname.split(' ')
let result = ''
for ( const s of fullname.split(' ')){
    result += s [0] + '.'}
    return result
}

let fn = 'Data Borbieva'
console.log(initials(fn)); //D.B.

let address = '123 St. #2, Des Plaines IL 12345';
let addressLower = address.toLowerCase();
let addressUpper = address.toUpperCase();

console.log(addressLower, addressUpper); //123 st. #2, des plaines il 12345           //         123 ST. #2, DES PLAINES IL 12345

/*
toUpperCase()
TASK: converts all the letters of the string to upper case
RETURNS: returns a new string
ARGUMENTS: no args - no parameters 
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC / NON - STATIC : non - static
*/


/*
toLowerCase()
TASK: converts all the letters of the string to lower case
RETURNS: returns a new string
ARGUMENTS: no args - no parameters 
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC / NON - STATIC : non - static
*/


