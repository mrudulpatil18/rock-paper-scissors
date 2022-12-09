let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissor"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        computerScore++;
        return "You lose, Paper beats Rock";
    }
    else if(playerSelection == "ROCK" && computerSelection == "SCISSOR"){
        playerScore++;
        return "You Win, Rock beats Scissor";
    }
    else if(playerSelection == "ROCK" && computerSelection == "ROCK"){
        return "Match Tied!";
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        playerScore++;
        return "You Win, Paper beats Rock";
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSOR"){
        computerScore++;
        return "You Lose, Scissor beats Paper";
    }
    else if(playerSelection == "PAPER" && computerSelection == "PAPER"){
        return "Match Tied!";
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "SCISSOR"){
        return "Match Tied!";
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "ROCK"){
        computerScore++;
        return "You Lose, Rock beats Scissor";
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "PAPER"){
        playerScore++;
        return "You Win, Scissor beats Paper";
    }
}

function game(name){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose from Rock , Paper, Scissors !")
        let computerSelection = getComputerChoice();
        console.log("hey "+ name + " " + playRound(playerSelection, computerSelection));
    }
    console.log("Your Score: " + playerScore)
    console.log("Computer Score: " + computerScore)
}


let name = prompt("Your Name ??")
console.log("Hey "+name)
game(name)


