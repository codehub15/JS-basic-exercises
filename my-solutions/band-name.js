// global array to store band names
let storeBandNames = [];

// 3 refactoring

// function for color to capitalize first letter and to lowercase the rest of word
function capitalizeColor(clothingColor) {
  let color =
    clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
  return color;
}

// function for food to capitalize first letter and to lowercase the rest of word
function capitalizeFood(lastFoodEaten) {
  let food =
    lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
  return food;
}

// function declaration to generate band name
function generateBandName(clothingColor, lastFoodEaten) {
  let color = capitalizeColor(clothingColor);
  let food = capitalizeFood(lastFoodEaten);

  return `The ${color} ${food}`;
}
// call and push result to an array
storeBandNames.push(generateBandName("blue", "bAnana"));
storeBandNames.push(generateBandName("green", "apple"));
storeBandNames.push(generateBandName("Black", "cookies"));
storeBandNames.push(generateBandName("Yellow", "spaghetti"));

// print array with all results of band name
console.log(storeBandNames);
