// main.js
// console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getHumanChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        return getHumanChoice(); // Recursively ask for input until valid choice is provided
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Game over!");
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}

// Call playGame to start the game
playGame();

