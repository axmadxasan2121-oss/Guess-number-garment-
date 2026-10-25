console.log("Try clicking the Run button.");
let guess = Number(prompt("Guess number"));
while (guess !== 16) {
  console.log("Wrong guess, try again!");
  guess = Number(prompt("Guess number"));
}
console.log("Correct! You guessed the number.");
