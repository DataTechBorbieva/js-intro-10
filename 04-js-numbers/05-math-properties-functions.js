
console.log(Math.PI); //3.141592653589793

console.log(isFinite(Math.PI));

console.log(Math.abs(5)); //5
console.log(Math.abs(-5)); //5 returns only positive number

let result = Math.abs(3 -10);
console.log(result); //10


//ceil() floor() round() trunc()
console.log(Math.ceil(10.01));//11 like ceil goes up
console.log(Math.ceil(15.68));//16 like ceil goes up


console.log(Math.floor(10.01)); //10 like floor goes down
console.log(Math.floor(8.99)); //8 like floor goes down

console.log(Math.round(10.49));//10
console.log(Math.round(10.99));//10
console.log(Math.round(10.01));//10
console.log(Math.round(10.49));//10



//min() vs max();
let num1 = 10; num2 = 5; num3 = -3;
let maxNum = Math.max(num1, num2, num3);
let minNum = Math.min(num1, num2, num3);
console.log(maxNum, minNum); // 10 / -3

console.log(Math.min(-3, 3, 156, -99)); //-99
console.log(Math.max(-3, 3, 156, -99)); //156


//pow() vs sqrt()
console.log(5 ** 2); //25
console.log(Math.pow(5, 2)); //25

let result2 = Math.pow(3, 3);
console.log(result2); //27


console.log(Math.sqrt(64)); //8
console.log(Math.sqrt(25)); //5

console.log(Math.random()); //0.9838268202537679
 
