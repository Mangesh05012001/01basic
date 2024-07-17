// Primitive

// 7 types : String, Number, Boolearn,null,undefined,Symbol,
// BigInt


const score = 100
const scoreValue = 100.3

const isLoggedId = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);



//Reference (Non primitive)
//Array ,objects,Functions


//Array 
const heros =["shaktiman","naagraj","doga"]
console.log( typeof heros);


// Object

let myObj = {
    name:"hitesh",
    age:22
}
console.log(typeof myObj);



// function

const myFunction = function (){
    console.log("Hello World");



}
console.log(typeof myFunction);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (Primitive),Heap(Non-Primitive)

let myYoutubename = "hiteshchoudharydotname"


let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



let userOne = {
    email:"user@goole.com",
    upi:"user@ybi"
}
let userTwo = userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

