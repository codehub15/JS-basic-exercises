// 3 Two-player

// format, convert user input to lower case and remove spaces
const improveUserInput = userInput => {
  if (!Number(userInput)) {
    const improvedUserInput = userInput.toLowerCase().trim();
    return improvedUserInput;
  } else {
    return userInput;
  }
};

//
const rockPaperScissorsLizardSpock = (playerA, playerB) => {
  // formatted user input
  let inputPlayerA = improveUserInput(playerA);
  let inputPlayerB = improveUserInput(playerB);

  let result = "";
  if (inputPlayerA === inputPlayerB) {
    return `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - no win, try again`;
  }
  // check the winner
  switch (inputPlayerA) {
    case "rock": // wins over scissors and lizard
      switch (inputPlayerB) {
        case "scissors":
        case "lizard":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player A is the winner!`;
          break;
        case "paper":
        case "spock":
          result = "Player B is the winner!";
          break;
        default:
          result = "Player B did not make a valid move.";
      }
      break;
    case "paper": // wins over rock and spock
      switch (inputPlayerB) {
        case "rock":
        case "spock":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player A is the winner!`;
          break;
        case "scissors":
        case "lizard":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player B is the winner!`;
          break;
        default:
          result = "Player B did not make a valid move.";
      }
      break;
    case "scissors": // wins over paper and lizard
      switch (inputPlayerB) {
        case "paper":
        case "lizard":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} -Player A is the winner!`;
          break;
        case "rock":
        case "spock":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player B is the winner!`;
          break;
        default:
          result = "Player B did not make a valid move.";
      }
      break;
    case "lizard": // wins over paper and spock
      switch (inputPlayerB) {
        case "paper":
        case "spock":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player A is the winner!`;
          break;
        case "scissors":
        case "rock":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player B is the winner!`;
          break;
        default:
          result = "Player B did not make a valid move.";
      }
      break;
    case "spock": // wins over rock and scissors
      switch (inputPlayerB) {
        case "rock":
        case "scissors":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player A is the winner!`;
          break;
        case "paper":
        case "lizard":
          result = `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player B is the winner!`;
          break;
        default:
          result = "Player B did not make a valid move.";
      }
      break;
    default:
      result = "Player A did not make a valid move.";
  }
  return result;
};

// expected: Player A wins
// console.log("\nWith 'lizard' and 'paper' as arguments:");
console.log(rockPaperScissorsLizardSpock("lizard", "paper"));

// expected: Player B wins
// console.log("\nWith 'scissors' and 'rock' as arguments:");
console.log(rockPaperScissorsLizardSpock("scissors", "rock"));

// expected: Draw
// console.log("\nWith 'lizard' and 'lizard' as arguments:");
console.log(rockPaperScissorsLizardSpock("lizard", "lizard"));

// expected: Error message
// console.log("\nWith 'spock' and 'uhura' as arguments:");
console.log(rockPaperScissorsLizardSpock("spock", "uhura"));

// expected: Error message
// console.log("\nWith 47 and 'kirk' as arguments:");
console.log(rockPaperScissorsLizardSpock(47, "kirk"));
