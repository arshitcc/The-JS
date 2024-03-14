/* 

TYPE CONVERSIONS : 

    They are going to be used in forms like data from user has to be stored in which type of format as browser sends data in form of string mostly, so its our responsibility to convert data into a proper manner to obtain the desired result from the given data.
  
*/


/* Investigaton : 0 */
let marks = "17";
console.log(typeof(marks));
let valInNum = Number(marks);
console.log(typeof(valInNum));
console.log("-----------------------------------------------------");

/* Investigation : 0 */
let a = "69HELL0";
console.log(typeof a);
console.log(a);
let num = Number(a);
console.log(typeof num);
console.log(num); // It says NaN means Not a Number
console.log("-----------------------------------------------------");

/* Investigation : 1 */
let b = null;
console.log(typeof b);  // object
console.log(b);
let num1 = Number(b);
console.log(typeof num1);
console.log(num1);
console.log("-----------------------------------------------------");

/* Investigation : 2 */
let c = undefined;
console.log(typeof c);  // undefined
console.log(c);
let num2 = Number(c);
console.log(typeof num2);
console.log(num2);
console.log("-----------------------------------------------------");

/* Investigation : 3 */
let d = true;
console.log(typeof d);  // boolean
console.log(d);   // here it throws true unlike in c++ they throw 1
let num3 = Number(d);
console.log(typeof num3);
console.log(num3);
console.log("-----------------------------------------------------");

/* Investigation : 4 */
let e = "ARSHIT";
console.log(typeof e);  // string
console.log(e);   
let num4 = Number(e);
console.log(typeof num4);
console.log(num4);
console.log("-----------------------------------------------------");

/* Investigation : 5 */
let isLogged = 0;
console.log(typeof isLogged);
console.log(isLogged);
let isLog = Boolean(isLogged);
console.log(typeof isLog);
console.log(isLog);
console.log("-----------------------------------------------------");

/* Investigation : 6 */
// It simply says true for every thing except 0 as number & "" as empty string
// "69", 69 => true
let isLogin = "69BenStokes";
console.log(typeof isLogin);
console.log(isLogin);
let islogedin = Boolean(isLogin);
console.log(typeof islogedin);
console.log(islogedin);
console.log("-----------------------------------------------------");

let islg = "";
console.log(typeof islg);
console.log(isLogin);
let islgin = Boolean(islg);
console.log(typeof islgin);
console.log(islgin);
console.log("-----------------------------------------------------");

/* 
    1 => true, 0 => false
   "Benstokes" => true
   "" => false
*/

/* 

TYPE CONVERSIONS : 

    They are going to be used in forms like data from user has to be stored in which type of format as browser sends data in form of string mostly, so its our responsibility to convert data into a proper manner to obtain the desired result from the given data.
  
*/