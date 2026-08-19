let salary = 90000;
let finalSalary;
let experience = 12;
if(experience>=10){
    finalSalary = salary + (20/100)*salary;
    console.log(finalSalary);
}
else if(experience>=5 && experience<10){
    finalSalary = salary + (10/100)*salary;
    console.log(finalSalary);
}
else if(experience>=2 && experience<5){
    finalSalary = salary + (5/100)*salary;
    console.log(finalSalary);
}
else if(experience<2 && experience>=0){
    console.log("No Bonus");
    console.log(salary);
}
else{
    console.log("Invalid Salary");
}