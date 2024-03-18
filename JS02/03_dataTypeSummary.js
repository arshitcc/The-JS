// Primitive Data-Types (Call by Value)  :
// Whenever their data is served their copy is served not with reference.
// 7 types : String, Number, Boolearn, null, undefined, Symbol (they are used in frontend advance js for uniquely identifying the components), BigInt(Scientific values or very large numbers)

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false; 
const outsideTemp = null; 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id);
console.log(typeof (anotherId));

// That's how symbol works, even the values are same in both the variables but symbols are unique in themselves.
console.log(id === anotherId);

// let a = 2;
// let b = 2;
// console.log(a===b);

// bigInt
const bigNumber0 = 986457532114645; //normal number
const bigNumber1 = 3456543576654356754 // overflowed from 2^53
const bigNumber2 = 3456543576654356754n  // problem solved now it is stored as bigInt

// Non-Primitive (Call by Reference) : 
// Array, Objects, Functions

// Array : 
const names = ["ARSHIT", "ADIYA", "VEDANT", "ANUJ", "DISHANK", "ASHUTOSH" ];

// Objects are stored as key-value pairs :
let myObject = {
    sname : "ARSHIT CHAURASIA", 
    sgpa : 8.49,
}

// Function  :
/* also can be done: 
    function(){

    }
 */
const myFunction = function(){
    console.log("Hello!! JS");
}

/*
    Return type of variables in JavaScript :
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */

// Return of non-primiteve data types are object.
console.log(typeof(names));
console.log(typeof(myFunction)); // function means functionObject
console.log(typeof(scoreValue));
console.log(typeof(bigNumber0));
console.log(typeof(bigNumber1));
console.log(typeof(outsideTemp));
console.log(typeof(bigNumber2));
// https://262.ecma-international.org/5.1/#sec-11.4.3z