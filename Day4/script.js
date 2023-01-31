let secretValues = Math.floor(Math.random() * 20 + 1);
console.log(secretValues);

let scoreHigh;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  scoreHigh = Number(document.querySelector(".score").textContent);

  if (!guess) {
    document.querySelector(".message").textContent = " It is empty!!";

    if (scoreHigh != 0) {
      scoreHigh = scoreHigh - 1;
      document.querySelector(".score").textContent = String(scoreHigh);
    } else {
      document.querySelector(".message").textContent = " You're lost the game";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").textContent = "!";
    }
  } else if (guess === secretValues) {
    document.querySelector(".message").textContent = " Congrats you're won!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = String(secretValues);
    document.querySelector(".number").style.width = "30rem";

    if (Number(document.querySelector(".highscore").textContent < scoreHigh)) {
    }
  } else if (guess > secretValues) {
    document.querySelector(".message").textContent = " Too High";

    if (scoreHigh != 0) {
      scoreHigh = scoreHigh - 1;
      document.querySelector(".score").textContent = String(scoreHigh);
    } else {
      document.querySelector(".message").textContent = " You're lost the game";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").textContent = "!";
    }
  } else if (guess < secretValues) {
    document.querySelector(".message").textContent = " Too Low";

    if (scoreHigh != 0) {
      scoreHigh = scoreHigh - 1;
      document.querySelector(".score").textContent = String(scoreHigh);
    } else {
      document.querySelector(".message").textContent = " You're lost the game";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").textContent = "!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = "20";
  secretValues = Math.floor(Math.random() * 20 + 1);
  console.log(secretValues);
  document.querySelector(".message").textContent = "Start guessing!";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
