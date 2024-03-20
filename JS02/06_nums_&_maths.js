/* ----------------------------------------------- Number System ----------------------------------------------------------------  */
const num1 = 400;
console.log(num1);

// The below will give you an object of number
const num2 = new Number(300);
console.log(num2);

console.log(num2.toString());
console.log(num2.toString().length);
console.log(num2.toFixed(3));

/* 
It gives you decimal values upto only 2 rest are rounded-off .
Most common example is your Bank Balanace, there toFixed(2) is used .
*/

const num3 = 69.12344;
console.log(num3.toPrecision(2)); // It truncates the value after 2 number places from the start not after the decimal.
console.log(num3.toPrecision(4));

const num4 = 1536587.5646813;
console.log(num4.toLocaleString()); // Prints number according to US / Indian Number System
console.log(num4.toLocaleString('en-IN'));  // Prints Number according to Indian - Number System


/* ------------------------------------------------- Maths ----------------------------------------------------------------------*/

console.log(Math);
/* 
    The prints this as an object and it has its various prototypes. 
    Let's Investigate its various prototypes  :
*/

console.log(Math.abs(-5.4));
console.log(Math.round(-123.321));
console.log(Math.ceil(-4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 0.69, 3, 6, 8));
console.log(Math.max(4, 3, 6, 5, 69));

// Math.random() function generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random()); // throws random number between [0-1)
console.log(Math.random()*10); // this will throw number from [0.0 - 1)*10 => [0.0 - 10)
console.log((Math.random()*10) + 1); // this will throw number from [0.0 - 10) + 1  => [1 - 11)

/* In order to print the numbers according to your range : DO this */
/* We can call it as a Formula : */
const min = 10;
const max = 20;
console.log((Math.random()*(max - min + 1))  +  min);  // [10, 21)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // [10,20]
