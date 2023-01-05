
// Make Code More Reusable with the this Keyword

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + this.numLegs + " legs.";
    }
  };
  
  console.log(dog.sayLegs());