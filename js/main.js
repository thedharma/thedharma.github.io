// Div Settings
const vocabDiv = document.getElementById("vocab-div");
const conjugationDiv = document.getElementById("conjugation-div");
const timeDiv = document.getElementById("time-div");
const startButtonDiv = document.getElementById("start-button-div");

// Inputs
const quizTypeInput = document.getElementById("quiz-type-input");
const vocabInput = document.getElementById("vocab-input");
const conjugationInput = document.getElementById("conjugation-input");
const timeInput = document.getElementById("time-input");

quizTypeInput.addEventListener("change", function () {
  // Hide 2 last divs if there is a change to the first div
  startButtonDiv.classList.add("hidden");
  timeDiv.classList.add("hidden");

  // Reset the values of the form
  vocabInput.value = "";
  conjugationInput.value = "";
  timeInput.value = "5";

  // If Vocab, make the textbook div
  if (quizTypeInput.value == "vocab") {
    conjugationDiv.classList.add("hidden");
    vocabDiv.classList.remove("hidden");
  } else if (quizTypeInput.value == "conjugation") {
    vocabDiv.classList.add("hidden");
    conjugationDiv.classList.remove("hidden");
  }
});

// Add the time and button
vocabDiv.addEventListener("change", function () {
  timeDiv.classList.remove("hidden");
  startButtonDiv.classList.remove("hidden");
});

// Add the time and button
conjugationDiv.addEventListener("change", function () {
  timeDiv.classList.remove("hidden");
  startButtonDiv.classList.remove("hidden");
});

startButtonDiv.addEventListener("click", function () {
  localStorage.setItem("quizTypeInput", quizTypeInput.value);

  var specificQuizInputValue = null;
  if (quizTypeInput.value == "vocab") {
    specificQuizInputValue = vocabInput.value;
  } else if (quizTypeInput.value == "conjugation") {
    specificQuizInputValue = conjugationInput.value;
  }

  localStorage.setItem("specificQuizInput", specificQuizInputValue);
  localStorage.setItem("timeInput", timeInput.value);
  quizTypeInput.value = "";
});
