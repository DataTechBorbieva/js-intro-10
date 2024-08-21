
/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL
*/

let exam_score = 60;
if (exam_score >= 60){
    console.log('PASS');
}
else {
    console.log('FAIL');
}



let exam_score1 = 150;
if(typeof exam_score1 === 'number') {
    if(exam_score1 < 0 || exam_score1 > 100) {
        throw Error('This is not a valid exam score!!!');
    }
    else {
        if(exam_score1 >= 60) {
            console.log('PASS');
        }
        else {
            console.log('FAIL');
        }
    }
}
else {
    throw Error('The input provided is not a number!!!')
}

//if you execute single line of code within if or else block, then you may omit curly braces. BUT ONLY IF ONE LINE

if(examscore >= 60) console.log('PASS'); //put in the same line
else console.log('FAIL');

if (true){
    console.log('Hello')
    console.log('HI')
}
else{
    console.log('A')  //greyd out , because if is true and it will run only true
    console.log('B')
}

/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 25;
if (age >= 65) console.log('YOU CAN GET RETIRED');
else console.log('YOU CAN NOT GET RETIRED!!!');

//Ternary operators
age >= 65 ? console.log('YOU CAN GET RETIRED') : console.log('YOU CAN NOT GET RETIRED!!!');

//condition? expression_true : expression_false;

let fName = 'Alex';
let first = false;

if(first){
    console.log(fName[0]);
}
else {
    console.log(fName.slice(-1)); //name.at(-1)  name[name.length - 1]
}

first ?  console.log(fName[0]) : console.log(fName.slice(-1));

