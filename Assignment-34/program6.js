// 6. Write a program which tells the number of days in a month.

const ps = require ("prompt-sync");
const prompt=ps();

let num=prompt("Enter 1 to 12 number for knowing the days of any month :");
if (num==='1' || num==='3' || num==='5' || num==='7' || num ==='8' || num==='10' || num==='12'){
    console.log("31 : Days of this month.");
}

else if (num==='2'){
    console.log("28 : Days of this month.");
}
else{
    console.log("30 : Days of this month.");
}