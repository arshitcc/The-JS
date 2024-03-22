const marvel_heros = ["Ironman", "Thor", "Captain America", "Dr. Strnage"];
const dc_heros = ["Superman", "Batman", "Flash", "Wonder Woman"];

// Not a good to way to merge 2 arrays
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4]);
// console.log(typeof marvel_heros[4]);

// Good but at once you can merge only two array
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

// Perfect to merge any number of arrays : 
const extra_heros = ["Black Widow", "Wanda Vision"];
const heros = [...marvel_heros, ...dc_heros, ...extra_heros];   // this is called as spread-operator in JS.
console.log(heros);

console.log("================================================================================================================");


const arr = [10,20,30,[40,[50,[60]]], 70, [80,90,[100,110]]];
console.log(arr);

const newArr = arr.flat(2); 
console.log(newArr);
const newArr2 = arr.flat(Infinity);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth(1,2.. Infinity).

console.log("================================================================================================================");


/* Data Scrapping is used while fetching data from a page because we get data in form of Node,Lists,Strings,etc but all what we need is array. */

console.log(Array.isArray("Arshit")); //false
console.log(Array.from("Arshit")); // creates array from given data
console.log(Array.from({ cname : "Arshit"})); 
// cannot dircetly convert object into array, we have give instruction of on what basis array has to be made either key or value.
console.log("================================================================================================================");

/* Array.from : how to make array from Set, Map, Node, array-like object, 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from */

let sub1 = 19.5;
let sub2 = 17;
let sub3 = 20;

console.log(Array.of(sub1, sub2, sub3)); // Returns a new array from a set of elements.

/* 
    Examples of array.of() : 

    console.log(Array.of('foo', 2, 'bar', true));
    // Expected output: Array ["foo", 2, "bar", true]

    console.log(Array.of());
    // Expected output: Array []
 */
