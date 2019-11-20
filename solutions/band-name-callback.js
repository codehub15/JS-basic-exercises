// global array to store results
const bandNames = [];

// function to generate band name
const generateBandName = (userColor, userFood, embellish) => {
  // format input and make it tasty with callback function
  const color = embellish(formatInput(userColor));
  const food = embellish(formatInput(userFood));

  let bandName = "";
  // formatted input to build the return value
  bandName = `The ${color} ${food}!`;
  // add / update array with new band name
  bandNames.push(bandName);

  return bandName;
};

// function to format input
const formatInput = userInput => {
  const formattedInput = userInput.toString().trim();
  const capitalizeInitial =
    formattedInput[0].toUpperCase() + formattedInput.substring(1).toLowerCase();
  return capitalizeInitial;
};

// function to make color tasty
const makeTasty = color => {
  let tastyColor = "";
  switch (color) {
    case "Red":
      tastyColor = "Chilli";
      break;
    case "Orange":
      tastyColor = "Tangerine";
      break;
    case "Yellow":
      tastyColor = "Pineapple";
      break;
    case "Green":
      tastyColor = "Sage";
      break;
    case "Blue":
      tastyColor = "Blueberry";
      break;
    case "Purple":
      tastyColor = "Plum";
      break;
    default:
      tastyColor = color;
  }
  return tastyColor;
};

// call function to generate band name
console.log(generateBandName("green ", " appLe", makeTasty));
generateBandName("blaCk", " kiwi", makeTasty);
generateBandName(" blue ", " cookies", makeTasty);
generateBandName("yellow", " pizza", makeTasty);
generateBandName(" purple ", " banAna", makeTasty);

// print contents of the array
console.log(bandNames);
