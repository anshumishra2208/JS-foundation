function Product(name,price){
    this.name = name;
    this.price = price;
    return this;
}

let a = Product("Iphone",345294)
// console.log(a);


class User{
    constructor(name,age){
        this.name = name
        this.age = age        
    }
}

b = new User("anshu",18)
// console.log(b);
// console.log(b.age);





class Bank{

    #balance
    constructor(initialBalance){
        this.#balance = initialBalance
    }

    getBalance(){
        console.log(this.#balance);
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log("Insufficient Balance");
            return
        }

        this.#balance = this.#balance - amount
        console.log(this.#balance);
    }

    deposit(amount){
        this.#balance = this.#balance + amount;
        console.log(this.#balance);
    }

    static taxCalculation(){
        console.log("Tax Calculating...");
    }

}


const acc1 = new Bank(500)
const acc2 = new Bank(2000)
// acc1.balance = 2849520395

// acc1.getBalance()


class Hotel{

    item = "samosha"
    constructor(){

    }

    menuPage(){
        console.log("here is your menu sir");
    }

    order(item){
        console.log("we are delievering your", item);
        console.log("Thanks for shopping with us");
    }


    static kitchen(){
       let foods =  ["samosa", "rasogoollah", "namkeen","pizza"]
        console.log(foods);
    }
}

let first = new Hotel()
// first.order("pizza")



class Showroom{
    
    constructor(){
        console.log("welcome to our showroom");
    }

    getVehicle(choice,color){
        this.vehicle = choice;
        this.color = color
    }

    
}

let car = new Showroom()
car.getVehicle("thar","black")
// console.log(car);


let truck = new Showroom();
truck.getVehicle("truck","red")
console.log(truck);