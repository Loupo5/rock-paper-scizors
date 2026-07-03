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
        if (humanScore == 3 || computerScore == 3) {
            playGame(humanScore, computerScore)

        }
    })
})

function playGame(humanScore, compScore) {
    if (humanScore == 3) {
        alert(`Congrats, you won the game with the final score of ${humanScore} to ${compScore}`)
    }
    else if (compScore == 3) {
        alert(`Sadly you lost to the computer(loser) with the final score of ${compScore} to ${humanScore}`)
    }
    resetGame()

}
function resetGame() {
    humanScore = 0
    computerScore = 0
    yourScore.textContent = "Your Score: 0";
    enemyScore.textContent = "Computer Score: 0";
    div.textContent = "";
}




