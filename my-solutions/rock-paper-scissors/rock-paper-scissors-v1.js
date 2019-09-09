// 1 Unbeatable Rock Paper Scissors

const gameRockPaperScissors = userArg => {
  let improvedArg = improveUserInput(userArg);
  switch (improvedArg) {
    case "scissors":
      return "rock";
    case "rock":
      return "paper";
    case "paper":
      return "scissors";
    default:
      return "I only take 'rock', 'paper' or 'scissors' as an argument";
  }
};
console.log(gameRockPaperScissors("paper "));
console.log(gameRockPaperScissors(5));

// convert user input to lower case and remove spaces
function improveUserInput(userInput) {
  const improvedUserInput = userInput
    .toString()
    .toLowerCase()
    .trim();
  return improvedUserInput;
}
// console.log(improveUserInput("RoCk "));
