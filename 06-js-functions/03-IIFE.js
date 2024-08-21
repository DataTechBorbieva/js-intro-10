
// IIFE - immeaditely invoked function expression
//its a function with NO name and immediatley invokes it right away 

function sayHi(){
    console.log('Hi')
}

//Explicitly invoking the function
sayHi();


//immeaditely invoked function
(function (){
    console.log('Hello World')
})();     //prints 'Hello World'
