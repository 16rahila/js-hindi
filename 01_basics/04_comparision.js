// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); // not equal

//problem arises when we are not comparing same DataType
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// comparision convert null to a number, treating it as 0
// that's why null >= 0 is true and null > 0 id false
// equity and comparision works differently

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); //avoid these type of conversion

// === (strict check) checks value strictly and checks dataType as well

console.log("2" === 2);












