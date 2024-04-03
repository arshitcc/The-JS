// for - Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);  // error / undeclared

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(`${i}*${j} = ${i*j} `);
   }   
}
console.log(`===============================================================================================================`);

let myArray = ["IronMan", "Captain America", "Black Panther"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

console.log(`===============================================================================================================`);

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index%3 == 0) {
        console.log(`Detected Multiple of 3`);
        break;
    }
   console.log(`Value of i is ${index}`);    
}
console.log(`===============================================================================================================`);

for (let index = 1; index <= 20; index++) {
    if (index%2 == 0) {
        console.log(`Detected Multiple of 2`);
        continue;
    }
   console.log(`Value of i is ${index}`);
}