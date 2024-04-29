function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getHumanChoice() {
    return document.getElementById("human-choice").value;
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    // Determine the winner of the round
    let roundWinner;
    if (humanChoice === computerChoice) {
        roundWinner = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundWinner = "You win!";
        humanScore++;
    } else {
        roundWinner = "Computer wins!";
        computerScore++;
    }

    // Update HTML elements with game results
    document.getElementById("computer-choice").textContent = "Computer's Choice: " + computerChoice;
    document.getElementById("round-winner").textContent = "Round Winner: " + roundWinner;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Global variables for scores
let humanScore = 0;
let computerScore = 0;
