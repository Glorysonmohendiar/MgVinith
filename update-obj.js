// Updating Object Properties

const myName= {
    "name": "Glory",
    "age": 25,
    "gender": "Male",
    "village": ["Simoldohi"]
  };
  
  const result = myName.name = "Gloryson";
  console.log(myName);


  // Add New Properties to a JavaScript Object

  const myName2 ={
      "name": "Gloryson",
      "age": 25,
      "gender": "Male",
      "village": ["Simoldohi"]
  };

  const add = myName2.Mob = 9973770930;
  console.log(myName2);



  // Delete Properties from a JavaScript Object
  const myName3 ={
    "name": "Gloryson",
    "age": 25,
    "gender": "Male",
    "village": ["Simoldohi"]
};

delete myName3.age;
console.log(myName3);