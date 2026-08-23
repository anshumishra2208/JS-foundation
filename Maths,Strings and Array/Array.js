// let product = ["tshirt", "lower", "cap"];
// console.log(product);
// console.log(product[0]);
// console.log(product.length);
// console.log(product[product.length - 1]); // for getting last index. lengh = last index + 1 => last index = length - 1
// console.log(product.at(-2)); 


// for(let i=0; i<=product.length - 1; i++){
//     console.log(product[i]);
//  }



// let product = [["tshirt", 200], ["lower", 250], ["cap", 50]];

// for(let i = 0; i<=product.length - 1; i++){
//     console.log(product[i][0], product[i][1]);
// }


let product = ["tshirt", "lower", "cap"];
product.push("shoes"); // adds from the last 
product.pop(); // deletes from the last
product.unshift("shirt"); // adds from the start
product.unshift(); // deletes from the start
console.log(product);