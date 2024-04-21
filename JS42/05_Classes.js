
class User{
    
    constructor(userName, userEmail, userPassword){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    encryptPassword(){
        return `${this.userPassword}abc`;
    }

    lowerUsername(){
        return this.userName.toUpperCase();
    }
};

const user = new User("Arshit","arshit@amazon.com", "123");
console.log(user.encryptPassword());
console.log(user.lowerUsername());

// Without Classes

function userInfo(userName, userEmail, userPassword){
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;    
}

userInfo.prototype.encryptPassword = function (userPassword){
    return `${this.userPassword}abc`;
}

userInfo.prototype.upperName = function (userName){
    return `${this.userName.toUpperCase()}`;
}

const user1 = new userInfo("Arshit","arshit@amazon.com", "123");
console.log(user1.upperName());
console.log(user1.encryptPassword());
