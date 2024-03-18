// console.log(2==1);
// console.log(2>=1);
// console.log(2!=1);
// console.log(2>1);
// console.log(2<1);


// console.log("2">1);
// console.log("02">1);

// Avoid These types of Conversions : 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* 
    The reason fro different answers is that in JS equality check == and comparisons(>,<,<=,>=) works differently.
    In comparisons null gets converted into a number, or say it is treated as 0.
    That's why null>0 is false but null>=0 true and null==0 is false.

    Similary with undefined.
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Strict Check (===)
console.log(null===0);
/* This equality check checks both data-types and values also */

