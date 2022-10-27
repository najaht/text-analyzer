// Business Logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (word) {
    if (!Number(word) && word.trim().length !== 0) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurencesInText(word, text) {


  if (noInputedWord(word, text)) {

    return 0;
  }
  const wordArray = text.split(" ")
  let wordCount = 0
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  })
  return wordCount;
}

function boldPassage(word, text) {
  if (noInputedWord(word, text)){
    return "";
  }
  let htmlString = "<P>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ")
    }

  });
  return htmlString + "</p>"
}
function offensiveWord(word){
  let offensiveWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
  let wordArray = word.split(" ")
  wordArray.forEach(function(element){
  
  })
}


// Utility Logic
function noInputedWord(word, text){
  return ((text.trim().length === 0) || (word.trim().length === 0));
}








// User Interface Logic
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();

    let word = $("#input2").val();
    let sentence = $("#input").val();
    let count = wordCounter(sentence);
    let wordCount = numberOfOccurencesInText(word, sentence)
    let result3 = boldPassage(word, sentence)

    $("#display").text(count);
    $("#display2").text(wordCount);
    $("#bolded-passage").html(result3)


  })
})