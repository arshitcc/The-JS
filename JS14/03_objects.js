/* 
=> Objects created from constructor  Object.create are called as Singleton Object. 
=> Objects created from literals are not singleton. 
*/

const sym1 = Symbol("Symbol 1");

const user = {
    userName : "Arshit", // system considers key as string
    // 0 : "Arshit",  numbers can also be used instead of key.
    "user Full Name": "Arshit Chaurasia",
    [sym1] : "user Symbol 1",  // now this is passing the Symbol in object
    //  sym1 : "user Symbol 1"  // this is not way to pass symbol in object 
    userAge : 20,
    userEmail : "arshit@gogle.com",
    userLogged : true,
    userLastLogWeek : ["Wednesday", "Friday", "Saturday"],
    greet : function(){
        console.log("Greet!! User");
    }
};

/* Accessing Objects data */
console.log(user.userEmail);
console.log(user["userEmail"]); // system considers key as string so you need to mention "key" in square braces to search.

// console.log(user.user Full Name);  
// If using string as key then it Cannot be accessed by '.'operator.

console.log(user["user Full Name"]);
// console.log(user."user Full Name"); // cannot be used.


console.log(user.sym1); // This syntax is not accesing Symbol sym1, it 
console.log(user[sym1]); // This syntax is now accesing Symbol sym1, it 

console.log(user.userEmail);
user.userEmail = "arshitcc@microsoft.com";  // this will overwrite the value of key.
console.log(user.userEmail);

// Object.freeze(user);  // This freezes the object so that data cannot be modified.
// user.userEmail = "arshitcc@aws.amazon.com";
// console.log(`data didn't changed => ${user.userEmail}`);


console.log(user);  // You will find how this shows symbol 

// Unfreeze the object to see this
user.greetings = function(){
    console.log(`Greetings!! User ${this.userName} `);  // use this.operator to access keys.
}

console.log(user.greetings);  // it just return a function (anonymous) bcz declared after object declaration.
console.log(user.greet);   // it return function with its name
console.log(user.greetings());
console.log(user.greet());

// Read more on MDN Docs : 
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */
