let playerScore = 0;
let computerScore = 0;
let winner = "no-one yet";

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    //console.log(computerSelection);
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let playerSelection = prompt("enter either rock, paper, or scissors: ")
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;


}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors");
        winner = "player";
        return playerScore++;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
        winner = "computer";
        return computerScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors");
        winner = "computer";
        return computerScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper");
        winner = "player";
        return playerScore++;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock");
        winner = "player";
        return playerScore++;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        winner = "computer";
        return computerScore++;
    }

    else if (playerSelection == computerSelection) {
        console.log("Tie!");
        winner = "tie";
        return;
    }
}

function game() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log("score ", playerScore + "-" + computerScore);
    /*
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log("score ", playerScore + "-" + computerScore);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log("score ", playerScore + "-" + computerScore);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log("score ", playerScore + "-" + computerScore);
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log("final score ", playerScore + "-" + computerScore);
    */
}

function scoreKeeper(playerScore, computerScore) {
     if (playerScore == 5 && computerScore < 5) {
        winnerAnnounce.textContent = ("You're the first to 5! You win!");
    } else if (computerScore == 5 && playerScore < 5)
        winnerAnnounce.textContent = ("Computer is the first to 5! You lose!");
}

function scoreDisplay() {
    if (winner == "player") {
        resultsDisplayUpper.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
    } 
    else if (winner == "computer") {
        resultsDisplayUpper.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
    } else resultsDisplayUpper.textContent = "Tie!";
    resultsDisplay.textContent = "score: " + playerScore + "-" + computerScore;
    return;
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    scoreKeeper(playerScore, computerScore);
    scoreDisplay();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    scoreKeeper(playerScore, computerScore);
    scoreDisplay();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    scoreKeeper(playerScore, computerScore);
    scoreDisplay();
});

const resultsDisplayUpper = document.querySelector('.results-display-upper');
const resultsDisplay = document.querySelector('.results-display');
resultsDisplay.textContent = "score: " + playerScore + "-" + computerScore;
resultsDisplayUpper.textContent = "Click to play!";

const winnerAnnounce = document.querySelector('.winner-announce');
