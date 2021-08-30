function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        return 'rock';
    }
    else if (play == 1) {
        return 'paper';
    }
    else return 'scissors';
}

// takes in computer's and player's choices and returns 'win' or lose'
function oneRound(computerSelection, playerSelection) {
    let resultStr = '';

    if (playerSelection == computerSelection) {
        resultStr = 'draw';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        resultStr = 'lose';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        resultStr = 'win';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        resultStr = 'win';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        resultStr = 'lose';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        resultStr = 'lose';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        resultStr = 'win';
    }

    const results = document.querySelector('#results');
    results.textContent = resultStr;
    return resultStr;
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const startBtn = document.querySelector('#start');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const winner = document.querySelector('#winner');
let win = 0;
let lose = 0;

rockBtn.addEventListener('click', () => {
    const computer = computerPlay();
    oneRound(computer, 'rock');
    calculateScore(oneRound(computer, 'rock'));
})

paperBtn.addEventListener('click', () => {
    const computer = computerPlay();
    oneRound(computer, 'paper');
    calculateScore(oneRound(computer, 'paper'));
})

scissorsBtn.addEventListener('click', () => {
    const computer = computerPlay();
    oneRound(computer, 'scissors');
})

// takes in 'win' or 'lose' or 'draw' and increments scores
function calculateScore(result) {
    if (result == 'win') {
        win += 1;
        playerScore.textContent = `Player Score: ${win}`;
    }
    else if (result == 'lose') {
        lose += 1;
        computerScore.textContent = `Computer Score: ${lose}`;
    }

    if (win == 5) {
        winner.textContent = "PLAYER WINS";
    }
    else if (lose == 5) {
        winner.textContent = "COMPUTER WINS";
    }
}