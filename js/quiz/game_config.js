function displayTestWord(
  testWord,
  supplementText,
  englishWord,
  englishSupplement
) {
  testWord.innerHTML = englishWord;
  if (englishSupplement != undefined && englishSupplement != "") {
    supplementText.innerHTML = `(${englishSupplement})`;
  } else {
    supplementText.innerHTML = "";
  }
}

function confirmCorrect(quizAnswer, greekWord) {
  for (var i = 0; i < greekWord.length; i++) {
    var greekWordElement = greekWord[i];
    for (var j = 0; j < greekWordElement.length; j++) {
      var singleGreekWord = greekWordElement[j];
      if (singleGreekWord == quizAnswer) {
        return true;
      }
    }
  }

  return false;
}

function displayFeedback(typeFeedback, greekWord) {
  var feedbackString = "";

  if (typeFeedback == "correct") {
    feedbackString += "Correct! ";
  } else if (typeFeedback == "incorrect") {
    feedbackString += "Incorrect. ";
  }

  var greekWordsArray = [];
  for (var i = 0; i < greekWord.length; i++) {
    var greekWordElement = greekWord[i];
    var greekWordString = greekWordElement.join("/");
    greekWordsArray.push(greekWordString);
  }

  if (greekWordsArray.length == 1) {
    if (typeFeedback == "correct") {
      feedbackString += "The answer was ";
    } else if (typeFeedback == "incorrect") {
      feedbackString += "The answer is ";
    }
  } else if (greekWordsArray.length > 1) {
    if (typeFeedback == "correct") {
      feedbackString += "The answers were ";
    } else if (typeFeedback == "incorrect") {
      feedbackString += "The answers are ";
    }
  }

  feedback.innerHTML = feedbackString += `${greekWordsArray.join(" and ")}.`;
  if (typeFeedback == "correct") {
    feedback.style.color = "green";
  } else if (typeFeedback == "incorrect") {
    feedback.style.color = " #ff3333";
  }
}

function removeCorrectAnswer(value, greekWords) {
  var indexToDelete = null;
  for (var i = 0; i < greekWords.length; i++) {
    var greekWordElement = greekWords[i];
    for (var j = 0; j < greekWordElement.length; j++) {
      var singleGreekWord = greekWordElement[j];
      if (singleGreekWord == value) {
        indexToDelete = i;
        greekWords.splice(indexToDelete, 1);
        return greekWords;
      }
    }
  }
}

function displayEncouragingFeedback(value, length) {
  var pluralIndicator = "";
  var pluralIndicator2 = "is";

  if (length > 1) {
    pluralIndicator = "s";
    pluralIndicator2 = "are";
  }
  feedback.innerHTML = `The answer ${value} is correct. There ${pluralIndicator2} still ${length} more answer${pluralIndicator} to go.`;
  feedback.style.color = "#ada91d";
}

export {
  displayTestWord,
  confirmCorrect,
  displayFeedback,
  displayEncouragingFeedback,
  removeCorrectAnswer,
};
