
// Immediately Invoked Function Expressions (IIFE)

(function hello (){
    // named IIFE = > the iife defined with name ,
    console.log(`DB Connected`);
})();

// The above function will now run without writing a seperate call for this beacuse the 2nd parentheses gives the call  

// SYNTAX : 
// ()();
// fname();
// fname(num1);

/* 
By enclosing code within an IIFE, you can avoid polluting the global scope with variables and functions. This is especially important in larger projects where multiple scripts may be used, as it helps maintain a clean and organized global scope. 
*/

(function hello2(){
    console.log(`DB Connected Two`);
})();

(() => {
    console.log(`DB Connected Two`);
})();

// Always use syntax ()(); for each IIFE, sometimes you may forget semi-colon()();
/* In this example, 
JavaScript may insert a semicolon after the first IIFE, interpreting it as (function() { console.log('First IIFE'); });. Then, the second IIFE will be treated as a separate function call, resulting in a TypeError because the second IIFE is not a function. */

/* If you don't write a semicolon between two immediately invoked function expressions (IIFEs), JavaScript may interpret them as a single statement depending on the context, which can lead to unexpected behavior or errors in your code. */


// How to pass arguments into an IIFE : 
//  () ();
// 1st parantheses => function name/body
// 2nd parentheses => function call
// fname () ;
// Pass the arguments in 2nd parenthese which we do in our regular functions :

( function welcome(userName) {
    console.log(`Welcome! ${userName}`);
}) ("Arshit");

( (userName) => {
    console.log(`Welcome! ${userName}`);
}) ("Arshit");