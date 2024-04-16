// const promiseOne = new Promise(function (resolve, reject){

//     setTimeout(function(){
//         console.log("Async Task is Done");
//     },1000)
// })
// // 'then' is dircetly connected with resolve, it will not be envoked untill you set a connection between async task and resolve.
// promiseOne.then(function (){  
//     console.log("Promise has been consumed.");
// })

// Method 1 : 
const promiseOne = new Promise(function (resolve, reject){

    setTimeout(function(){
        console.log("Async Task 1 is Done");
        resolve();
        console.log("Resolve 1 done");
    },1000)
})
// This is dircetly connected with resolve, 'then' takes a call-back function it will not be envoked untill you set a connection between async task and resolve.
promiseOne.then(function (){  
    console.log("Promise has been consumed.");
    console.log('================================================================================================');

})


// Method 2 : 

new Promise(function (resolve, reject){
    setTimeout(function (){
        console.log("Async Task 2");
        resolve();
    },2000)

}).then(function(){
    console.log("Task 2 Resolved");
    console.log('================================================================================================');

})


// The main work for promises is to deal with data. Data is to be passed to resolve async task. 
// Pass the data as an object into resolve()

const promiseThree = new Promise ( function (resolve, reject){
    setTimeout(function(){
        console.log("Async Task 3");
        resolve({
            userName : "Arshit Chaurasia",
            userBalance : 12000,
            userBankName : 'ICICI Bank LTD'
        });
    },3000);
})

// Recieve the data into 'then' and pass into function 

promiseThree.then(function(user){
    console.log(user);
    console.log('================================================================================================');

})

// this is how we can use the data for Promises



const promiseFour = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        console.log('Async Task 4');
        resolve({
            accHolderName : "Arshit Chauarsia",
            accHolderBankName : "ICICI Bank LTD",
            accHolderBalance : 11499,
        });
    }
    else{
        reject("It's not you. It's Us. Task 4"); // Passed a string into reject which will be recieved by 
    }
})

// This is how to properly manage an Async Task. If 'resolve' got envoked then 'then()' will be be envoked , else if 'reject' envoked then 'catch()' is envoked.

// if you are using resolve and reject but handling promise without catch then it will give error
// promiseFour.then().catch()

/*
    const username = promiseFour.then(function(user){
        const userName = user.accHolderName;
        return userName;
    })
    .catch(function(err){ // err is the error message pased in reject
        console.log("Hello");
    })
    console.log(username);  // not working because it doesn't work like that
*/


// chaining of then or then_ables : Syntax : 

promiseFour
.then((user)=>{
    return user.accHolderName;
})
.then((holderName)=>{  // this 'then' takes as argument whatever previous 'then' has returned
    console.log(holderName);
})
.catch((errorMesaage)=>{
    console.log(errorMesaage);
})
.finally(() => { // this is optional to use but if used then definitely it will be envoked
    console.log('Final Verdict : Async Task 4 Promise is either Resolved or Rejected');
})


const promiseFive = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        console.log('Async Task 5');
        resolve({
            accHolderName : "Arshit Chauarsia",
            accHolderBankName : "ICICI Bank LTD",
            accHolderBalance : 11499,
        });
    }
    else{
        reject("It's not you. It's Us. Task 5!"); // Passed a string into reject which will be recieved by 
    }
})

// Async : Another way to handle Promises. It just don't handles catch very well that can be useful in scenarios like not to perform any operation utill database connection is established.

/*
    async function consumePromiseFive(){
        // await promiseFive; // this returns what to handle in promise like 'resolve' or 'reject'
        const response = await promiseFive; // its an object so don't write promiseFive()
        console.log(response);
    }

    consumePromiseFive();
*/

// This is how To handle reject in Async-Await we use try-catch

async function consumePromiseFive () {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


