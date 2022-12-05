//8. Suppose 1 dollar is equal to 82.23 Indian rupee, create a program which converts
// dollars to rupees.


const ps= require("prompt-sync");
const prompt=ps();

let converter_doller_to_ruppe = () => {

    let paisa=prompt("which rupees you want to convert doller to ruppee or rupee to doller (doller/rupee) type :");
    if (paisa=="doller"){
        
        let doller_enter=prompt("Please enter how many doller you want to convert into rupee :");
        let final_rupee=(doller_enter*82.23 +"Rs.");
        console.log(final_rupee);
    }
    else{
        let rupee_enter=prompt("Please enter how many rupee you want to convert into doller :");
        let final_2=(rupee_enter/82.23+"$.");
        console.log(final_2);

    }

}

converter_doller_to_ruppe()