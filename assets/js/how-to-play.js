function CompareChoices(oneChoice, twoChoice) {
    var oneChoice = document.getElementById('oneChoice');
    var twoChoice = document.getElementById('twoChoice');
    const allChoices = document.querySelectorAll('button')
  
  if (oneChoice.selectedIndex === twoChoice.selectedIndex) {
    if (twoChoice === oneChoice) {
        result = "It's a tie!"
      }
      if (twoChoice === 'rock' && oneChoice === "paper") {
        result = 'Paper wins'
      }
      if (twoChoice === 'rock' && oneChoice === "scissors") {
        result = 'Rock wins'
      }
      if (twoChoice === 'paper' && oneChoice === "rock") {
        result = 'Paper wins'
      }
      if (twoChoice === 'paper' && oneChoice === "scissors") {
        result = 'Scissors wins'
      }
      if (twoChoice === 'scissors' && oneChoice === "rock") {
        result = 'Rock wins'
      }
      if (twoChoice === 'scissors' && oneChoice === "paper") {
        result = 'Scissors wins'
      }
      resultText.innerHTML = result
  }