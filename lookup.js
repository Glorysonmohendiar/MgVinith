
const contacts = [
    {
      firstName: "Akira",
      number: "5743809091",
      email: "akira@email.com",
    },
    {
      firstName: "Kristina",
      number: "973487565",
      email: "kristina@gmail.com",
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  const result=lookUpProfile("Kristina", "email");
  console.log(result);