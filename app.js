const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerchoice()
    getResult()
}))

function generateComputerchoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'its a Draw!'
        resultDisplay.style.color = '#FFA500';
    }
    if(computerChoice === 'rock' &&  userChoice === 'paper') {
        result = 'you Win!'
        resultDisplay.style.color = '#00FA9A';
    }
    if(computerChoice === 'rock' &&  userChoice === 'scissors') {
        result = 'you Lost!'
        resultDisplay.style.color = '#FF4500';
    }
    if(computerChoice === 'paper' &&  userChoice === 'scissors') {
        result = 'you Win!'
        resultDisplay.style.color = '#00FA9A';
    }
    if(computerChoice === 'paper' &&  userChoice === 'rock') {
        result = 'you Lost!'
        resultDisplay.style.color = '#FF4500';
    }
    if(computerChoice === 'scissors' &&  userChoice === 'rock') {
        result = 'you win!'
        resultDisplay.style.color = '#00FA9A';
    }
    if(computerChoice === 'scissors' &&  userChoice === 'paper') {
        result = 'you Lost!'
        resultDisplay.style.color = '#FF4500';
    }
    resultDisplay.innerHTML = result
}

