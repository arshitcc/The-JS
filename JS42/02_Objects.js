function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, userAge){
    this.username = username;
    this.userAge = userAge;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Age is ${this.score}`);
}

const son1 = new createUser("Arshit", 20); 
// It is important to use 'new' to update that you have added any or more prototype 
const son2 = createUser("Swarit", 14)

son1.printMe()


/*

    Here's what happens behind the scenes when the new keyword is used:

    A new object is created: The new keyword initiates the creation of a new JavaScript object.

    A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

    The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/