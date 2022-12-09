let playerScore = 0;
let computerScore = 0;
const winner = document.querySelector('.winner');

function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissor"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection){
    winner.textContent = "";
    if(computerScore == 5){
        winner.textContent = "COMPUTER WINS !!";
        setTimeout(20);
        computerScore = 0;
        playerScore = 0;
    }
    else if(playerScore == 5){
        winner.textContent = "PLAYER WINS !!";
        setTimeout(20);
        computerScore = 0;
        playerScore = 0;
    }
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
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

const rock = document.querySelector('.ROCK');
const paper = document.querySelector('.PAPER');
const scissor = document.querySelector('.Scissor');
const result = document.querySelector('.result');
const player = document.querySelector('.player');
const comp = document.querySelector('.comp');


function updateScore(){
    player.textContent = "Player Score : " + playerScore;
    comp.textContent = "Computer Score : " + computerScore;
}

rock.addEventListener('click', function(){
    console.log(playRound("ROCK"));
    result.textContent = playRound("ROCK");
    updateScore();
});
paper.addEventListener('click', function(){
    console.log(playRound("paper"));
    result.textContent = playRound("paper");
    updateScore();
});
scissor.addEventListener('click', function(){
    console.log(playRound("scissor"));
    result.textContent = playRound("scissor");
    updateScore();
});




//et name = prompt("Your Name ??")
//console.log("Hey "+name)
//game(name)


