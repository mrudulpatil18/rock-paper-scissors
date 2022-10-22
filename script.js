function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissor"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        return "You lose, Paper beats Rock";
    }
    else if(playerSelection == "ROCK" && computerSelection == "SCISSOR"){
        return "You Win, Rock beats Scissor";
    }
    else if(playerSelection == "ROCK" && computerSelection == "ROCK"){
        return "Match Tied!";
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        return "You Win, Paper beats Rock";
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSOR"){
        return "You Lose, Scissor beats Paper";
    }
    else if(playerSelection == "PAPER" && computerSelection == "PAPER"){
        return "Match Tied!";
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "SCISSOR"){
        return "Match Tied!";
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "ROCK"){
        return "You Lose, Rock beats Scissor";
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "PAPER"){
        return "You Win, Scissor beats Paper";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = promt("Choose from Rock , Paper, Scissors !")
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

