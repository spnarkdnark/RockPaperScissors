let choices = ['rock','paper','scissors'];

function getRandom(randomRange){
    //get a random number in between 0 and randomRange
    return Math.floor(Math.random()*randomRange);
}

function getComputerChoice(){
    //use the random number to get the computers choice from choices array
    choiceNumber = getRandom(3);
    return choices[choiceNumber];
}

function getHumanChoice(){
    humanChoice = prompt('Rock, Paper, or Scissor???');
    return humanChoice.toLowerCase();
}

function didHumanWin(computerChoice, humanChoice){

    switch (humanChoice){
        case 'rock':
            return computerChoice === 'paper' ? false : true;
            break;
        case 'paper':
            return computerChoice === 'scissors' ? false : true;
            break;
        case 'scissors':
            return computerChoice === 'rock' ? false : true;
            break;
    }
    }

function isTie(computerChoice, humanChoice){
    return (humanChoice === computerChoice) ? true : false;
}
    

function playRound(){
    //run a round of rock paper scissors, return a point value relating 
    //to who wins

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    pointTo = 0;
    
    if (isTie(computerChoice, humanChoice)){
        console.log(`${computerChoice} ties ${humanChoice}!`)
    }

    else if (didHumanWin(computerChoice, humanChoice) === true){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        pointTo = 1;
        
    }
    else {
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}`)
        pointTo = -1;
    }

    return pointTo;
}

function announceEnd(scoreComputer, scorePlayer){
    console.log("The game is over!");
    
    if (scoreComputer > scorePlayer){
        console.log("You Lose!");
    }
    else if (scorePlayer > scoreComputer){
        console.log("You Win!");
    }
    else{
        console.log("It's a Tie!");
    }

    announceScore(scoreComputer, scorePlayer);
}


function announceScore(scoreComputer, scorePlayer){
    console.log(`The score is...\n Player: ${scorePlayer}\n Computer: ${scoreComputer}`);
}


function Game(){
    
    let scoreComputer = 0
    let scorePlayer = 0
    
    for (i = 0; i <5; i++){
        roundPoint = playRound();
        switch (roundPoint){
            case -1: 
                scoreComputer += 1;
                break;
            case 0:
                break;
            case 1:
                scorePlayer +=1;
                break;
                
        }
        announceScore(scoreComputer, scorePlayer);

    }

    announceEnd(scoreComputer, scorePlayer);
}