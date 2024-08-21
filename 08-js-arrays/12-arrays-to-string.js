const names = ['Alex', 'James', 'Jane'];
let namesString1 = names.toString();

console.log(names); //[ 'Alex', 'James', 'Jane' ]
console.log(namesString1);//Alex,James,Jane

names.length; //3 elements
namesString1; //15 -> how many characters

let namesString2 = names.join();
let namesString3 = names.join(' ');
let namesString4 = names.join(' - ');
console.log(namesString2); //Alex,James,Jane
console.log(namesString3); //Alex James Jane
console.log(namesString4); //Alex - James - Jane

