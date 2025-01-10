const input = require("@mimo-org/input");
let playerWins = 0;
let computerWins = 0;
let rounds = 0;

// Play the game 3 times
while (rounds < 3) {
  let playerChoice = input("Choose 'odd' or 'even' :");
  let playerNumber = parseInt(input("Choose a number between 1 and 5: "));

  // Generate a random number between 1 and 5 for the computer
  let computerNumber = Math.floor(Math.random() * 5) + 1;
  let computerChoice = "";
  if (playerChoice === "odd") {
    computerChoice = "even";
  } else {
    computerChoice = "odd";
  }

  // Calculate the sum of the two numbers and determine if it's odd or even.
  let sum = playerNumber + computerNumber;
  let result = "";
  if (sum % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }

  // Display the result
  console.log(`Player chose ${playerNumber} (${playerChoice})`);
  console.log(`Computer chose ${computerNumber} (${computerChoice})`);
  console.log(`The sum of the numbers is ${sum}, which is ${result}`);

  // Increment the rounds
  rounds++;

  if (result === playerChoice) {
    console.log("Player wins by " + rounds);
    playerWins++;
  } else {
    console.log("Computer wins by " + rounds);
    computerWins++;
  }
}
