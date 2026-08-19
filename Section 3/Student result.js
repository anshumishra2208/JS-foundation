let maths = 68;
let science = 78;
let english = 60;
let average = (maths + science + english)/3
if(maths>=40 && science>=40 && english>=50){
    if(average>=75){
        console.log("Distinction");
    }
    else if(average>=60){
        console.log("First division");
    }
    else if(average>=50){
        console.log("Second division");
    }
    else{
        console.log("Pass");
    }
}
else{
    console.log("Fail");
}