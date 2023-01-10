const myObject = {
    city: "Kokrajhar",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  console.log(myObject.greet()); 