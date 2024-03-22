// Array : 

const arr = [ 0,10, 20,30, 40];
const arr1 = [ 0,10, 20,30, 40, "Arshit", true];

console.log(arr1);
console.log("=========================================================================");

/* 
What does this mean ?  :
    => JavaScript arrays are resizable and can contain a mix of different data types. 
       (When those characteristics are undesirable, use typed arrays instead.)

    => JavaScript array-copy operations create shallow copies. 
        (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

*/

const arr2 = ["Arshit", "Chaurasia", "22UICS111"];
const arr3 = new Array(0,10,20,30,40);

console.log(arr3[2]); 
console.log("=========================================================================");



/* Array Methods : */

arr.push(50);
arr.push(-10);
console.log(arr);
arr.pop();
console.log(arr);

console.log("=========================================================================");


/* unshift and shift */
arr.unshift(69);  // adds element at 0th idx and shifts every elements idx
console.log(arr);
arr.shift();  // removes element at 0th idx and shifts every elements idx
console.log(arr);

console.log("=========================================================================");


/* The above both are very costly in terms of operations so never use them. */

console.log(arr.includes(90));
console.log(arr.indexOf(30));
console.log("=========================================================================");


/* The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. */

const arr4 = arr.join();  // by-defaut seperated by commas
const arr5 = arr.join('+');
console.log(arr);
console.log(arr4);
console.log(arr5);


/* Difference in Splice & Slice  : */

console.log("A", arr);
// console.log();  // This itself is a new-line.
const newArr1 = arr.slice(1,3); // It makes a sub-array from idx = [start, end) without disturbing parent array
console.log("B",arr);
console.log(newArr1);

const newArr2 = arr.splice(1,3); // It makes a sub-array from idx = [start, end] and deletes them parent array
console.log("C", arr);
console.log(newArr2);

/* The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]






