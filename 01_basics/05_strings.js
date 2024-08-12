const name = "rahila"
const repoCount = 50

// console.log(name + repoCount + " Value"); ,this syntax is outdated 
//--------- Modern day syntax uses backticks (`),, wich has 'string interpolation' i.e. {}

console.log(`Hello my name is  ${name} and my repoCount is ${repoCount}`);

const gameName = new String('rahila-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4) // last value of char is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hithesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:/hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

//finding if it has ceartain keyword or not
console.group(url.include('sundar'));

//convert a String into Arrays
console.log(gameName.split('-'));








