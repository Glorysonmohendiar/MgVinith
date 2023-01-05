
// Verify an Object's Constructor with instanceof

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  

  let myHouse = new House(5);
  myHouse instanceof House;