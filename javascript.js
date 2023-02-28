let playerMove = "ROCK";
let computerMove = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = (Math.floor(Math.random() * 3));

    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else   
        return "Scissors";
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

   if (playerSelection === computerSelection)
        return console.log("Tie!");

    /* Player chooses rock */    
    if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
        playerScore++;
        return console.log("Player wins! " + playerSelection + " beats " + computerSelection);
    }
    else
        computerScore++;
        return console.log("Player loses! " + playerSelection + " loses to " + computerSelection);
   }

   /* Player chooses paper */
   if (playerSelection === "paper") {
    if (computerSelection === "rock") {
        playerScore++;
        return console.log("Player wins! " + playerSelection + " beats " + computerSelection);
    }
    else
        computerScore++;
        return console.log("Player loses! " + playerSelection + " loses to " + computerSelection);
   }

   /* Player chooses scissors */
   if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
        playerScore++;
        return console.log("Player wins! " + playerSelection + " beats " + computerSelection);
    }
    else
        computerScore++;
        return console.log("Player loses! " + playerSelection + " loses to " + computerSelection);
   }

}

console.log(playRound(playerMove, computerMove));

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1));
        console.log(playRound(playerMove, computerMove));
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    }
    else
        console.log("Computer wins!");
}

game();
console.log(playerScore);
console.log(computerScore);