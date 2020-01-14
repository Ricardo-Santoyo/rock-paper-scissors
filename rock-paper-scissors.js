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

function playRound (playerSelection,computerSelection) {
    computerSelection = computerPlay();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        console.log("You win! Rock beats scissors")
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        console.log("you Lose! Paper beats rock")
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log("It's a tie!")
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        console.log("You win! Paper beats rock")
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        console.log("you Lose! Scissors beats paper")
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log("It's a tie!")
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        console.log("You win! Scisssors beats paper")
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        console.log("you Lose! Rock beats scissors")
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log("It's a tie!")
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