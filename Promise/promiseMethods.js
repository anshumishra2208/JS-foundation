function fun1() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("fun1")
        }, 2000);
    })
}

function fun2() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("fun2")
        }, 3000);
    })
}

function fun3() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("fun3")
        }, 5000);
    })
}

// let res = Promise.all([fun1(), fun2(), fun3()])      returns only when all prpomises are fulfilled, agar koi bhi rejected h to usko return krega
// let res = Promise.allSettled([fun1(), fun2(), fun3()])   returns the status of all the promises
// let res = Promise.race([fun1(), fun2(), fun3()])     returns the first resolved/rejected promise
let res = Promise.any([fun1(), fun2(), fun3()])         // returns the first resolved promise

res.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})