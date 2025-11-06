let score = "33abc" //string but print number
// let score = "33abc" //print number but this value number 
// let score = 33 //number

console.log(typeof score);
console.log(typeof (score));//as a method

let valueInNumber = Number(score)//convert string into number
console.log(typeof valueInNumber); //print number but exactly print NAN
console.log(valueInNumber)// NAN (Not a Number)



let score1 = null
let  valueInNumber1=Number(score1)
console.log(valueInNumber1); //0 

let score2=undefined
let  valueInNumber2=Number(score2)
console.log(valueInNumber2); //NaN

let score3=false //true=1/ false =0
let  valueInNumber3=Number(score3)
console.log(valueInNumber3); 

let score4= "Hitesh"
let  valueInNumber4=Number(score4)
console.log(valueInNumber4); //NaN


//"33"==>33
//"33abc"==>NAN
// true => 1 ; false=0;

let isLoggedIn = "mantu" //1 ==>convert true //0==> convert false //""==>false//"Hitesh" ==>true

let booleanisLogedIn = Boolean(isLoggedIn)
console.log(booleanisLogedIn);


// 1 ==>true
// 0==> false
//"Hitesh" ==> true
// ""==> false

let someNumber=33
let stringNumber= String(someNumber)
console.log(typeof stringNumber);//string
console.log(stringNumber);// show number (33) but typeof this number is String


