let units = 250;
let first = null;
let second= null;
let third = null;
if(units>0){
    if(units<=100){
        first = 100*5;
        console.log("Bill is",first);
    }
    else if(units>=101 && units<=200){
        first = 100*5;
        second = (units-100)*7;
        console.log("Bill is",first+second);
    }
    else if(units>200){
        first = 100*5;
        second = 100*7;
        third = (units-200)*10;
        console.log("Bill is",first+second+third);
    }
}
else{
    console.log("Invalid input");
}