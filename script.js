function getComputerChoice() {
    let computerChoice = ""
    let randomInt = Math.floor(Math.random() * 100);
    if (randomInt > 66) {
        computerChoice = "ROCK";
    }
    else if (randomInt > 33 && randomInt < 67) {
        computerChoice = "PAPER"
    }
    else if (randomInt < 34) {
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
let humanChoice = ""
let humanScore = 0
let computerScore = 0

const yourScore = document.querySelector("#humanScore")
const enemyScore = document.querySelector("#computerScore")

const buttons = document.querySelectorAll("button")
const div = document.querySelector(".results")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        //e.preventDefault()
        humanChoice =  button.textContent
        computerChoice = getComputerChoice()

        const result = document.createElement("p")
            result.textContent = `Your choice: ${humanChoice} VS
                                Computer choice: ${computerChoice}`
            div.appendChild(result)
        if (humanChoice == computerChoice) {
            const message = document.createElement("p")
            message.textContent = "It's a tie! No one got a point."
            div.appendChild(message)
            message.classList.add("bold")
        }
        else if (humanChoice == "ROCK" && computerChoice == "SCISSORS" ||
                humanChoice == "SCISSORS" && computerChoice == "PAPER" ||
                humanChoice == "PAPER" && computerChoice == "ROCK") {
                    const message = document.createElement("p")
                    message.textContent = "Congrats, you won!"
                    div.appendChild(message)
                    humanScore += 1
                    message.classList.add("bold")
                }
        else {
            const message = document.createElement("p")
            message.textContent = "You lost! Skill issue"
            div.appendChild(message)
            computerScore += 1
            message.classList.add("bold")
        }
        yourScore.textContent = `Your Score: ${humanScore}`
        enemyScore.textContent = `Computer Score: ${computerScore}`

        

    })
})


function playRound(humanChoice, getComputerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    // evaluate when the human will get a score and when the computer
    const result = document.createElement("p")
            result.textContent = `Your choice: ${button.textContent} VS
                                Computer choice: ${getComputerChoice()}`
            div.appendChild(result)
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

