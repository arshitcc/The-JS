let val = 3;
let negVal = -val;
console.log(negVal);
console.log("================================================================================================================");

console.table([2+2, 2-2, 2*2, 2%3, 2**4, 2/3]);
//  2**4 means 2 raised to power 4.
console.log("================================================================================================================");

let fname = "ARSHIT";
let lname = "CHAURASIA"
let cname = fname + " " + lname;
console.log(cname);
console.log("================================================================================================================");


console.table([ "1"+2, 1+"2", 1+2+"2",2 + true,  "1"+2+2, "1"+2+"2", "1"+"2"+3+4, 1+2+3 ]);
console.table([ typeof ("1"+2), typeof (1+"2"), typeof (1+2+"2"), typeof ("1"+2+2),typeof (2 + true), typeof ("1"+2+"2"), typeof ("1"+"2"+3+4), typeof (1+2+3) ]);
console.log("================================================================================================================");


console.log(true);
// These are just tricky conversions which doesn't sense.
console.log(+true);
console.log(+"");
console.log(true + "hello" + 5);
console.log("================================================================================================================");


let num1, num2, num3;
num1 = num2 = num3 = 4;
console.log(num1);
console.log(num3);
console.log("================================================================================================================");


let soccerGoal = 12;
let footbGoal = 12;
console.log(++soccerGoal);  // pre-increment-opr
console.log(footbGoal++);  // post-increment-opr
console.log("================================================================================================================");


console.log(typeof (true));
/*
    DOCS : 
        1. https://tc39.es/ecma262/multipage/abstract-operations.html
        2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
*/


