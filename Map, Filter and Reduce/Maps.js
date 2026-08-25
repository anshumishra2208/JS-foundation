let originalPrices = [450, 600, 250, 350]

// map => used when we have to perform same operaotions on each elements of an
//         array. it takes an array of length "n" and returns a new array of same
//         lengh "n". it takes a callback function

let discountedPrices = originalPrices.map((value) =>{
    return value - (10/100)*value;
})
// console.log(discountedPrices);

let pre = originalPrices.map((value)=> value + 10);
// console.log(pre);

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
    }
]

// console.log(students["0"].name);

// let studentName = [];
// students.forEach((value)=>{
//     studentName.push(value.name);
// })
// console.log(studentName);

let name = students.map((value)=> value.name)
// console.log(name);

let boostedMArks = students.map((value)=> value.marks += 10)
console.log(boostedMArks);
