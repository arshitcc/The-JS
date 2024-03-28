
function sayMyName(){
    console.log("Arshit");
    console.log("Chaurasia");
}

// sayMyName  // => This here is reference : 
// sayMyName() // => This here is execution : 

sayMyName();

// function add(num1, num2){
//     console.log(num1+num2);
// }

function add(num1, num2){
    return num1 + num2;
    console.log("I am not reachable !!");
}

const res = add(60,9);
console.log("Result : ", res);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter your UserName !");
        return;
    }
    return `Welcome!! ${username}`;
}
console.log(loginUserMessage());  // If no argument is passed 'username' will be considered as undefined.


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter your UserName !");
        return;
    }
    return `Welcome!! ${username}`;
}
console.log(loginUserMessage("Arshit"));

// This how you will be writing mainly in production, => as username can be undefined so '!' not-operator is used 
function loginUserMessage(username){
    if(!username){
        console.log("Please Enter your UserName !");
        return;
    }
    return `Welcome!! ${username}`;
}
console.log(loginUserMessage("Arshit"));


/* 
    In Building the Application user will be giving anynumber of data example E-commerce Cart : here u don't know user will keep how many items.  => In that u don't know how many  parametes will be coming so we user Rest Operator ...
*/

/* This function will return an array of all the arguments passes into an  */
function cartItems(...itemPrice){
    return itemPrice; 
}
console.log(cartItems(100,200,300));

function cartItems(val1, val2, ...itemPrice){
    return [val1, val2, itemPrice]; 
}
console.log(cartItems(100,200,1000,2000,3000,4000));
console.log(cartItems(100,200,1000,2000,3000,4000).flat(Infinity));

/* Object Handling :  */

const user = {
    userName : "Arshit Chaurasia",
    userAge : 20,
    userEmail : "arshitcc@google.com", 
}

function handleObject(obj){
    console.log(`Username : ${obj.userName} Age : ${obj.userAge} Email : ${obj.userEmail} `);
}

// handleObject(user);

// Passing Object inside the function : 
handleObject({
    userName : "Arshit Chaurasia",
    userAge : 20,
    userEmail : "arshitcc@gmail.com",
});


const myArray = [100,200,300,400];

function secondValue(array){
    return array[1];
}

// secondValue(myArray);

// Passing Array inside the function :  
console.log(secondValue( [1000,2000,3000,4000] ));

