function getComputerChoice() {
    let computerChoice = ""
    let randomInt = Math.floor(Math.random() * 100);
    if (randomInt > 66) {
        computerChoice = "ROCK";
    }
    else if (randomInt > 33 && randomInt < 67) {
        computerChoice = "PAPER"
    }
    else if (randomInt < 33) {
        computerChoice = "SCISSORS";
    }  
    
    return computerChoice
}


// Make the getHumanChoice function
/*
Ask the user for an input.
Validate if the given input is valid - it must be either rock, paper or scizors.
If the value is invalid prompt the user again.


*/

const buttons = document.querySelectorAll("button")
const div = document.querySelector(".results")

function getHumanChoice() {
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault()
            return button.textContent
            const result = document.createElement("p")
            result.textContent = `Your choice: ${button.textContent} VS
                                Computer choice: ${getComputerChoice()}`
            div.appendChild(result)
        })
    }) 
}
getHumanChoice()



function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

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
        || humanChoice == "scizors" && computerChoice == "rock") {
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
    for (let i=0; i<num; i++) {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        if (playRound(humanSelection, computerSelection) == humanSelection) {
            humanScore += 1;
        }
        else if (playRound(humanSelection, computerSelection) == computerSelection) {
            computerScore += 1;
        }
    }
    if (humanScore > computerScore) {
        alert(`You won with ${humanScore} wins!!`)
    }
    else if (computerScore > humanScore) {
        alert(`The computer won with ${computerScore} wins!`)
    }

}

