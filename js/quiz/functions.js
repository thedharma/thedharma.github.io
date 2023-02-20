function displayTime(seconds) {
  var mins = Math.floor(seconds / 60);
  var secs = seconds - mins * 60;
  var minsPadded = String(mins).padStart(2, "0");
  var secsPadded = String(secs).padStart(2, "0");
  document.getElementById("mins").innerHTML = minsPadded;
  document.getElementById("secs").innerHTML = secsPadded;
}

function displayScore(quizStats) {
  var score = quizStats["score"];
  var answers = quizStats["totalAnswers"];
  document.getElementById("score").innerHTML = String(score);
  document.getElementById("total-answers").innerHTML = String(answers);
  document.getElementById("percentage").innerHTML = String(
    Math.round((score / answers) * 100, 2)
  );
}

function displayFinalScore(quizStats) {
  var score = quizStats["score"];
  var answers = quizStats["totalAnswers"];
  document.getElementById("final-score").innerHTML = String(score);
  document.getElementById("final-total-answers").innerHTML = String(answers);
  if (answers == 0) {
    document.getElementById("final-percentage").innerHTML = "0";
  } else {
    document.getElementById("final-percentage").innerHTML = String(
      Math.round((score / answers) * 100, 2)
    );
  }
}

export { displayTime, displayScore, displayFinalScore };
