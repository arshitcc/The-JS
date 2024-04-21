function setUsername(userName){
    console.log("inside userName");
    this.userName = userName;
}

function createUser(userName, userEmail, userPassword){
    setUsername(userName);
    this.userEmail = userEmail;
    this.userPassword = userPassword;
}

const user = new createUser("Arshit","arshit@atlassian.com","arshit@123");
console.log(user);

// The userName is not getting initialized due remove of call stack;

/* 
    When function 'createUser' is called  after that a call & memory stack of 'setUsername' is created and at there it got setted the username and after the function call got over , the memory allocated to it also gets clear that's why  usename is not getting setted.

    To solve this or say to make a function hold we can use 
    setUsername.call(userName); // this will still not work
    setUsername.call(this, userName);

    By passing 'this', when the function will be executing that time it will not use its own 'this' or own context rather it will use the passed context to set values then it will give the correct fruitful results.

*/

function newUser(userName, userEmail, userPassword){
    setUsername.call(this, userName); // 'this', context of newUser is passed then
    this.userEmail = userEmail;
    this.userPassword = userPassword;
}

const user1 = new newUser("Arshit","arshit@atlassian.com","arshit@123");
console.log(user1);