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

/* Basic Test for DataHandling from API with Async Await */

async function getUsersData(){

    // fetch('https:api.github.com/users/arshitcc'); // It consumes a URL and It returns a promise.
    // fetch('https://jsonplaceholder.typicode.com/users'); promise
    // await fetch('https://jsonplaceholder.typicode.com/users'); await promise, now hold its response

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // currently response is in string from
    console.log(response);
    /*  
        
        const data = response.json(); // converts the string into object
        console.log(data); 
    */
   // The above will show Promise <pending> because converting from string to object is also a time-taking operation so add await 

   // Basically wherever the data fetching/conversion is going take time use await at there. This is also a usecase for async-await
    const data = await response.json();
    console.log(data); 

}
// getUsersData();  // to call above async-function

/* Let's try same with try-catch */

async function githubData(){

    try {
        const response = await fetch('https://api.github.com/users/arshitcc');
        const userData = await response.json();
        console.log(userData); 
    } catch (error) {
        console.log("Please Enter a valid GitHub profile URL !!");   
    }

}

githubData();


/* Let's try to write above in then-catch */

fetch('https://api.github.com/users/arhitcc') // knowingly did this bcz response still goes in resolve()
.then((response)=>{
    return response.json();
})
.then((userData)=>{
    console.log("LLLL");
    console.log(userData);
})
.catch(function(){
    console.log("Error");
})

// In this github_API case, even when there is invalid url it github itself gives an object(whatever is in that), 
// so thats why this fetch never falls into catch_condition