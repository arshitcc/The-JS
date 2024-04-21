function usser(userName, userEmail, userPassword){

    this._userName = userName;
    this._userEmail = userEmail;
    this._userPassword = userPassword;

    Object.defineProperty(this, 'userPassword', {
        get : function (){
            return this._userPassword.toUpperCase();
        },
        set : function (password){
            this._userPassword = password;
        }
    })
}

const user1 = new usser("Arshit","arshit@microsoft.com","arshit@45@microsoft");

console.log(user1.userPassword);