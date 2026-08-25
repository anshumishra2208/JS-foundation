// filter => it an array method used for filtering out elements. it takes an array of lengh "n"
//           and returns a new updated array of lengh ranging from 0 to n 


let students = [
    {
        name : "anshu",
        marks : 80
    } ,
    {
        name : "aman",
        marks : 60
    } ,
    {
        name : "abhi",
        marks : 70
    } ,
    {
        name : "anil",
        marks : 30
    } ,
    {
        name : "anu",
        marks : 19
    }
]

let passedStudents = students.filter((value)=> value.marks>30)
// console.log(passedStudents);

let passedStudentsName = passedStudents.map((value)=>value.name)
// console.log(passedStudentsName);

let passedStudentsMarks = passedStudents.map((value)=> value.marks)
// console.log(passedStudentsMarks);



