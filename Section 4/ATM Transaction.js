let balance = 10000;
let withdrawalAmount = 3000;
let remainingBalance;
if(withdrawalAmount>0 && balance>withdrawalAmount){
    remainingBalance = balance - withdrawalAmount;
    console.log("Withdrawal Successfull");
    console.log("Remaining Balance: ₹",remainingBalance);
}
else{
    console.log("Invalid Inputs");
}