let age = 25;
let tickets = 3;
let total;
if(age<12){
    total = tickets*100;
    console.log(total);
}
else if(age>=12 && age<60){
    total = tickets*200;
    console.log(total);
}
else if(age>=60){
    total = tickets*120;
    console.log(total);
}
else{
    console.log("Invalid input");
}