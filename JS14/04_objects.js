/* 03 : Earlier file was all about Object Literals. */

const metaUser = new Object();  // Singleton Object
const metaUser2 = {};   // Object Literal

// console.log(metaUser);
// console.log(metaUser2);

metaUser.name = "Arshit Chaurasia";
metaUser.age = 20;
metaUser.isLogged = false;

// console.log(metaUser);

const user = {
    email : "arshitcc@google.com",
    fullname : {
        userFullName : {
            firstName : "Arshit",
            lastName : "Chaurasia"
        }
    }
}

// Demonstration of Nesting of Objects : 

// console.log(user);
// console.log(user.fullname);
// console.log(user.fullname.userFullName);
// console.log(user.fullname.userFullName.firstName);


// Merge 2 Object ? 

const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "c",
    4 : "d",
}

const obj3 = {
    5 : "e",
    6 : "f",
}

// Not a good way to merge two objects
// const obj3 = {obj1, obj2}; // This operation has done nesting of objects.

const merge = Object.assign({}, obj1, obj2, obj3);   // here obj1's and obj2's  key are copied to this empty {} which is target
// const obj3 = Object.assign(obj1, obj2);    // here obj2's key are copied to obj1,  here obj1 is the target
// This method copies all enumerable own properties from source objects to a target object. It returns the modified target object.
// console.log(merge); 

// We can also use spread operator to merge objects as similar to arrays.
const merged = { ...obj1, ...obj2, ...obj3};
console.log(merged);


// When we will taking data from backend then usually we store them in [ Array Of Objects ]
const users = [
    {
        userId : 1,
        userName : "Arshit Chaurasia",
        userEmail : "arshitcc@google.com",
    },
    {
        userId : 2,
        userName : "Arshit",
        userEmail : "arshitcc@microsoft.com",
    },
    {
        userId : 3,
        userName : "Chaurasia",
        userEmail : "arshitcc@amazon.com",
    },
];

console.log(users[1].userEmail);

console.log(metaUser);

// The data is converted to array format : 
console.log( Object.keys(metaUser));
console.log( Object.values(metaUser));
console.log( Object.entries(metaUser)); // entries : key and val are both converted into arrays , => very less used 


/* 
While looping on Object sometimes it may happen that the value doesn't exit at that time server may throw error, so to avoid this
we perform a check 
*/ 

console.log(metaUser.hasOwnProperty('isLogged'));
console.log(metaUser.hasOwnProperty('isLoggedIn'));

// Read more on MDN Docs : 
 /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object */



