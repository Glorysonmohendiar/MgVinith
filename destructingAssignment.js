
// Use Destructuring Assignment to Assign Variables from Objects.

const user = { name:'Gloryson Mohendiar', age:'25', mob:'9973770930'}

const { name: myName, age: myAge, mob: myMob } = user;

console.log(myName); // would return strig Gloryson Mohendiar.

console.log(myAge); // would return 25

console.log(myName, myMob); // would return Gloryson and 9973770930.