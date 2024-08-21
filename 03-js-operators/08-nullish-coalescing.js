

console.log(false || 'Hello'); //Hello
console.log(false ?? 'Hello'); //false


console.log(null ?? 'Hello'); //Hello if  first expression is null or undefined -> it gets the second
console.log(undefined ?? 'Hello'); //Hello
console.log(null || 'Hello'); 
onsole.log(undefined || 'Hello');

console.log(NaN ?? 'Hello'); //NaN
console.log(0 ?? 'Hello'); //0

//let data = server.getData()  ?? throw Error('Data is empty');


