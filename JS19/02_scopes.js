
let num1 = 1000; // available global scope

if(true){ // local scope
    let num1 = 100;
    const num2 = 200;
    var num3 = 300;

    console.log("Local Scope : ", num1);
}

// console.log(num1);   // Out of Scope
// console.log(num2);   // Out of Scope
// console.log(num3);      // WTF

console.log("Global Scope : ", num1);

/* NOTE :  Scopes also vary on from coding-environment and console-of-browser */

// JS22 : 

function one(){
    const userName = "Arshit";
    function two(){
        const workLink = "leetcode.com/arshitcc";
        console.log(`user : ${userName} is doing great work at ${workLink}`);
    }
    // console.log(`userWork : ${workLink}`); // workLink is not accessible
    two();
}
one();

if (true) {
    const userName = "Arshit";
    if(userName === "Arshit"){
        const workLink = "leetcode.com/arshitcc";
        console.log(userName + " " + workLink);
    }
    // console.log(workLink); // workLink is not accessible
}
// console.log(userName); // userName is not accessible

/* ==================================================INTERESTING================================================================*/

/* Functions VS Expressions */

console.log(addOne(5));

function addOne(num1){
    return num1 + 1;
}

// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

// The below thing is called expression - function
const addTwo = function(num2){
    return num2 + 2;
}

console.log(addTwo(5));




