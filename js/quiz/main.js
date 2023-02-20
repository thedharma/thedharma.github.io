import { displayTime, displayScore, displayFinalScore } from "./functions.js";

import {
  getCleanCurrentQuizData,
  specificQuizInputToQuizName,
  getRandomWordObject,
} from "./word_data.js";

import {
  displayTestWord,
  confirmCorrect,
  displayFeedback,
  removeCorrectAnswer,
  displayEncouragingFeedback,
} from "./game_config.js";

import { quizTypeInput, specificQuizInput, timeInput } from "./input_data.js";

const replayGameButton = document.getElementById("replay-game-button");

// Display title according to specificQuizInput
const quizName = document.getElementById("quiz-name");
const quizTitle = document.getElementById("quiz-title");
quizName.innerHTML = specificQuizInputToQuizName[specificQuizInput];
quizTitle.classList.remove("hidden");

const currentQuizData = getCleanCurrentQuizData(specificQuizInput);

const testWord = document.getElementById("test-word");
const supplementText = document.getElementById("supplement-text");
const quizAnswerInput = document.getElementById("quiz-answer");
var wordObject = null
var unansweredGreekWords = null;
var totalGreekWords = null;
var quizStats = null;
var feedbackPresent = null;

playGame();

function playGame() {
  wordObject = getRandomWordObject(currentQuizData);

  displayTestWord(
    testWord,
    supplementText,
    wordObject["englishWord"],
    wordObject["englishSupplement"]
  );

  unansweredGreekWords = [...wordObject["greekWord"]];
  totalGreekWords = [...wordObject["greekWord"]];
  quizStats = { score: 0, totalAnswers: 0 };
  feedbackPresent = false;

  var totalSeconds = parseInt(timeInput) * 60;
  displayTime(totalSeconds);
  document.getElementById("time-display").style.display = "block";

  var timer = setInterval(function () {
    totalSeconds = totalSeconds - 1;
    displayTime(totalSeconds);
    if (totalSeconds == 0) {
      displayFinalScore(quizStats);
      quizAnswerInput.setAttribute("disabled", "");
      document.getElementById("pageCover").style.display = "block";
      document.getElementById("summary").style.display = "block";

      clearInterval(timer);
    }
  }, 1000);
}

quizAnswerInput.addEventListener("keyup", function (event) {
  if (feedbackPresent) {
    feedback.innerHTML = "";
    feedbackPresent = false;
  }
  if (event.key == "Enter") {
    var quizAnswerInputCleanValue = quizAnswerInput.value.trim();
    if (confirmCorrect(quizAnswerInputCleanValue, unansweredGreekWords)) {
      if (unansweredGreekWords.length == 1) {
        displayFeedback("correct", totalGreekWords);

        quizStats["score"] += 1;
        quizStats["totalAnswers"] += 1;
        displayScore(quizStats);

        wordObject = getRandomWordObject(currentQuizData);
        unansweredGreekWords = wordObject["greekWord"];
        totalGreekWords = wordObject["greekWord"];

        displayTestWord(
          testWord,
          supplementText,
          wordObject["englishWord"],
          wordObject["englishSupplement"]
        );
      } else if (unansweredGreekWords.length > 1) {
        unansweredGreekWords = removeCorrectAnswer(
          quizAnswerInputCleanValue,
          unansweredGreekWords
        );
        displayEncouragingFeedback(
          quizAnswerInputCleanValue,
          unansweredGreekWords.length
        );
      }
    } else {
      displayFeedback("incorrect", unansweredGreekWords);
      quizStats["totalAnswers"] += 1;
      displayScore(quizStats);
    }
    quizAnswerInput.value = "";
    feedbackPresent = true;
  }
});

replayGameButton.addEventListener("click", function () {
  document.getElementById("pageCover").style.display = "none";
  document.getElementById("summary").style.display = "none";
  document.getElementById("score").innerHTML = "0";
  document.getElementById("total-answers").innerHTML = "0";
  document.getElementById("percentage").innerHTML = "0";
  feedback.style.color = "#b0e0e6";
  quizAnswerInput.value = "";
  quizAnswerInput.removeAttribute("disabled", "");
  playGame();
});
