let cm;
let kg;
let bmi;
document.querySelector(".btn-secondary").addEventListener("click", function () {
  cm = document.querySelector(".cm").value;
  kg = document.querySelector(".kg").value;

  bmi = (kg / cm / cm) * 10000;
  let result = document.querySelector(".results");
  let resultText = document.querySelector(".result-text");
  if (bmi < 18.5) {
    result.textContent = bmi;
    resultText.textContent = "Underweight";
  } else if (18.5 < bmi < 24.9) {
    result.textContent = bmi;
    resultText.textContent = "Normal weight ";
  } else if (25 < bmi < 29.9) {
    result.textContent = bmi;
    resultText.textContent = "Overweight";
  } else {
    result.textContent = bmi;
    resultText.textContent = "Obesity ";
  }
});
