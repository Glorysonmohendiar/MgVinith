
// Use Destructuring Assignment to Assign Variables from Nested Objects

const user ={ Gloryson:{
    mobile: '9973770930',
    email: 'glorysonmohendiar@gmail.com',
    state: 'Jharkhand'
}}

const {Gloryson:{ mobile: userMobile, email: userEmail, state: userState}} = user;

console.log(userMobile); // would return string 9973770930

console.log(userEmail); // would return string glorysonmohendiar@gmail.com

console.log(userState); // would return string Jharkhand.