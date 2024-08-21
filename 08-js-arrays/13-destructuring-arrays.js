const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ];

//let myFav1 = favMovies[0];
//let myFav2 = favMovies[1];
//let myFav3 = favMovies[2];

let [ myFav1, myFav2, myFav3] = favMovies;

console.log(myFav1); //Harry Potter
console.log(myFav2); //Godfather
console.log(myFav3); //Lord of the Rings

console.log(favMovies); // [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ]

let var1 = true;
let var2 = 'Hello';
let var3 = 5;

const mixArray = [var1, var2, var3];
console.log(mixArray); //[ true, 'Hello', 5 ]

//-------------------------------------------------
const numbers = [ -3, 10, 0, 100, 200 ];

//let ten = 10;
//let zero = 0;
//let twoHundred = 200;

let [, ten, zero,, twoHundred ] =  numbers ;
console.log(numbers);
console.log(ten);
console.log(zero);
console.log(twoHundred);

