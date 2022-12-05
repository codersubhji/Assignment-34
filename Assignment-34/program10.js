//10. Write a program to find the area of the circle. Take radius of circle from user as input
// and print the result in below given format.

const ps=require("prompt-sync");
const prompt=ps();

let circle_area=()=>{
    let radius_of_circle=prompt("Enter radius of circle :");
    let area_circle = (3.14*radius_of_circle*radius_of_circle);
    console.log(`The area of circle is :${area_circle}`);
}
circle_area()