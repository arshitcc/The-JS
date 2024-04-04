/* Mostl of the Loops are array specific */

// ["", "", ""];
// [{}, {}, {}];

const arr = [10,20,30,40,50,60];

for (const num of arr) { // num in just the iterator over arr.
    //console.log(num);
}

const message = "Welcome !! Arshit Chaurasia";

for (const itr of message) { 
    // console.log(`char is ${itr},`);
}
console.log("===========================================================================================================");

// for-of loop can be applied over strings, arrays, and any objects

// Maps in JavaScript : 
const map = new Map();
// The best method to insert into map is set(key,value) not map[key] = value; 

map.set('IND', 'India');
map.set('USA','United States of America');
map.set('UK','United Kingdom');
map.set('FRN','France');
map.set('IND', 'India');
// map-stores only unique values
map.set('UK','UttaraKhand');
// map-stores in overwriting matter

// console.log(map);

// for (const key of map) {
//     // console.log(typeof key); // array 
//     console.log(key);
// }

// for (const [key,value] of map) {
//     // console.log(typeof key); // string 
//     console.log(key, ":=>", value);
// }

console.log(`=============================================================================================================`);

const user = {
    userName : "Arshit Chaurasia",
    userAge : 20,
    userEmail : "arshit@google.com",
};

for (const [key,value] of user) { // user in not iteratable, this happens only in for-of Loop
    console.log(user[key]); 
}




