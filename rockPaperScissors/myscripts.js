function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        return 'rock'
    }
    else if (play == 1) {
        return 'paper'
    }
    else return 'scissors'
}

// let playerSelection = prompt("What will you play?").toLowerCase();
function oneRound(computerSelection) {
    let playerSelection = prompt("What will you play?").toLowerCase();
    if (playerSelection == computerSelection) {
        console.log('draw')
        // return 'draw';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('lose')
        // return 'lose';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('win')
        // return 'win!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('win')
        // return 'win!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('lose')
        // return 'lose';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('lose')
        // return 'lose';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('win')
        // return 'win!';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        oneRound(computerPlay());
    }
}