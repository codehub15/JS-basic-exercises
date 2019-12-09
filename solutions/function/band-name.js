// global array to store band names
let storeBandNames = [];

function generateBandName(clothingColour, lastFoodEaten) {
  //capitalize first letter of color and of food
  let colorCapitalLetter1 =
    clothingColour[0].toUpperCase() + clothingColour.substring(1).toLowerCase();
  let foodCapitalLetter1 =
    lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();

  // output the message
  return `The ${colorCapitalLetter1} ${foodCapitalLetter1}`;
}

//console.log(generateBandName("blue", "banana"));

// let bandName1 = generateBandName("blue", "banana");

//storeBandNames.push(bandName1);
storeBandNames.push(generateBandName("blue", "bAnana"));
storeBandNames.push(generateBandName("green", "apple"));
storeBandNames.push(generateBandName("Black", "cookies"));

console.log(storeBandNames);
