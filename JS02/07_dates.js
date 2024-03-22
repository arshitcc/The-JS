let today = new Date();  //this gives object
let dt = Date(); // this gives strign

console.log(typeof (Date()));
console.log(today);
console.log(today.toString());
console.log(today.toDateString());  // prints only date
console.log(today.toISOString());
console.log(today.toJSON());
console.log(today.toLocaleString());  // Month/Date/Year
console.log("=====================================================================================================================");


let createDate1 = new Date(2024, 12, 11); // 0 means January
let createDate2 = new Date(2024, 8, 11,   5,23,55); // 0 means January
let createDate3 = new Date("07-29-2024"); // YY-MM-DD or MM-DD-YY
console.log(createDate1.toString());
console.log(createDate1.toLocaleString()); 
console.log(createDate2.toLocaleString());
console.log(createDate3.toLocaleString());
console.log("=====================================================================================================================");


/* The TimeStamp are mostly going to be used while designing Quizes and Polls, Hotel Booking  */
let timeStamp = Date.now();
console.log(timeStamp); // gives a value in milliseconds from Jan 1 1970.
console.log(createDate2.getTime()); 

console.log(timeStamp/1000);
console.log(Math.floor(timeStamp/1000)); // in seconds
console.log("=====================================================================================================================");

let newDate = new Date(2024, 8, 11,   5,23,55);
console.log(newDate);
console.log(newDate.getMonth() + 1); // as months are 0-indexed
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log("====================================================================================================================");


// Customizing the pattern of printing : from DOCS and google-search we can modify date in way acc. to userRequirement, and countryside's rules(TimeZones, en-US), etc..

newDate.toLocaleString('default',{
    weekday : "long",
    timeZone: "U"
})


