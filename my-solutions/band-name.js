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

// 4 refactoring - add new function makeTasty

// function for make it tasty
function makeTasty(color) {
  const colorInitial = color[0].toUpperCase();
  const colorRest = color.substr(1).toLowerCase();
  const colors = colorInitial.concat(colorRest);

  switch (colors) {
    case "Red":
      return "Chilli";
      break;
    case "Orange":
      return "Tangerine";
      break;
    case "Yellow":
      return "Pineapple";
      break;
    case "Green":
      return "Sage";
      break;
    case "Blue":
      return "Blueberry";
      break;
    case "Purple":
      return "Plum";
      break;
    default:
      return color;
  }
}

// function declaration to generate band name
function generateBandName(clothingColor, lastFoodEaten) {
  let color = capitalizeColor(clothingColor);
  let food = capitalizeFood(lastFoodEaten);

  // return the result
  return `The ${makeTasty(color)} ${food}`;
  // return `The ${color} ${food}`;
}

// call and push result to an array
storeBandNames.push(generateBandName("blue", "bAnana"));
storeBandNames.push(generateBandName("green", "appLe"));
storeBandNames.push(generateBandName("violet", "pizza"));
storeBandNames.push(generateBandName("Black", "Cookies"));
storeBandNames.push(generateBandName("Yellow", "spaghetti"));

// print array with all results of band name
console.log(storeBandNames);
