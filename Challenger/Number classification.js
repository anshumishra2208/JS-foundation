let num = -150;
if(num>0){
    if(num%2===0){
        if(num>100){
            console.log("Positive");
            console.log("Even");
            console.log("Greater than 100");
        }
        else if(num===100){
            console.log("Positive");
            console.log("Even");
            console.log("Equal to 100");
        }
        else{
            console.log("Positive");
            console.log("Even");
            console.log("Less than 100");
        }
    }
    else{
        if(num>100){
            console.log("Positive");
            console.log("Odd");
            console.log("Greater than 100");
        }
        else if(num===100){
            console.log("Positive");
            console.log("Odd");
            console.log("Equal to 100");
        }
        else{
            console.log("Positive");
            console.log("Odd");
            console.log("Less than 100");
        }
    }
}
else{
    if(num%2===0){
        if(num>100){
            console.log("Negative");
            console.log("Even");
            console.log("Greater than 100");
        }
        else if(num===100){
            console.log("Negative");
            console.log("Even");
            console.log("Equal to 100");
        }
        else{
            console.log("Negative");
            console.log("Even");
            console.log("Less than 100");
        }
    }
    else{
        if(num>100){
            console.log("Negative");
            console.log("Odd");
            console.log("Greater than 100");
        }
        else if(num===100){
            console.log("Negative");
            console.log("Odd");
            console.log("Equal to 100");
        }
        else{
            console.log("Negative");
            console.log("Odd");
            console.log("Less than 100");
        }
    }
}