// 7. Create a human readable time format using the Date time object
// a. YYYY-MM-DD HH:mm
// b. DD-MM-YYYY HH:mm
// c. DD/MM/YYYY HH:mm




// (a)    YYYY-MM-DD HH:mm

var date =new Date();
var current_date=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes();
console.log(current_date);

//(b)   DD-MM-YYYY HH:mm

var current_date2=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+"  "+date.getHours()+":"+date.getMinutes();
console.log(current_date2);


//(c)  DD/MM/YYYY HH:mm

var current_date3=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+"  "+date.getHours()+":"+date.getMinutes();
console.log(current_date3);