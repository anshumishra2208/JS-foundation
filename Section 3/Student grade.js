let percentage = 99.99;
if(percentage>=90 && percentage<=100){
    console.log("Grade A");
}
else if(percentage>=80 && percentage<=89){
    console.log("Grade B");
}
else if(percentage>=70 && percentage<=79){
    console.log("Grade C");
}
else if(percentage>=60 && percentage<=69){
    console.log("Grade D");
}
else if(percentage>=50 && percentage<=59){
    console.log("Grade E");
}
else if(percentage>=40 && percentage<=49){
    console.log("Grade F");
}
else if(percentage<40){
    console.log("Fail");
}
else if(percentage<0 && percentage>100){
    console.log("Invalid Percentage");
}
