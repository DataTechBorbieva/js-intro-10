
let condition = false;

if(condition){
    console.log('Hello World'); //false -> it will not print out/ it will print true
}

let weather = 65;
if(weather >= 65){
    console.log('NICE'); //true -> it will print it 
}



if(!true){
    console.log('HI'); // NOT true, not printing out
}

if(true == false){
    console.log('HI');  //false
}

if(true = 'abc'){
    console.log('Hello'); //false
}

const numbers = [1, 2, 3, 4];
if (numbers > 0){
    //get data
}

let name = ''; //undefined , null , 0, '', is FALSY

if(name != '' || name != null || name != undefined){
    console.log('Hello', name); //falsy value will NOT be printed
}


