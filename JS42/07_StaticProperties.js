class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `${this.username}_123`;
    }
}

const user1 = new User("Arshit");
// console.log(user1.createId()); // try this without 'static'

class seller extends User {
    constructor(sellername, email){
        super(sellername); // acts as consturctor
        this.email = email;
    }
}

const seller1 = new seller("iPhone", "iPhone_16@apple.com")
seller1.logMe();

// 'static' keyword doesn't allow that function to be inhertited if its class is getting inherited by any other class.
console.log(seller1.createId());