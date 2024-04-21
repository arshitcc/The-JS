
const user = {
    _userName : `Arshit`,
    _userEmail : `arshit@microsoft.com`,
    _userPassword : `arshit@45@microsoft`,

    get userPassword(){
        return this._userPassword.toUpperCase();
    },

    set userPassword(password){
        this._userPassword = password;
    }
}


// const user1 = Object.create(); // this creates an empty object
const user2 = Object.create(user); // this creates an object based on the passed object and user2 is then referred to there.

console.log(user2._userPassword);
console.log(user2.userPassword);