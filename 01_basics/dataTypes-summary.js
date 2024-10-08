// Primitive

// 7 types : String, Number , Boolean(yes or no , true or false), null, undefined, Symbol,
//  BigInt(scientific values)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // in this way value is undefined
// typeScript: const score:number = 100

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);



const bigNumber = 344355675757866765n


//Refrence (Non primitive) values whose value is directly allocated in memory

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myOIbj = {
    name: "Rahila", //key value pairs, you can store object in variable 
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

    // console.log(typeof anotherId);



// +++++++++++++++++++ MEMORY ++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (used in Primitibe type & get copy of variable) , Heap Memory (used in Non-Primitive & get a refrence of variable/original value)
// Ex - 

let myYoutubename = "Rahila"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "rahila@google.com"

console.log(userOne.email);
console.log(userTwo.email);






