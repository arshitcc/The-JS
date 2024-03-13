/* INVESTIGATING VARIABLES */
const accountID = "22UICS111";
let accountName = "ARSHIT CHAURASIA";
var accoundEmail = "arshit@gmail.com";
accountProff = "Software Developer";
let accountAge;

// accountID = "22UICS101"
/*
    Can't Assign value to a const variable , if so done error occurs
*/

console.log(accountID);

/*To print multiple variables we use table() this gives every variables value in an organised format*/
console.table([accountID, accountName, accoundEmail, accountProff, accountAge]);

/* Let's Change Variables */
accountName = "arshit chaurasia"
accoundEmail = "arshit@arshit.com"
// accountID = "22UCS111"    
accountProff = "Bussinessman"
accountAge = "20"

console.table([accountID, accountName, accoundEmail, accountProff, accountAge]);


