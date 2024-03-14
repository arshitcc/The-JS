"use strict" 
/* 
    With the help of above line our code will be treated as new version of JS,  Mostly by deafult browser understands old JS when nodejs comes into scene then it by default tells to treat the JS in new version.

    Earlier versions were not having any arrowFunctions, etc..
*/

/*
    alert(3+3)

    // The above thing will give error when you run this in your terminal but not in browser console.
*/

// console.log(3+3);
// console.log("Arshit Chaurasia");


//  DATA Types : 

let name = "ARSHIT CHAURASIA";
let age = 20;
let isLogged = true;
let city = null; // different from undefined
let gender;

/*
 number : 2^53
 string : ""
 boolean : true/flase
 null : standalone value
 undefined : (means not defined but )
 symbol : mostly used in React.js, Figma  for  Components(Unique)
 object : 
*/

console.table([typeof "arshit", typeof age, typeof isLogged, typeof city, typeof gender ]);
// IMP Interview Ques. POV

console.log(typeof null);
console.log(typeof undefined);