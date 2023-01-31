let secretValues = Math.floor(Math.random() * 10 + 11);
console.log(secretValues);
let scoreHigh;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  let scoreHigh = Number(document.querySelector(".score").textContent);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";

    if (scoreHigh != 0) {
      scoreHigh = scoreHigh - 1;
      document.querySelector(".score").textContent = String(scoreHigh);
    } else {
      document.querySelector(".message").textContent =
        "You are lost the game!!";
    }
  } else if (guess == secretValues) {
    document.querySelector(".message").textContent = "Congrats you're won!";

    document.querySelector(".number").textContent = secretValues;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (Number(document.querySelector(".highscore").textContent < scoreHigh)) {
      document.querySelector(".highscore").textContent = scoreHigh;
    }
  } else if (guess > secretValues) {
    document.querySelector(".message").textContent = "Too High";
    if (scoreHigh != 0) {
      scoreHigh = scoreHigh - 1;
      document.querySelector(".score").textContent = String(scoreHigh);
    } else {
      document.querySelector(".message").textContent =
        "You are lost the game!!";
    }
  } else if (guess < secretValues) {
    document.querySelector(".message").textContent = "Too Low";
    if (scoreHigh != 0) {
      scoreHigh = scoreHigh - 1;
      document.querySelector(".score").textContent = String(scoreHigh);
    } else {
      document.querySelector(".message").textContent =
        "You are lost the game!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = "20";

  secretValues = Math.floor(Math.random() * 10 + 11);
  console.log(secretValues);
  document.querySelector(".message").textContent = "Start guessing!";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
