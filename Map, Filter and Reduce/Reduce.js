// reduce => it ias also an array method in which a single value or entity is returnd 
//           after the execution. it takes two paramenters in its callback functions
//           the one is (accumulator , currentValue) and the other is 0 =>it is the 
//           initial value of accumulator. 



let students = [
    {
        name: "anshu",
        marks: 80
    },
    {
        name: "aman",
        marks: 60
    },
    {
        name: "abhi",
        marks: 70
    },
    {
        name: "anil",
        marks: 30
    },
    {
        name: "anu",
        marks: 19
    }
]

let marks = [20,40,50,60]

// let total = 0;
// students.forEach((value)=>{
//     total = total + value.marks;
// })
// console.log(total);

let totalMarks = marks.reduce((accumulator , currentValue)=> {
    accumulator = accumulator + currentValue
    return accumulator;
} , 0)
// console.log(totalMarks);

let StudentsMarks = students.reduce((accumulator,currentValue)=>{
        accumulator = accumulator + currentValue.marks;
        return accumulator;
},0)
console.log(StudentsMarks);