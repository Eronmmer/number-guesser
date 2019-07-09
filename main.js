const inputGuess = document.querySelector( "#guess-input" );
const guessBtn = document.querySelector( "#guess-btn" );
const message = document.querySelector( ".message" );
const minNum = document.querySelector( ".min-num" );
const maxNum = document.querySelector( ".max-num" );
const game = document.querySelector( "#game" );

let minValue = 1;
let maxValue = 20;
let numberOfGuesses = 5;
let randomNum = random( minValue, maxValue );

minNum.textContent = minValue;
maxNum.textContent = maxValue;

guessBtn.addEventListener( "click", playGame );
game.addEventListener( "mousedown", ( e ) => {
  if ( e.target.classList.contains( "play-again" ) ) {
    window.location.reload();
  }
} );

function playGame() {
  let guess = parseInt( inputGuess.value );

  if ( isNaN( guess ) || guess < minValue || guess > maxValue ) {
    showMessage( `Please enter a number between ${minValue} and ${maxValue}`, "red" );
  } else if ( guess === randomNum ) {
    showMessage( `${guess} is correct. YOU WIN!!`, "green" );
    inputGuess.disabled = true;
    playAgain();
  } else {
    numberOfGuesses = numberOfGuesses - 1;

    if ( numberOfGuesses === 0 ) {
      showMessage( `Sorry you lost. The correct guess is ${randomNum}.`, "red" );
      playAgain();
      inputGuess.disabled = true;
    } else {
      let trials;
      if ( numberOfGuesses === 1 ) {
        trials = "trial";
      } else {
        trials = "trials";
      }
      showMessage( `${guess} is wrong. ${numberOfGuesses} more ${trials} to go`, "red" );
    }
  }


}

function showMessage( msg, color ) {
  message.textContent = msg;
  message.style.color = color;
  inputGuess.style.borderColor = color;
}

function random( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function playAgain() {
  guessBtn.classList.add( "play-again" );
  guessBtn.value = "Play Again";
}
