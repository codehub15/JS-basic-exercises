// 3 Two-player

const gameRockPaperScissors = (playerA, playerB) => {
  // convert user input to lower case and without spaces
  let inputPlayerA = improveUserInput(playerA);
  let inputPlayerB = improveUserInput(playerB);

  // check the winner
  // both players have the same input
  if (inputPlayerA === inputPlayerB) {
    console.log(
      `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - no win, try again`
    );
  }
  // paper & scissors, paper & rock
  else if (inputPlayerA === "paper" && inputPlayerB === "scissors") {
    console.log(
      `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player B is the winner!`
    );
  } else if (inputPlayerA === "paper" && inputPlayerB === "rock") {
    console.log(
      `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player A is the winner!`
    );
  }
  // scissors & paper, scissors & rock
  else if (inputPlayerA === "scissors" && inputPlayerB === "paper") {
    console.log(
      `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player A is the winner!`
    );
  } else if (inputPlayerA === "scissors" && inputPlayerB === "rock") {
    console.log(
      `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player B is the winner!`
    );
  }
  // rock & scissors, rock & paper
  else if (inputPlayerA === "rock" && inputPlayerB === "scissors") {
    console.log(
      `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player A is the winner!`
    );
  } else if (inputPlayerA === "rock" && inputPlayerB === "paper") {
    console.log(
      `Player A ${inputPlayerA} and Player B plays ${inputPlayerB} - Player B is the winner!`
    );
  }
  // wrong input
  else {
    console.log("I only take 'rock', 'paper' or 'scissors' as an argument");
  }
};

gameRockPaperScissors("paper", "rock");
// gameRockPaperScissors("rock", "paper");
// gameRockPaperScissors("rock", "rock");
// gameRockPaperScissors("paper", 5);

// convert user input to lower case and remove spaces (input validator)
function improveUserInput(userInput) {
  if (!Number(userInput)) {
    const improvedUserInput = userInput.toLowerCase().trim();
    return improvedUserInput;
  } else {
    return userInput;
  }
}
