/*
    Stack (Primitive Data-Types),  Heap (Non-Primitive Data-Types)

    Stack : Since primitive data types are stored in it so a copy of variable is served :
    
    Heap : Since Non-primitive data types are stored in it, so a direct refernece is passed to it.
*/


let myName = "Arshit Chaurasia";
let anotherName = "Silver City King";

anotherName = myName;
console.log(myName);
console.log(anotherName);

anotherName = "Arshit";
// no change in myName is done, beacause copy of myName was provided to anotherName not the reference.
console.log(myName);
console.log(anotherName);

let user01 = {
    email : "arshit@google.com",
    age : 20,
}

let user02 = user01;
console.log(user01.email);
console.log(user02.email);

user02.email = "arshitcc@google.com";
/* 
    The change was done only in user02.email but user01.email is also changed because when you did user02 = user01, 
    reference of the object was given to user02 not the copy 
*/
console.log(user01.email);
console.log(user02.email);
