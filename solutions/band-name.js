// global array to store band names
let storeBandNames = [];

// 3 refactoring - make it DRY
// function for color to capitalize first letter and to lowercase the rest of word
function capitalizeInitial(userWord) {
  let word = userWord[0].toUpperCase() + userWord.substring(1).toLowerCase();
  return word;
}

// 4 refactoring - add new function makeTasty
// function for make it tasty
function makeTasty(userColor) {
  const colorInitial = userColor[0].toUpperCase();
  const colorRest = userColor.substr(1).toLowerCase();
  const color = colorInitial.concat(colorRest);

  switch (color) {
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
      return userColor;
  }
}

// function declaration to generate band name
function generateBandName(clothingColor, lastFoodEaten) {
  // capitalize first letter of color and food
  let color = capitalizeInitial(clothingColor);
  let food = capitalizeInitial(lastFoodEaten);
  // add a result to an array
  let bandName = `The ${makeTasty(color)} ${food}`;
  storeBandNames.push(bandName);

  return bandName;
}

// call generateBandName function with arguments
generateBandName("blue", "bAnana");
generateBandName("GREEN", "APPLE");
generateBandName("black", "Cookies");

// print array with all results of band name
console.log(storeBandNames);
