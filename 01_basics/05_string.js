
const name = "hitesh"
const repoCount = 50

 console.log(name +repoCount + " Values"); //pld version use for concatination
console.log(`Hello My name is ${ name } and my repo count is ${repoCount}`); //`` ==> back ticks //newer version
  

const gameName = new String("Hitesh-hc")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));



const newString= gameName.substring(0,4)
console.log(newString);

// const newString= gameName.substring(-7,4)
// console.log(newString); //-8 igonore -ve velue


const antherString = gameName.slice(-8,4)
console.log(antherString);//return last fore cheracter


const newStringOne ="       hitesh         "
console.log(newStringOne);
console.log(newStringOne.trim()); //trime remove starting end space remoed

const url = "https://hitesh.com%20choudhary"
console.log(url.replace('%20','_'));


console.log(url.includes('hitesh'));//avaliable or not ==>true

