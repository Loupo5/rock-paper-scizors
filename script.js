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

console.log(getComputerChoice())


