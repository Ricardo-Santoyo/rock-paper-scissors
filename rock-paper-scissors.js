let playerScore = 0;
let computerScore = 0;
function gameEnd() {
    if (playerScore > computerScore) {
        playerScore = 0;
        computerScore = 0;
        console.log("You Win!");
    } else if (playerScore < computerScore) {
        playerScore = 0;
        computerScore = 0;
        console.log("CPU Wins. Too bad.");
    } else if (playerScore == computerScore) {
        playerScore = 0;
        computerScore = 0;
        console.log("Draw");
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

const displayResults = document.querySelector('#displayResults');

const displayPlayerScore = document.querySelector('#displayPlayerScore');
displayPlayerScore.textContent = "Player Score: " + playerScore;

function playRound (playerSelection,computerSelection) {
    computerSelection = computerPlay();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        displayResults.textContent = "You win! Rock beats scissors";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        displayResults.textContent = "You Lose! Paper beats rock";
        displayPlayerScore.textContent = "Player Score: " + playerScore;

    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        displayResults.textContent = "It's a tie!";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        displayResults.textContent = "You win! Paper beats rock";
        displayPlayerScore.textContent = "Player Score: " + playerScore;

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        displayResults.textContent = "You Lose! Scissors beats paper";
        displayPlayerScore.textContent = "Player Score: " + playerScore;

    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        displayResults.textContent = "It's a tie!";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        displayResults.textContent = "You win! Scisssors beats paper";
        displayPlayerScore.textContent = "Player Score: " + playerScore;

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        displayResults.textContent = "You Lose! Rock beats scissors";
        displayPlayerScore.textContent = "Player Score: " + playerScore;

    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        displayResults.textContent = "It's a tie!";
        displayPlayerScore.textContent = "Player Score: " + playerScore;
    }
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

function newFunction() {
    displayPlayerScore.textContent = "Player Score: " + playerScore;
}
