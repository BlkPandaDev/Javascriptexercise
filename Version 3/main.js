function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(humanChoice) {
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

    // Check if a player has won the game
    if (humanScore === 6 || computerScore === 6) {
        // Display restart button
        document.getElementById("restart-btn").style.display = "block";

        // Disable choice buttons
        document.querySelectorAll(".choice-btn").forEach(button => {
            button.disabled = true;
        });
    }
}

// Function to restart the game
function restartGame() {
    // Reset scores
    humanScore = 0;
    computerScore = 0;

    // Update HTML elements
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("round-winner").textContent = "";

    // Hide restart button
    document.getElementById("restart-btn").style.display = "none";

    // Enable choice buttons
    document.querySelectorAll(".choice-btn").forEach(button => {
        button.disabled = false;
    });
}

// Global variables for scores
let humanScore = 0;
let computerScore = 0;
