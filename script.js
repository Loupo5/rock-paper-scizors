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


let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    
    // evaluate when the human will get a score and when the computer
    if (humanChoice == "rock" & computerChoice == "scizors"
        || humanChoice == "paper" & computerChoice == "rock"
        || humanChoice == "scizors" & computerChoice == "paper") {
            humanScore += 1;
        }
    else if (humanChoice == "rock" & computerChoice == "paper"
        || humanChoice == "paper" & computerChoice == "scizors"
        || humanChoice == "scizors" & computerChoice == "rock") {
            computerScore += 1;
        }
   
    return humanChoice, humanScore


}
console.log(getComputerChoice());
console.log(playRound(humanChoice, computerChoice))