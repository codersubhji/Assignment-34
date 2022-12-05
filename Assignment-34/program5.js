// 5. Write a code which can give grades to students according to theirs scores:
// a. 80-100, A
// b. 70-89, B

// Untitled 2

// c. 60-69, C
// d. 50-59, D
// e. 0-49, F

const ps= require("prompt-sync");
const prompt=ps();
let grades_of_student=()=>{
    let num = prompt("Enter any number ");
    if (80 <= num && num<=100){
        console.log(`The Grade of student is : A`);
    }
    else if (70 <= num && num<=79){
        console.log(`The grade of student is : B`);
    }

    else if (60 <= num && num<=69){
        console.log(`The grade of student is : C`);
    }

    else if (50 <= num && num<=59){
        console.log(`The grade of student is : D`);
    }
    else{
        console.log(`The grade of the student is : E`);
    }

}
grades_of_student()