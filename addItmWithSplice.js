
// Copy Array Items Using slice()

function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
  }
  console.log(
    htmlColorNames([
      "DarkGoldenRod",
      "WhiteSmoke",
      "LavenderBlush",
      "PaleTurqoise",
      "FireBrick"
    ])
  );