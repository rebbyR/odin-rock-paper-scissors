let playerScore = 0;
let computerScore = 0;

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
        return playerScore++;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
        return computerScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors");
        return computerScore++;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper");
        return playerScore++;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock");
        return playerScore++;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        return computerScore--;
    }

    else if (playerSelection == computerSelection) {
        console.log("Tie!");
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

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});

