// let h1 = document.querySelector("h1");
// h1.textContent = "good morning"

// let h2 = document.querySelector("h2")
// h2.innerHTML = "<h2>inner html</h2>";

// // console.log(h1.textContent);
// // console.log(h2.innerHTML);

// let p = document.querySelector("p");
// // console.log(p.innerText);

// p.setAttribute("style" , "background-color: pink; font-size: 20px;")
// console.log(p.getAttribute("style"));
// // p.removeAttribute("style")

// p.style.color = "red";
// p.style.margin = "10px";

// p.dataset.hello = "hii"

// let h4 = document.querySelector("h4");
// h4.classList.add("random");
// h4.classList.remove("random");
// h4.classList.toggle("random");

// // console.log(h4.classList.contains("random"));

// let body = document.querySelector("body")
// let h5 = document.createElement("h5")
// h5.textContent = "this is paragraph2";
// body.append(h5);

// let div = document.createElement("div");
// body.append(div);
// let p1 = document.createElement("p");
// p1.textContent = "first line";
// div.append(p1);
// p1.classList.add("para")
// let p2 = document.createElement("p");
// p2.textContent = "this is second line";
// div.append(p2);
// p2.classList.add("para");
// // p2.remove()


// products = [
//     {
//         name : "iphone",
//         price : 4586778,
//         url : "https://m.media-amazon.com/images/I/617O+RkwdPL._AC_UY436_QL65_.jpg"
//     },
//     {
//         name : "laptop",
//         price : 2475,
//         url : "https://m.media-amazon.com/images/I/71MbIVSIhAL._AC_UY436_QL65_.jpg"
//     },
//     {
//         name : "pen",
//         price : 286,
//         url : "https://m.media-amazon.com/images/I/51bqn1--ZbL._AC_UL640_QL65_.jpg"
//     },
//     {
//         name : "cycle",
//         price : 264,
//         url : "https://m.media-amazon.com/images/I/81yW5Z8Yk0L._AC_UY436_QL65_.jpg"
//     }
// ]

// let productList = document.createElement("div");
// body.append(productList);
// products.forEach((product)=>{
//     let card = document.createElement("div");
//     productList.append(card);
//     card.classList.add("sam")
//     card.append(`${product.name} - ${product.price}`)
// })

// let clone = productList.cloneNode(true);
// let items = clone.children;
// console.log(items[1]);

// let items2 = products;
// console.log(items2[2]);

let parent = document.querySelector(".parent");
let btn = document.querySelector("button");
// btn.addEventListener("click",(e)=>{
//     console.log("button clicked");
//     console.log(e.target);
//     console.log(e.currentTarget);
// })

let outter = document.querySelector(".outter");
let inner = document.querySelector(".inner");
let btn1 = document.querySelector("#btn1");
// outter.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("outter");
// })
// inner.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("inner");
// })
// btn1.addEventListener("click",(e)=>{
//     console.log("button");
//     e.stopPropagation();
// })


products = [
    {
        name : "iphone",
        price : 4586778,
        url : "https://m.media-amazon.com/images/I/617O+RkwdPL._AC_UY436_QL65_.jpg"
    },
    {
        name : "laptop",
        price : 2475,
        url : "https://m.media-amazon.com/images/I/71MbIVSIhAL._AC_UY436_QL65_.jpg"
    },
    {
        name : "pen",
        price : 286,
        url : "https://m.media-amazon.com/images/I/51bqn1--ZbL._AC_UL640_QL65_.jpg"
    },
    {
        name : "cycle",
        price : 264,
        url : "https://m.media-amazon.com/images/I/81yW5Z8Yk0L._AC_UY436_QL65_.jpg"
    }
]

let parent1 = document.querySelector(".parent1");
parent1.classList.add("list");
let dltbtn,card,cart;
products.forEach((product)=>{
    card = document.createElement("div")
    parent1.append(card);
    card.classList.add("product");
    card.textContent = `${product.name}`;
    dltbtn = document.createElement("button");
    dltbtn.textContent = "Remove item";
    card.append(dltbtn);
    cart = document.createElement("button");
    cart.textContent = "Add to cart";
    card.append(cart);
    // dltbtn.addEventListener("click",(e)=>{
    //     console.log("target",e.target);
    //     console.log("currentTarget",e.currentTarget);
        
    // })
})


parent1.addEventListener("click",(e)=>{
    // console.log("target",e.target);
    // console.log("currentTarget",e.currentTarget);
    // console.log(dltbtn.parentElement);
    // console.log(e.target.tagName);
    // console.log(e.target.textContent);
    
    if(e.target.tagName==="BUTTON" && e.target.textContent==="Remove item"){
        // e.target.parentElement.remove();
        e.target.closest(".product").remove();
        
    }
    if(e.target.tagName==="BUTTON" && e.target.textContent==="Add to cart"){
        e.target.textContent = "Item Added to cart"
    }
})




