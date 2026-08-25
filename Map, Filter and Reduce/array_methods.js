students = {
    name : "anshu",
    rollNum : 46,
    subjects : ["maths", "english", "science"]
}
// console.log(students);

let {subjects : vishay , ...remainingData} = students; // updating key name
// console.log(remainingData);
// console.log(vishay);

students.rollNum = 48;  // updating the elements of an object
// console.log(students.rollNum); // updating elements of an object

obj1 = {
    name1 : "aman",
    age1 : 18
}
obj2 = {
    name2 : "ashish",
    age2 : 22
}
delete obj2.age2;   // deleting the element of an object
// console.log(obj2);

let res = {...obj1, ...obj2}; // merging of two objects into a single object
// console.log(res);

let ars = [1,2,3,4,5,6,7,8];
// ars[2] = 5;     // updating the elements of an array
// console.log(ars);
ars.push(9);    // adds from end
// console.log(ars);
ars.pop();  // deletes from end
// console.log(ars);
ars.unshift(0); // adds from start
// console.log(ars);
ars.shift();    // deletes from start
// console.log(ars);

// splice

// ars.splice(1,1); // (starting index , delete count)
// console.log(ars);

// ars.splice(2,0,"hello");  // (starting index , agar add krna h to delete count 0 , jo add krna hai)
// console.log(ars);

// ars.splice(2,2,"hello");  // (starting index , delete count , jisse replace krna hai)
// console.log(ars);

let trim = ars.slice(1,4); // used for trimming an array. (starting index - included , last index - excluded)
// console.log(trim);

// console.log(ars.indexOf(2)); // elements ki index batata hai

let pro = ars.find((value) =>{  // ye bass ek array me kisi element ko laake de dete hai
    return value === 3;
})
// console.log(pro);

ars.flat(Infinity); // ye nested array ko destroy krta hai. infinity means poori depth tak ke array ko bhi destroy kr skta hai
// console.log(ars);