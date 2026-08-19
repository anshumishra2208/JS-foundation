let studentName = "Rahul";
let rollNumber = 101;
let mathMarks = 85;
let scienceMarks = 78;
let englishMarks = 92;
let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = (totalMarks/300)*100;
if(mathMarks>=40 && scienceMarks>=40 && englishMarks>=40){
    if(percentage>=90 && percentage<=100){
        console.log("Name: ",studentName);
        console.log("Roll No: ",rollNumber);
        console.log("Maths: ",mathMarks);
        console.log("Science: ",scienceMarks);
        console.log("English: ",englishMarks);
        console.log("Total: ",totalMarks);
        console.log("Percentage: ",percentage);
        console.log("Grade:  A");
    }
    else if(percentage>=80 && percentage<=89){
        console.log("Name: ",studentName);
        console.log("Roll No: ",rollNumber);
        console.log("Maths: ",mathMarks);
        console.log("Science: ",scienceMarks);
        console.log("English: ",englishMarks);
        console.log("Total: ",totalMarks);
        console.log("Percentage: ",percentage);
        console.log("Grade:  B");
    }
    else if(percentage>=70 && percentage<=79){
        console.log("Name: ",studentName);
        console.log("Roll No: ",rollNumber);
        console.log("Maths: ",mathMarks);
        console.log("Science: ",scienceMarks);
        console.log("English: ",englishMarks);
        console.log("Total: ",totalMarks);
        console.log("Percentage: ",percentage);
        console.log("Grade:  C");
    }
    else if(percentage>=60 && percentage<=69){
        console.log("Name: ",studentName);
        console.log("Roll No: ",rollNumber);
        console.log("Maths: ",mathMarks);
        console.log("Science: ",scienceMarks);
        console.log("English: ",englishMarks);
        console.log("Total: ",totalMarks);
        console.log("Percentage: ",percentage);
        console.log("Grade:  D");
    }
    else if(percentage>=40 && percentage<=59){
        console.log("Name: ",studentName);
        console.log("Roll No: ",rollNumber);
        console.log("Maths: ",mathMarks);
        console.log("Science: ",scienceMarks);
        console.log("English: ",englishMarks);
        console.log("Total: ",totalMarks);
        console.log("Percentage: ",percentage);
        console.log("Grade:  E");
    }
    else if(percentage<40){
        console.log("Name: ",studentName);
        console.log("Roll No: ",rollNumber);
        console.log("Maths: ",mathMarks);
        console.log("Science: ",scienceMarks);
        console.log("English: ",englishMarks);
        console.log("Total: ",totalMarks);
        console.log("Percentage: ",percentage);
        console.log("Grade:  F");
    }
    else{
        console.log("Invalid Credentials");
    }
}
else{
    console.log("Fail");
}
