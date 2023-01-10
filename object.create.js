const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  console.log(carl.greet()); 
  