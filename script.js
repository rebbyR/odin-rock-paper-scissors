let result = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    //console.log(computerSelection);
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors");
        return result++;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
        return result--;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors");
        return result--;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper");
        return result++;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock");
        return result++;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        return result--;
    }

    else if (playerSelection == computerSelection) {
        console.log("Tie!");
        return result;
    }
}

function game() {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("enter what to play: ");
    playRound(playerSelection, computerSelection);
    console.log("total # wins: ", result);
}

/*
let playerSelection = "paper";
const computerSelection = getComputerChoice();

playerSelection = playerSelection.toLowerCase();

playRound(playerSelection, computerSelection);
*/
