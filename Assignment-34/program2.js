// 2. Boolean value is either true or false.
// a. Write three JavaScript statements which provide truthy value.
// b. Write three JavaScript statements which provide falsy value.

let truthy_flsy=()=>{

    let positiveNumber=true;
    let negativeNumber=false;
    let zeroNumber=false;

if (positiveNumber===true && negativeNumber===false && zeroNumber===false){
    console.log("This is the positive number .");
}
else if (positiveNumber===false && negativeNumber===true && zeroNumber===false){
    console.log("This is nagative number .");

}
else if (positiveNumber===false && negativeNumber===false && zeroNumber===true){
    console.log("This is zero number .");
}
else {
    console.log("That is not a number .");
}

}

truthy_flsy()