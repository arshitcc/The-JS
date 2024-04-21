const num = Math.ceil(Math.PI);
console.log(num);



// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const pi = Object.getOwnPropertyDescriptor(Math , "PI");
console.log(pi);

// We cannot change the property as they are disabled to overwrite, re-calculate, iterate etc.

// pi gives the description of property 'PI' of object 'Math'

// We cannot change the properties of predefined Object
// But we can change the properties of self-defined Object

const user = {
    userName : "Arshit Chaurasia",
    userAge : 20,
    userLogged : true,
    userFriends : function (){
        return 9;
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'userName')); // got the description , Now lets change its property


// Object.defineProperty(user, 'userName', {
//     writable : false,
//     configurable : false,
// })

// console.log(Object.getOwnPropertyDescriptor(user, 'userName'));

// These are used so that It allows you to define the behavior of the property, such as whether it is writable, enumerable, or configurable.
// you can say it makes data as secure also

// Let's say if want that on the object obj1 any of its key's enumerable property should be disabled so that on iteration it will no be shown


// Once  you have used defineProperty above  you cannot redefine , that's why commenting the above definiton : 

Object.defineProperty(user, 'userName', {
    enumerable : false, // now the key userName is enumerable or iteratable
})
console.log(Object.getOwnPropertyDescriptor(user, 'userName'));

// But we can still change other key's of the object if not used defineProperty on them before.

// Object.defineProperty(user, 'userAge', {
//     enumerable : false, // now the key userName is enumerable or iteratable
// })
// console.log(Object.getOwnPropertyDescriptor(user, 'userAge'));

// // as object is not iteratble so we use
for (let [key,value] of Object.entries(user)) {
    
    // console.log(`${key} => ${value}`);  // 😂

    /* This is what we call code-fat-gaya 😂 .  To avoid this we need to *add  some checks : */

    if( typeof value !== 'function'){
        console.log(`${key} => ${value}`);
    }

}


