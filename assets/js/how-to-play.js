//compare function based on game play js
const resultText = document.getElementById('result');
const allChoices = document.querySelectorAll('button');
let oneChoice;
let twoChoice;
let result;

allChoices.forEach(aChoice => aChoice.addEventListener('click', (e) => {
    oneChoice = e.target.id;
    twoChoice = e.target.id;
    getResult();
  }));

function getResult() {

    //tie
    if (oneChoice === twoChoice) {
      result = "It's a tie!";
    }
    
    ///rock
    if (oneChoice === 'rock' && twoChoice === "paper") {
      result = 'Rock covers paper - rock wins';
    }
    if (oneChoice === 'rock' && twoChoice === "scissors") {
      result = 'Rock crushes scissors - rock wins';
    }
    if (oneChoice === 'rock' && twoChoice === "lizard") {
      result = 'Rock crushes lizard - rock wins';
    }
    if (oneChoice === 'rock' && twoChoice === "spock") {
      result = 'Spock vaporizes rock - Spock wins';
    }

    ///paper
    if (oneChoice === 'paper' && twoChoice === "rock") {
      result = 'Paper covers rock - paper wins';
    }
    if (oneChoice === 'paper' && twoChoice === "scissors") {
      result = 'Scissors cuts paper - paper wins';
    }
    if (oneChoice === 'paper' && twoChoice === "lizard") {
      result = 'Lizard eats paper - Lizard wins';
    }
    if (oneChoice === 'paper' && twoChoice === "spock") {
      result = 'Paper disproves Spock - paper wins';
    }

    ///scissors
    if (oneChoice === 'scissors' && twoChoice === "rock") {
      result = 'Rock crushes scissors - rock wins';
    }
    if (oneChoice === 'scissors' && twoChoice === "paper") {
      result = 'Scissors cuts paper - scissors wins';
    }
    if (oneChoice === 'scissors' && twoChoice === "lizard") {
      result = 'Scissors decapitates lizard - scissors wins';
    }
    if (oneChoice === 'scissors' && twoChoice === "spock") {
      result = 'Spock smashes scissors - Spock wins';
    }

    ///lizard
    if (oneChoice === 'lizard' && twoChoice === "rock") {
      result = 'Rock crushes lizard - rock wins';
    }
    if (oneChoice === 'lizard' && twoChoice === "paper") {
      result = 'Lizard eats paper - lizard wins';
    }
    if (oneChoice === 'lizard' && twoChoice === "scissors") {
      result = 'Scissors decapitates lizard - scissors wins';
    }
    if (oneChoice === 'lizard' && twoChoice === "spock") {
      result = 'Lizard poisons Spock - lizard wins';
    }

    ///spock
    if (oneChoice === 'spock' && twoChoice === "rock") {
      result = 'Spock vaporizes rock - Spock wins';
    }
    if (oneChoice === 'spock' && twoChoice === "paper") {
      result = 'Paper disproves Spock - paper wins';
    }
    if (oneChoice === 'spock' && twoChoice === "scissors") {
      result = 'Spock smashes scissors - Spock wins';
    }
    if (oneChoice === 'spock' && twoChoice === "lizard") {
      result = 'Lizard poisons Spock - lizard wins';
    }

    ///display result
    resultText.innerHTML = result;

}

//prevent page reload on submit courtesy of https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit#:~:text=To%20clear%20an%20input%20field,empty%20string%20resets%20the%20input.
const btn = document.getElementById('submit-button');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
});