const coding = ["C++", "JavaScript", "TypeScript", "Java", "Python", "Rust"];

/* 
    How to use For-Each Loop : 

    coding.forEach(call_Back_Function);

    Let's Derive its syntax to understand : 
    coding.forEach( function name() {} );

    1. It's a callback function so it doesn't have any name. => coding.forEach( function () {} );
    2. Each item of array has to be passed into functions as parameter => coding.forEach( function ( item ) {} );
    3. Now, you can start writing it into body.

*/

coding.forEach ( function (value) {
    console.log(value);
} );
console.log(`=====================================================================`);

// similar can be done with arrow functions :

coding.forEach( (value)=>{
    console.log(value);
} );

console.log(`======================================================================`);

function printMe( item ){
    console.log(item);
}

coding.forEach( printMe );

console.log(`=======================================================================`);

/* For-Each Loop has more access than just value of an array */

coding.forEach( (value, index, array) => {
    console.log(value, index, array);
});


/* Let's Operate on Array of Objects,  mosty we will be dealing with this structure in backend  */

const userData = [
    {
        userName : "Arshit Chaurasia",
        userAge : 20,
        userEmail : "arshit@google.com",
    },
    {
        userName : "Vedant Chainani",
        userAge : 19,
        userEmail : "vedi@google.com",
    },
    {
        userName : "Aditya Pandey",
        userAge : 20,
        userEmail : "aditya@google.com",
    },
    {
        userName : "Abhinendra Singh Tomar",
        userAge : 21,
        userEmail : "abhi@google.com",
    },
]

/* This is how to operation actually on Array of Objects */
userData.forEach ( (user) => {
    console.log(user.userName);
} )


