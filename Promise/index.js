// let p = new Promise(function(resolve,reject){
//     reject("completed");
// })
// console.log(p);
// p.then(function(val){
//     console.log("resolved value",val);
// },function(val){
//     console.log("rejected value",val);
// }).finally(function(){
//     console.log("hmesha chalega after the promise gets settled");
// })

function searchPizza(){
    return new Promise(function(resolve,reject){
        console.log();          // just for creating an extra line on output screen for better readability
        console.log("pizza is getting searched 👁️ 👀");
        console.log();
    setTimeout(() => {
        console.log("here is your pizza 😛");
        console.log();
        let price = 500;
        resolve(price)
    }, 3000);
    })  
}

function addToCart(price){
    return new Promise(function(resolve,reject){
        console.log("Adding to cart ");
        console.log();
        setTimeout(() => {
            console.log("pizza added to your cart 😄🥹");
            console.log();
            resolve(price)
        }, 3000);
    })
}

function payment(price){
    return new Promise(function(resolve,reject){
        console.log(`payment initiated of amount ${price}`);
        console.log();
        setTimeout(() => {
            let isPaymentSuccessfull = true;
            if(isPaymentSuccessfull){
                console.log(`payment completed Amount = ${price} 🥳🥳🥳`);
            console.log();
                resolve()
            }
            else{
                reject("Payment Declined")
            }
        }, 4000);
    })
}

let res = searchPizza()
res.then(function(price){
    return addToCart(price);    
}).then(function(price){
    return payment(price);
}).then(function(){
    console.log("Bass aa hee gya aapka pizza 💁💁💁");
    console.log();
}).catch(function(err){
    console.log(err);
    console.log();
}).finally(function(){
    console.log("Thanks for shopping with us ❤️ ❤️ ❤️");
    console.log();
})