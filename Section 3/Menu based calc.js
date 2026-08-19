let first = 10;
let second = 20;
let operator = "Addition";
let solution;
switch(operator){
    case "Addition":
        solution = first + second;
        console.log(solution);
        break;
    case "Subtraction":
        solution = first - second;
        console.log(solution);
        break;
    case "Multiplication":
        solution = first * second;
        console.log(solution);
        break;
    case "Division":
        if(second>0){
            solution = first / second;
        console.log(solution);
        break;
    }
    else{
        console.log("Division by zero is not possible");
    }
        
    case "Modulus":
        solution = first % second;
        console.log(solution);
        break;           
    default:{
        console.log("invalid input");
        break;
    } 
}