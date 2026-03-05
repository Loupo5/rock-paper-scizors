function getComputerChoice() {
    let computerChoice = ""
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        computerChoice = "rock";
    }
    else if (randomInt == 1) {
        computerChoice = "paper"
    }
    else if (randomInt == 2) {
        computerChoice = "scizors";
    }  
    
    return computerChoice
}


// Make the getHumanChoice function
/*
Ask the user for an input.
Validate if the given input is valid - it must be either rock, paper or scizors.
If the value is invalid prompt the user again.


*/
function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper or scizors: ");
    return humanChoice;
}


let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    // evaluate when the human will get a score and when the computer
    if (humanChoice === computerChoice) {
        humanScore = humanScore;
        computerScore = computerScore;
    }
    else if (humanChoice == "rock" && computerChoice == "scizors"
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scizors" && computerChoice == "paper") {
            humanScore += 1;
        }
    else if (humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scizors"
        || humanChoice == "scizors" &&computerChoice == "rock") {
            computerScore += 1;
        }
    if (humanScore > computerScore) {
        return humanChoice;
    }
    else if (humanScore < computerScore) {
        return computerChoice;
    }
}

function playGame(num) {
    let humanScore = 0
    let computerScore = 0
    for (let i=1; i<num; i++) {
        if (playRound(humanSelection, computerSelection) == humanSelection) {
            humanScore += 1;
            break;
        }
        else if (playRound(humanSelection, computerSelection) == computerSelection) {
            computerScore += 1;
        }
    }
    if (humanScore > computerScore) {
        console.log(`You won with ${humanScore} wins!!`)
    }
    else if (computerScore > humanScore) {
        console.log(`The computer won with ${computerScore} wins!`)
    }

}

playGame(5);