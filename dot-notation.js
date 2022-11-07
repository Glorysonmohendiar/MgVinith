// Accessing Object Properties with Dot Notation.


const myObj = {
    prop1: "Tomato",
    prop2: "Orange"
  };
  
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;
  console.log(prop1val, prop2val);



  //Accessing Object Properties with Bracket Notation

  const myObj2 = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  
  const value = myObj2["Space Name"];
  const value1 = myObj2['More Space'];
  const value2 = myObj2["NoSpace"];

  console.log(value, value1, value2);



  //Accessing Object Properties with Variables

  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);