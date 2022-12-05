 // 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a
// number is even or not using JavaScript? -->


const ps= require("prompt-sync");
const prompt=ps();

let even_number=()=>{
   let number=prompt("Enter any number to check the number is even or not :");
   if (number%2==0){
      console.log(number +": is even.");

   }
   else{
      console.log(number +": is not a even number.");
   }
}


even_number()