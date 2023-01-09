
// Use Prototype Properties to Reduce Duplicate Code

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.numLegs = 4;
 
  let santhal = new Person("gloryson");

  let mundari = new Person("anthony");

  console.log(santhal);
  console.log(mundari);