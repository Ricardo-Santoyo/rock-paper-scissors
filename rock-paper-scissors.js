let playerScore = 0;
let computerScore = 0;

const displayResults = document.querySelector('#displayResults');

const displayPlayerScore = document.querySelector('#displayPlayerScore');
displayPlayerScore.textContent = "Player Score: " + playerScore;

const displayComputerScore = document.querySelector('#displayComputerScore');
displayComputerScore.textContent = "CPU Score: " + computerScore;

const replayCard = document.querySelector('#replayCard');

const gameEnd = document.querySelector('#gameEnd');
replayCard.appendChild(gameEnd);

const replayBtn = document.createElement('button');
replayBtn.classList.add('replayBtn')
replayBtn.textContent = "Play again?";
replayBtn.addEventListener('click', () => {
    window.location.reload();
});

function overallWinner() {
    if (playerScore < 5 && computerScore < 5) {
        gameEnd.textContent = "";
    
    } else if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        gameEnd.textContent = "You Win!";
        replayCard.appendChild(replayBtn);
        content.classList.add('content');
    
    } else if (computerScore = 5) {
        playerScore = 0;
        computerScore = 0;
        gameEnd.textContent = "CPU Wins. Too bad.";
        replayCard.appendChild(replayBtn);
        content.classList.add('content');
    }
}

function computerPlay() {
    const move = Math.floor(Math.random() * 3);
    if (move == 0) {
        return 'rock';
    } else if (move == 1) {
        return 'paper';
    } else if (move == 2) {
        return 'scissors';
    }
}

function playRound (playerSelection,computerSelection) {
    computerSelection = computerPlay();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        displayResults.textContent = "You win! Rock beats scissors";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;
        
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        displayResults.textContent = "You Lose! Paper beats rock";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;

    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        displayResults.textContent = "It's a tie!";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        displayResults.textContent = "You win! Paper beats rock";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        displayResults.textContent = "You Lose! Scissors beats paper";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;

    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        displayResults.textContent = "It's a tie!";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        displayResults.textContent = "You win! Scisssors beats paper";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        displayResults.textContent = "You Lose! Rock beats scissors";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;

    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        displayResults.textContent = "It's a tie!";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "CPU Score: " + computerScore;
    }
    overallWinner();
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('scissors');
});