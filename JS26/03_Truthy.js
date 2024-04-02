// const userDetails = "";
const userDetails = [];

if(userDetails){
    console.log("Got User Details");
}
else{
    console.log("Empty User Details");
}

/* 
1. Falsy Values : 

    false, 0, -0, "", BigInt, 0n, null, undefined, NaN

2. Truthy Values : 

    except Falsy values everything is true

    true,  "0", 'false', " ", [] ,{}, function(){}
*/

// Actual Check : 

if (userDetails.length === 0) {
    console.log("Arshit Chaurasia");
}

const Obj = {};

if (Object.keys(Obj).length === 0) {
    console.log(Object.keys(Obj));
    console.log("Empty Object");
}

// Object.keys(Object) => retuns an array of data of an object

const user = {
    userName : "a",
    userem : "a@a",
    userbalance : 1200,
}

const userdata = Object.values(user);
console.log(userdata);

/* Mostly === is used for condition checking because : 

    false == '',
    false == 0,
    0 == '',

    => The above all comparisons give value true
*/

/* 
    Nullish Coalescing Operator ( ?? ) : null , undefined 

    A very crucial operator to deal with null and undefined value. Let say if you fetching some data from database and no response was given and according to that response the other things were dependending, so now if null response is given then further calculaton or further code is in trouble .

    Thats why this  ?? is used ,
    if checks if a valid response is given from the function or not.
    if not then deal with that
*/


let num1 ;

num1 = 5 ?? 10;
console.log(num1);

num1 = null ?? 50;
console.log(num1);

// This is just an example, In actual scenario, the (50) will going to be a function that will be returning some response .

num1 = undefined ?? 100;
console.log(num1);

num1 = undefined ?? 10 ?? 20;
console.log(num1);

/* 
    Terniary Operator  -> Shorthand of If-Else : 
    Syntax : (condition) ? true : false 
*/

const internet = 1483;
(internet <= 1024) ? console.log(`You have used 50% of your 2.5 GB/day plan. Internet Balance : ${internet} MB`) : console.log(`Internet Balance : ${internet} MB`);




