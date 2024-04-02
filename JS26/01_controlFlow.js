// if

if (true) {}
if (false) {}

const isLoggedIn = true;

// if(isLoggedIn){
//     console.log(`Welcome! User`);
// }

//  > , < , >= , <= , == , != , === , !==

// if ( 3 !== "4"){
//     console.log("Executed");
// }

let score2 = 400;
var score = 400;

if (score > 200) { 
    console.log(`User Score : ${score}`);
}
// console.log(`User Score : ${score}`); // that's why don't use var, it is now out of range.

let balance = 9841;

if (balance < 10000) console.log(`Insufficient Monthly Average Balance !!`);

if (balance < 10000) {
    balance -= (10000-balance)*0.05;
    console.log(`Due to Insufficient MAB balance, charges has been deducted, Current Balance is INR ${balance}`);
}
else{
    console.log("Here are some speacial Offers only for you !! ");
}

if (balance < 5000) {
    console.log(`Balance is less than 5000`);
}
else if(balance < 7500){
    console.log(`Balance is less than 7500`);
}
else if(balance < 10000){
    console.log(`Balance is less than 10000`);
}
else if(balance === 1000){
    console.log(`You are at Peak Balance : INR ${balance}  :) `);
}
else {
    console.log(`Don't Worry ! you have sufficient balance : INR ${balance}  :) `);
}

// Bad Practicing : 
if(balance < 10000) console.log("1"), console.log("2"), console.log("3");

const userLoggedIn = true;
const userOwnDC = true;
const googleAuth = false;
const emailAuth = false;
const guestUser = true;

if (userLoggedIn && userOwnDC) {
    console.log("Continue Your Shopping!!");
}
else if(!userLoggedIn){
    console.log("Please Login to continue your shopping");
}
else {
    console.log("Please Issue a Debit Card to Shop");
}

if( googleAuth || emailAuth || guestUser){
    console.log("User Logged In");
}




