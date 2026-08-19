let units = 200;
let first;
let second;
let third;
let originalBill;
let discount;
let finalBill;
if(units>=2000){
    first = 5*100;
    second = 7*100;
    third = (units - 200)*10;
    originalBill = first + second + third;
    discount = (10/100)*originalBill;
    finalBill = originalBill - discount;
    console.log("Units: ",units);
    console.log("Original Bill: ",originalBill);
    console.log("Discount: ",discount);
    console.log("Final Bill: ",finalBill);
}
else{
    first = 5*100;
    second = 7*100;
    third = (units - 200)*10;
    originalBill = first + second + third;
    discount = (0/100)*originalBill;
    finalBill = originalBill - discount;
    console.log("Units: ",units);
    console.log("Original Bill: ",originalBill);
    console.log("Discount: ",discount);
    console.log("Final Bill: ",finalBill);
}