let repoOwner = "Arshit Chaurasia";
let repoCount = 4;

/* Avoid this Old syntax to print : */
console.log("Hello my name is " + repoOwner + " and my repocount is " + repoCount);
 
/* Modern Syntax : String Interpolation */
console.log(`Hello my name is ${repoOwner} and my repoCount is ${repoCount}`);

const mname = "arshit-chaurasia-ac";
const myName = new String("arshit-chaurasia-ac");

console.log(myName[0]);
// console.log(myName.__prototype__);

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(2));  // gives the charcter at index=2
// console.log(myName.indexOf('a')); // gives the character's index of very first character

const newName = myName.substring(0,4);  // substring(start-idx, end-idx)
const newName1 = myName.substring(-8,4); // substring will always start from 0
const newName2 = myName.slice(-6,4);  // empty
const newName3 = myName.slice(0,4);   // similar to substring

console.log(newName);
console.log(newName1);
console.log(newName2);
console.log(newName3);
console.log(myName.slice(0, -1));
console.log(myName.slice(4, -1));

// from MDN docs : 
const str = "The morning is upon us.";  
console.log(str.slice(-11,16)); // is u

const userName = "        Arshit    <-+->    Chaurasia        ";
console.log(userName);
console.log(userName.trim()); // trims space from only start & end not everywhere.
console.log(userName.trimStart()); // trims space from only start.
console.log(userName.trimEnd()); // trims space from only end.

// when you do a google search space are converted into + or  %20,  you might have seen this.
const url = "https://arshit.com/arshit%20chaurasia%20ac%20%20%20"
console.log(url.replace('%20', '-')); //replaces for 1st time
console.log(url.replaceAll('%20', '-')); //replaces all
console.log(url.includes('sundar'));
console.log(url.includes('arshit'));
console.log(url.includes('%20'));
console.log(myName.split('-'));