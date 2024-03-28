
const user = {
    userName : "Arshit",
    userAge : 19,
    userCreditScore : 769,

    welcomeMessage : function(){
        console.log(`${this.userName}!! Welcome to SBI Net Banking Portal`);
        // console.log(this); // This will give the values that the current context is holding.
    }
    /* this operator is used to access inside the current context of the scope. */
}

user.welcomeMessage();

user.userName = "Swarit";
user.userAge = 14;
user.userCreditScore = 824;

user.welcomeMessage();


console.log(this);  // {}
// this will print {}, as nothing is in node.js environment but,
/* On browser console, this print various DOM objects as environment are set according to that. */
// console.log(this === window); // true in a browser environment


/* ====================================================================================================================== */

function hello(){
    let userName = "Arshit";
    console.log(this.userName); // undefined, 
    // console.log(this);  // what are in context inside the function
}

hello();

// const hello2 = function (){
//     let userName = "Arshit";
//     console.log(this.userName);   // undefined
// }

// hello2();

const hello3 = () => {
    let userName = "Arshit";
    console.log(this.userName);   // undefined
    console.log(this);  // {}
    /* 
    When using arrow functions, the value of this is inherited from the lexical scope. If the arrow function is defined in a global context or within a scope where this is not explicitly set, this will be undefined in non-strict mode and {} in strict mode. 
    */

    /* when we use log(this) it is in strict mode and log(this.userName) it is now in non-strict mode */
}

hello3();

// Diifferent Ways to write arrow-functions : 

// 1.
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// 2. Writing as Implicit Function
// const addTwo = (num1, num2) => num1 + num2;

// 3. Also we can use parentheses so no need to use return-keyword,  we will be mostly seeing this in react,
// const addTwo = (num1, num2) => (num1 + num2);

// we can even return an object from arrow-function : 
const addTwo = (num1,num2) => ( {
    userName : "Arshit",
    userAge  : 20,
    userCreditScore : 811,
});

// Just for example the arguments are not in use.
console.log(addTwo(60,9));  

const array = [ 1, 2, 3, 4, 5];

// array.forEach( function () {} );
// array.forEach( () => {} );
// array.forEach( () => () );