//9. Write a program to print unit digit of a given number.
// Input : 6693
// Output : 3

const ps= require("prompt-sync");
const prompt=ps();

let unit_digit=()=>{
    let ineter_digit=prompt("Enter any digit :");
    let final_digit=(ineter_digit%10);
    console.log(final_digit);
}

unit_digit()