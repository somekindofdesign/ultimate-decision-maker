const computerChoiceText = document.getElementById('computerChoice')
const playerChoiceText = document.getElementById('playerChoice')
const resultText = document.getElementById('result')
const allChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice

allChoices.forEach(aChoice => aChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceText.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
  }))

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'sicssors'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    computerChoiceText.innerHTML = computerChoice
  }