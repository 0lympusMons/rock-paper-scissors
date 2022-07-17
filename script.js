
function getComputerChoice() {

    const choice = ["rock", "paper", "scissors"];

    const generateRandomNum = Math.floor(Math.random() * 3);

    return choice[generateRandomNum];
}

function compareChoices(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    // player wins

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    }

    // player loses

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    }

    // tie

    else if (playerSelection === computerSelection) {
        return `It's a tie.`
    }

}

function game() {
    console.log("Started.")

    for (let i = 0; i < 5; i++) {


        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();

        // console.log(compareChoices(playerSelection, getComputerChoice()));
        console.log(compareChoices(playerSelection, computerSelection));


    }

}

game();