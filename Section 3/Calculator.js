let first = 10;
let second = 20;
let operator = "/";
let solution;
switch(operator){
    case "+":
        solution = first + second;
        console.log(solution);
        break;
    case "-":
        solution = first - second;
        console.log(solution);
        break;
    case "*":
        solution = first * second;
        console.log(solution);
        break;
    case "/":
        if(second>0){
            solution = first / second;
        console.log(solution);
        break;
    }
    else{
        console.log("Division by zero is not possible");
    }
        
    case "%":
        solution = first % second;
        console.log(solution);
        break;           
    default:{
        console.log("invalid input");
        break;
    } 
}