// Primitive data type
 // 7 catagories ==>String ,Number ,Boolean , null , undefined ,Symbol (use for unique) ,BigInt (big value)

 const score = 100
const scoreValue = 100.3

const isLoggedIn =false

const outsideTemp = null

let userEmail ; //undefined


//symbol
const id=Symbol('123')
const antherId=Symbol('123')

console.log(id==antherId);//false




 //*********************************** */
//Non Primitive or referance type
/*Catagories==> Array , Object ,Functions */

// const bigNumber = 5455445455777575n


const heros = ["saktiman","naagraj", "dogo"]
let myObj ={//under the {all are object}
    name: "hitedh",
    age: 22
}

//function declared usein just like veriable
const myFunction = function(){
    console.log("hello world");
    
}


//how to know data type
console.log(typeof bigNumber);//undefined

console.log(typeof outsideTemp);//object




//********* How to work memory************* */

//Stack (Prumitive) , Heap (Non-primitive)

let myyoutubename = "hitesh@youtube"
let antherName = myyoutubename //ref
antherName = "chai or code"    //new value

console.log(myyoutubename);

console.log(antherName);

// *********************** Heap (Non-primitive)****************** given ref
let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

