// Manipulating Complex Objects

var myMusic = [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true
    },
    // Add record here
    {
      artist: "Deep Purple",
      title: "Smoke on the water",
      release_year: 1976,
      formats: ["CD", "8T", "LP"]
    }
  ];
  console.log(myMusic);



  //  Accessing Nested Objects

  const myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      outside: {
        trunk: "jack"
      }
    }
   
  };
  const result= myStorage.car.inside["glove box"];
  console.log(result);