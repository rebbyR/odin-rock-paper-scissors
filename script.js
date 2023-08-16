let playerScore = 0;
let computerScore = 0;
let winner = "no-one yet";

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "player";
        return playerScore++;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "computer";
        return computerScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "computer";
        return computerScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "player";
        return playerScore++;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "player";
        return playerScore++;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "computer";
        return computerScore++;
    }

    else if (playerSelection == computerSelection) {
        winner = "tie";
        return;
    }
}

//capitalizes winner choice so that display sentence starts with capital letter
function capitalizeWinnerChoice() {
    if (winner == "player") {
        const firstLetter = playerSelection.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase();
        const remainingLetters = playerSelection.slice(1);
        playerSelection = firstLetterCap + remainingLetters;        
    }
    else if (winner == "computer") {
        const firstLetter = computerSelection.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase();
        const remainingLetters = computerSelection.slice(1);
        computerSelection = firstLetterCap + remainingLetters;
    }

}


function scoreKeeper(playerScore, computerScore) {
     if (playerScore == 5 && computerScore < 5) {
        winnerAnnounce.textContent = ("You're the first to 5! You win!");
    } else if (computerScore == 5 && playerScore < 5)
        winnerAnnounce.textContent = ("Computer is the first to 5! You lose!");
}

function scoreDisplay() {
    capitalizeWinnerChoice();
    if (winner == "player") {
        resultsDisplayUpper.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
    } 
    else if (winner == "computer") {
        resultsDisplayUpper.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
    } else resultsDisplayUpper.textContent = "Tie!";
    resultsDisplay.textContent = "Score: " + playerScore + "-" + computerScore;
    return;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultsDisplayUpper = document.querySelector('.results-display-upper');
const resultsDisplay = document.querySelector('.results-display');
const winnerAnnounce = document.querySelector('.winner-announce');


rock.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    scoreKeeper(playerScore, computerScore);
    scoreDisplay();
});


paper.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    scoreKeeper(playerScore, computerScore);
    scoreDisplay();
});


scissors.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    scoreKeeper(playerScore, computerScore);
    scoreDisplay();
});

resultsDisplay.textContent = "Score: " + playerScore + "-" + computerScore;
resultsDisplayUpper.textContent = "Click to play!";


