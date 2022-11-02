// Business Logic
function wordCounter(text) {
  if (noInputedWord(text)) {
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

function maskWord(word) {
  let wordArray = word.split("")
  let newWord = ""
  wordArray.forEach(function (element, index) {
    if (index === 0) {
      newWord = newWord.concat(element)
    } else {
      newWord = newWord.concat("*")
    }
  })
  return newWord;
}

function boldPassage(word, text) {
  if (noInputedWord(word, text)) {
    return "";
  }

  const regEx = new RegExp(word, "gi")
  const boldWord = "<b>" + word + "</b>"
  const htmlString = text.replace(regEx, boldWord)
  return "<p>" + htmlString +" </p>"
}
// function formatText(text) {


//   let htmlString = "<P>";
//   let newElement;
//   let textArray = text.split(" ");
//   textArray.forEach(function (element, index) {

//     if (element.toLowerCase() === "zoinks" || "muppeteer" || "biffaroni" || "loopdaloop") {

//       newElement = element.replace(word, "<b>" + maskWord(element) + "</b>")
//     }
//     else {
//       newElement = element.replace(word, "<b>" + element + "</b>")
//     }


//     htmlString = htmlString.concat(newElement);

//     if (index !== (textArray.length - 1)) {
//       htmlString = htmlString.concat(" ")
//     }

//   });
//   return htmlString + "</p>"
// }
function offensiveWord(word) {
  let htmlStrings = "<p>"
  let offensiveWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
  let wordArray = word.split(" ")
  wordArray.forEach(function (element) {
    offensiveWord.forEach(function (element2) {
      if (element === element2) {
        htmlStrings = htmlStrings.concat("***" + element + "***");
      }
    })
  })
  return htmlStrings + "</p>"
}

function threeMostCommon(sentence) {
  let countArray = []
  let wordArray = sentence.split(" ");
  let spaceFilter = [];
  let sortedArray = []
  wordArray.forEach(function (element) {
    if (element.trim() !== "") {
      spaceFilter.push(element);
    }
  });
  let html = "<p>"
  let filteredArray = [...new Set(spaceFilter)]
  filteredArray.forEach(function (element1) {
    let counter = 0
    spaceFilter.forEach(function (element2) {
      if (element1 === element2) {
        counter++;
      }
    });
    countArray.push([element1, counter])
  });
  forSort(countArray);
  if (countArray.length > 3) {
    for (let i = 0; i < 3; i++) {
      html = html.concat("<b>" + countArray[i][0] + "</b>" + " : " + countArray[i][1] + "<br>")
    }
  } else {
    for (let i = 0; i < countArray.length; i++) {
      html = html.concat("<b>" + countArray[i][0] + "</b>" + " : " + countArray[i][1] + "<br>")
    }
  }
  return html + "<p>"
}

function forSort(element) {
  element.sort(function (a, b) {
    return b[1] - a[1]
  })
  return element;
}

// Utility Logic
function noInputedWord() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
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
    let result4 = offensiveWord(word, sentence);
    let result5 = threeMostCommon(sentence);

    $("#display").text(count);
    $("#display2").text(wordCount);
    $("#bolded-passage").html(result3);
    $("#offensive-word").html(result4);
    $("#common-words").html(result5);
  })
})