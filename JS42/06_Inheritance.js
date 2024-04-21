class User{
    
    constructor(userName, userEmail, userPassword){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    logUser(){
        console.log((`Welcome !! ${this.userName}`));
    }

};

class seller extends User { // user is now inherited by class 'seller'

    constructor(userName, brandName, turnOver, category, investmentAmount){
        super(userName);
        this.brandName = brandName;
        this.turnOver = turnOver;
        this.category = category;
        this.investmentAmount = investmentAmount;
    }

    addProduct(){
        console.log(`Just Launched !!! ${this.brandName} Buds 3 @5499`);
    }

}

const user1 = new User("Arshit", "arshit@google.com", "123");
user1.logUser();
// user1.addProduct();

const seller1 = new seller("ArshitCC", "OnePlus", 430000000, "Bluetooth Device", "6000");
console.log(seller1.addProduct());

console.log(user1 === seller1);
console.log(seller1 instanceof seller);