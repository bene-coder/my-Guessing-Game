var y = Math.floor(Math.random() * 50) + 1;
var guess = 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

var x = document.querySelector(".guessField");
var submit = document.querySelector(".guessSubmit");
let result = document.querySelector(".result");

function SubmitEvent() {
  console.log(y, "random Number");
  if (x.value == y) {
    result.innerText = `Congratulations!! You guessed it right in ${guess}  trials`;
    result.style.color = "green";
    setGameOver();
  } else if (x.value < 1 || x.value > 50) {
    result.innerText = "Put in a number ranging from 1-50!";
  } else if (x.value > y) {
    guess++;
    result.innerText = "Wrong Number, please try a smaller number";
    result.style.color = "red";
  } else {
    guess++;
    result.innerText = "Wrong Number, please try a greater number";
    result.style.color = "red";
  }
  if (guess >= 10) {
    result.innerText = `You have maxxed out the amount of trials you have!`;
    result.style.color = "red";
    setGameOver();
  }
  if (guess == 9) {
    lowOrHi.innerText = `You have only 1 trial remaining`;
  }
}
x.focus();

function setGameOver() {
  guessField.disabled = true;
  submit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guess === 1;

  guessField.disabled = false;
  submit.disabled = false;
  x.value = "";
  x.focus();
  location.reload();
}
