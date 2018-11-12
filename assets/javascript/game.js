var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['banana', 'apple', 'orange', 'grape', 'pear', 'kiwi', 'plum'];
var word = words[Math.floor(Math.random() * words.length)];

var wordArray = word.split("");
var incorrectGuessesArray = [];
var answerArray = [];

var wordText = document.getElementById("wordText");
var wordGuessesText = document.getElementById("guessCount");
var lettersGuessedText = document.getElementById("lettersGuessed");
var winCountText = document.getElementById("winCount");
var lossCountText = document.getElementById("lossCount");

var remainingGuesses = 10;
var winCount = 0;
var lossCount = 0;


function randomWord() {
    var randomWordGenerator = letters[Math.floor(Math.random() * letters.length)];

    return randomWordGenerator;
};


for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}

var remainingLetters = word.length;


wordText.textContent = (answerArray.join(""));

document.onkeyup = function (event) {


    var userGuessLower = event.key;
    var guess = userGuessLower.toLowerCase();

    if (letters.indexOf(guess) > -1) {

        if (incorrectGuessesArray.indexOf(guess) > -1 || answerArray.indexOf(guess) > -1) {
            return alert("You already guessed that letter!");
        };


        if (wordArray.indexOf(guess) > -1) {
            for (var j = 0; j < wordArray.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingGuesses--;
                    wordGuessesText.textContent = remainingGuesses
                    wordText.textContent = answerArray.join(" ");
                }
            }

        } else {
            remainingGuesses--;
            wordGuessesText.textContent = remainingGuesses
            incorrectGuessesArray.push(guess);
            lettersGuessedText.textContent = incorrectGuessesArray;
        };

console.log ("wordArray= "+ wordArray);
console.log ("answerArray= "+ answerArray);


        
        if (wordArray === answerArray) {

            

console.log ("wordArray AFTER WIN= "+ wordArray);
console.log ("answerArray AFTER WIN= "+ answerArray)  ; 

            winCount++;
            winCountText.textContent = winCount;
            wordArray = [];
            remainingGuesses = 10;
            wordGuessesText.textContent = remainingGuesses;
            incorrectGuessesArray = [];
            lettersGuessedText.textContent = incorrectGuessesArray;
        };

        if (remainingGuesses === 0) {
            lossCount++;
            lossCountText.textContent = lossCount;
            remainingGuesses = 10;
            wordGuessesText.textContent = remainingGuesses;
            incorrectGuessesArray = [];
        };
    }
}







// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// var words = ['banana', 'apple', 'orange', 'grape', 'pear', 'kiwi', 'plum'];
// var word = words[Math.floor(Math.random() * words.length)];

// var wordArray = word.split("");
// var incorrectGuessesArray = [];
// var answerArray = [];

// var wordText = document.getElementById("wordText");
// var wordGuessesText = document.getElementById("guessCount");
// var lettersGuessedText = document.getElementById("lettersGuessed");
// var winCountText = document.getElementById("winCount");
// var lossCountText = document.getElementById("lossCount");

// var remainingGuesses = 10;
// var winCount = 0;
// var lossCount = 0;


// function randomWord() {
//     var randomWordGenerator = letters[Math.floor(Math.random() * letters.length)];

//     return randomWordGenerator;
// };


// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_ ";
// }

// var remainingLetters = word.length;


// wordText.textContent = (answerArray.join(""));

// console.log("word is: " + word);
// console.log("wordArray is: " + wordArray);
// console.log("answerArray is: " + answerArray);

// document.onkeyup = function (event) {


//     var userGuessLower = event.key;
//     var guess = userGuessLower.toLowerCase();

//     if (letters.indexOf(guess) > -1) {
//         console.log("guess is: " + guess);

//         if (incorrectGuessesArray.indexOf(guess) > -1 || answerArray.indexOf(guess) > -1) {
//             return alert("You already guessed that letter!");
//         };


//         if (wordArray.indexOf(guess) > -1) {
//             for (var j = 0; j < wordArray.length; j++) {
//                 if (word[j] === guess) {
//                     answerArray[j] = guess;
//                     remainingGuesses--;
//                 }
//             }

//         } else {
//             remainingGuesses--;
//             incorrectGuessesArray.push(guess);
//         }

//         wordText.textContent = answerArray.join(" ");
//         wordGuessesText.textContent = remainingGuesses
//         lettersGuessedText.textContent = incorrectGuessesArray;

//         console.log("answerArray after guess is: " + answerArray);
//         console.log("wordArray after guess is: " + wordArray);

//         if (wordArray === answerArray) {
//             winCount++;

//             wordArray = [];
//             remainingGuesses = 10;
//             wordGuessesText.textContent = remainingGuesses;
//             incorrectGuessesArray = [];
//             lettersGuessedText.textContent = incorrectGuessesArray;
//         } 




//         else {



//             if (remainingGuesses === 0) {
//                 lossCount++;
//                 lossCountText.textContent = lossCount;
//                 remainingGuesses = 10;
//                 wordGuessesText.textContent = remainingGuesses;
//                 incorrectGuessesArray = [];
//             }
//         }
//     }


// }