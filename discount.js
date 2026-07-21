// Discount Eligibility and Calculation
let BurgerPrice = 500;
let CokePrice = 30;

if (BurgerPrice >= 500 ){
    console.log("You are eligible for a discount on your order!");
}else{
    console.log("You are not eligible for a discount on your order.");
}

if (BurgerPrice >= 500 && CokePrice >= 30){
    const totalAmount = BurgerPrice + CokePrice;
    const discount = totalAmount * 0.1;
    const payableAmount = totalAmount - discount;
    console.log(`Total Amount: ${totalAmount}`);
    console.log(`Discount: ${discount}`);
    console.log(`Payable Amount: ${payableAmount}`);
}else if (BurgerPrice >= 500 || CokePrice >= 30){
    const totalAmount = BurgerPrice + CokePrice;
    console.log(`Your Payable Amount is: ${totalAmount}`);
}else{
    console.log("You are not eligible for a discount on your order.");
}

// Discount Calculation based on Total Amount
const totalAmount = 5000;
if (totalAmount > 5000){
    const payment = totalAmount - (totalAmount * 0.3);
    console.log (`Your Payable Amount is: ${payment}`);
}else if (totalAmount > 3000){
    const payment = totalAmount - (totalAmount * 0.2);
    console.log (`Your Payable Amount is: ${payment}`);
}else{
    const payment = totalAmount;
    console.log("You are not eligible for a discount on your order.");
    console.log(`Your Payable Amount is: ${payment}`);
}

// Discount Calculation based on ternary operator
const totalAmount2 = 4000;
const payment2 = 
    totalAmount2 > 4000 
    ? totalAmount2 - (totalAmount2 * 0.2) 
    : totalAmount2 > 3000 
    ? totalAmount2 - (totalAmount2 * 0.1) 
    : totalAmount2;
console.log(`Your Payable Amount is: ${payment2}`);

// Discount Calculation based on Total Amount using
// Improved discount calculation logic
let orangePrice = 100;
let applePrice = 200;
let bananaPrice = 50;
let lemonPrice = 30;
let tomatoPrice = 20;
let chilliPrice = 10;
let totalPrice = orangePrice + applePrice + bananaPrice + lemonPrice + tomatoPrice + chilliPrice;

if (totalTaka >= totalPrice ){
    const discount = totalPrice * 0.1;
    const payableAmount = totalPrice - discount;
    const customerExchange = totalTaka - payableAmount;
    console.log(`Total Price: ${totalPrice}`);
    console.log(`Discount: ${discount}`);
    console.log(`Payable Amount: ${payableAmount}`);
    console.log(`Customer Exchange: ${customerExchange}`);
}
