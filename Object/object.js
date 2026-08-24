let product1 = ["iphone", 4500, 4.5, "India"]


let product2 = {
    name: "iphone",
    price: 4500,
    avgRating: 4.5,
    discount: 50,
    country: "India",
    "model-num": 4594096,
    "#": 54996,
    printDiscount() {
        console.log(this.discount);
    }

}
// console.log(product2.name);
// console.log(product2.printDiscount());
// console.log(product2["avgRating"]);
// console.log(product2["#"]);
// product2.printDiscount();
// console.log(product2);
// console.log(Object.keys(product2)); // gives all the keys in an array
// console.log(Object.values(product2)); // gives all the values in an array
// console.log(Object.entries(product2)); // it is a nested array which gives each key and value as an array


// for( values of product1){   // it's a for loop but only for arrays. it gives each element of the array
//     console.log(values);
// }

// product1.forEach(function(value,index){   // it is also a loop for array only and gives each element of the an array along with their individual indexes
//                                           // a function is passed as an argument while using it and func is called the callback function
//     console.log(value,index);
// })

// for( value in product2){ // it is for objects and gives its keys, when used in arrays it gives the indexes
//     console.log(value);
// }


// for(value in product1){ // in array it is giving indexes  here
//     console.log(value);
// }


// for( value in product2){ 
//     console.log(product2[value]);
// }

// destructuring

// let [a, b, c, d] = ["anshu", "India", "10023933", "4.9"]
// console.log(a);

// let {price, discount,printDiscount } = product2;
// console.log(price,discount,printDiscount());


// for( value of Object.entries(product2)){
//     console.log(value);
// }

// for( [key, value] of Object.entries(product2)){
//     console.log(key, value);
// }


// rest operator and spread operator

// spread operator

// let num = [3,459,22,58,905924,32,98];
// console.log(Math.max(...num));  // spreading the numbers of array and keeping it free of array brackets
// console.log(Math.min(...num));
// let a = [1,2];
// let b = [3,4];
// let c = [...a,...b]   // array merging using spread method
// console.log(...c);  //  spreading out the merged array


// rest operator

// let [m, n, p, ...remainingData] = ["anshu",404,8.9,"#4", "India", "$", "&", "!"]
// console.log(m);
// console.log(p);
// console.log(remainingData);  // it packs the remaining elements which are not destructured
                            // " MAKE SURE IT IS ALWAYS IN THE LAST"
                            // if it is an arrys, it packs remaining datas into an array


let {price, name,avgRating, ...remainingData} = product2;
console.log(price);
console.log(remainingData);  // if it's an object, it packs remaining datas in an object

// function add(...numbers){
//         let total = 0;
//     for( value of numbers){    // here numbers has become an array which contains the arguments passed
//                                // it is an array, that's why for of loop is used
//         total+=value;
//     }
//     console.log(total);
// }
// add(4,6,12,30)
