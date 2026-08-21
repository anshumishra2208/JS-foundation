
// for(let i=1; i<=10;i++){
//     console.log(i);
// }


// let num = 5;
// for(let i=1;i<=10;i++){
//     console.log(num*i);
// }


// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10){
    
// }


// for(let i=1;i<=10;i++){
//     if(i===3){
//         break;
//     }
//     console.log(i);
// }


// for(let i=1;i<=10;i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }




// function totalMarks(sub1, sub2, sub3){
//     console.log(sub1 + sub2 +sub3);
// }
// totalMarks(30,50,20);


// function totalMarks(sub1, sub2, sub3){
//     return sub1 + sub2 +sub3;
// }
// console.log(totalMarks(30,50,20));


// function totalMarks(student_name,sub1, sub2, sub3){
//     console.log(`${student_name} marks: ${sub1 + sub2 + sub3}`);
// }
// totalMarks("alok",30,50,20);


// function totalMarks(studentName,sub1,sub2,sub3){
//     return sub1 + sub2 + sub3;
// }
// function calPercenntage(studentName,sub1,sub2,sub3){
//     percent = totalMarks(studentName,sub1,sub2,sub3)/3;
//     console.log(`${studentName} percentage is: ${percent}`);
// }
// calPercenntage("alok",30,50,20)



// function billing(price,discount){
//     let finalPrice = price - (discount/100)*price;
//     console.log(finalPrice);
// }
// billing(100,10)


// function greeting(greet="Hii",name="Guest"){
//     console.log(`${greet} ${name}`);
// }
// greeting("kem chho","Alok")
// greeting("Kaise ho","Satyam bhai")
// greeting()


// function calculator(num1,num2,operator){
//     switch(operator){
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1*num2;
//             break;  
//         case "/":
//             return num1/num2;
//             break;          
//     }
// }
// console.log(calculator(3,4,"*"));


// let add = function(num1,num2){
//     console.log(num1 + num2);
// }
// add(3,4)


// arrow function

// syntax 1
// let add = num1 => num1+2;

// syntax 2
// let add = (num1,num2) => num1 + num2;

// syntax 3
// let add = (num1,num2) => {
//     return num1+num2;
// }
