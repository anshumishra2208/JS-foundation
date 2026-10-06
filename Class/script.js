class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    login(){
        console.log("logged in");
    }
    logout(){
        console.log("logged out");
    }

}

class Buyer extends User{
    cart = []
    constructor(name,email){
        super(name,email)
        console.log("buyer constructor");
    }
    addToCart(item){
        this.cart.push(item)
    }
    removeFromcart(){}
    showItems(){
        console.log(this.cart);
    }
}

class Seller extends User{

    addProduct(){}
    removeProduct(){}
}

class Admin extends User{

    monitor(){}
}

let b1 = new Buyer("anshu","anshu@gmail.com")
b1.login()
console.log(b1);
b1.addToCart("apple")
b1.showItems()