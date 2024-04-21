let myHeros = ["Ironman", "Thor", ""]


let heroPower = {
    Ironman : "Brain",
    CaptainAmerica : "Shield",
    Thor: "Hammer",
    spiderman: "Web-Shooters",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Proto = function(){
    console.log(`This Proto is now present in all objects`);
}

Array.prototype.heyProto = function(){
    console.log(`Proto says hello to Array`);
}

// heroPower.Proto()
// myHeros.Proto()
// myHeros.heyProto()
// heroPower.heyProto()


// INHERITANCE : 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let myName = "            Arshit+Chaurasia       ";
String.prototype.trueLength = function(){
    console.log("=======================================================");
    console.log(`${this} has length ${this.length}`);
    console.log(`Now It has length `);
    return this.trim().length;
}

console.log(myName.trueLength());
let anotherUsername = "ChaiAurCode     "
console.log(anotherUsername.trueLength());
console.log("        Data Structures  & Algorithms".trueLength());
console.log("Developer          ".trueLength());