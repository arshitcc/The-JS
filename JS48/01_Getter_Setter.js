class user{

    constructor(userName, userEmail, userPassword){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    get userEmail(){
        return this._userEmail.toUpperCase();
    }
    set userEmail(email){
        this._userEmail = email.toUpperCase();
    }

    get userPassword(){
        return this._userPassword.toUpperCase();
    }

    set userPassword(password){
        this._userPassword = password;
    }
}

const user1 = new user("Arshit", "arshit@microsft.com", "arshit@45@microsoft");
console.log(user1.userPassword);
// console.log(user1._userPassword);


/* 
    To make the class more secure we define getter and setters

    1st => It is always necessary to define both getter and setter for any variable. , else ERRORS
    2nd => The problem comes still comes as are setting the values through constructor and setter that why call stack memory gets filled due to which error arises
        => 
        Solution : In setters set values in a different variable so that when getter or setter is called then the value is returned or setted through them not through this.userPassword.
    

 */

/* 
    Basically the getter & setters are methods coated over the property of object,

    Problem : even though _userPassword is private but still object can directly access them as commented above
    Proposal : In ES2023 a proposal has been made that #privateMember will be used so that no privateMember can be directly accessed.
*/