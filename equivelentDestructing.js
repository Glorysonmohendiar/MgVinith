
// Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const { today, tomorrow } = HIGH_TEMPERATURES;

  console.log(today, tomorrow); // would return the value 77 and 80.
  
