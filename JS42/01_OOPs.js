/* 
    Javascipt have classes.

    Javascript primarily a prototype-based language, and its classes are primarily syntatic sugar coated.

    In other words, A more familiar syntax for developers coming from class-based languages 
    such as Java / C++.
    
    But under the hood it works somewhat differentlty.

 */

const user = {
    userFirstName : "Arshit",
    userLastName : "Chaurasia",
    userLoggedIn : true,
    userAge : 20,

    userData : function(){
        console.log(`Welcome ${this.userFirstName}!! to Dashboard`);
        console.log(this);
    }
}

console.log(user.userFirstName);
// console.log(user.userData());
console.log(this); // Always empty in global Node.js-Environment, while in brower environment you get 'Window' object

// How to create mutliple users / objects for repeated work  ? 
// 1. Do it with Function. HOW ? Then
// 2. OOPs 

function userDetails( userName, userAge, userLoggedIn){
    this.userName = userName;
    this.userAge = userAge;
    this.userLoggedIn = userLoggedIn;
    this.greetings = function(){
        console.log(`Welcome ${userName}!! to Dashboard`);
    }

    // Without returning also, implicitly it returns
    return this;
}

// const user1 = userDetails("Arshit",20,true);
// const user2 = userDetails("Swarit",15,false);

// console.log(user1);  // As we can the instancer created for user1 has been overwrited by the deatils of user2

// Simply we can avoid do this by using keyWord 'new'

const user1 = new userDetails("Arshit",20,true);
const user2 = new userDetails("Swarit",15,false);

console.log(user1);
console.log(user1.constructor);
console.log(user2);

/*
    Step 1 : The keyword 'new' creates an empty object or empty instance.
    Step 2 : 'new' By calling the constructor function and fill the arguments into that function
    Step 3 : Then in 'this' keyword of the context of constructor function eveything gets injected into it.
    Step 4 : Now we can access inside the funciton with 'this'

*/

// Also Can verify / compare of instances

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
  
console.log(auto instanceof Car);
  // Expected output: true
  
console.log(auto instanceof Object);
  // Expected output: true
