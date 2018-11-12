var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['banana', 'apple', 'orange', 'grape', 'pear', 'kiwi', 'plum'];
var word = words[Math.floor(Math.random() * words.length)];

var wordArray = word.split("");
var wordText = document.getElementById("wordText");
var wordGuessesText = document.getElementById("guessCount");

var lettersGuessedText = document.getElementById("lettersGuessed");
var remainingGuesses = 10;
var incorrectGuessesArray = [];

var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}

var remainingLetters = word.length;


wordText.textContent = (answerArray.join(""));

console.log("word is: " + word);
console.log("answerArray is: " + answerArray);



document.onkeyup = function (event) {


    var userGuessLower = event.key;
    var guess = userGuessLower.toLowerCase();

    if (letters.indexOf(guess) > -1) {
        console.log("guess is: " + guess);

        if (incorrectGuessesArray.indexOf(guess) > -1 || answerArray.indexOf(guess) > -1){ 
            return alert("You already guessed that letter!");
          };


        if (wordArray.indexOf(guess) > -1) {
            for (var j = 0; j < wordArray.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;

                } 
            }

        } else {
            remainingGuesses--;
            incorrectGuessesArray.push(guess);
        }

        
        wordText.textContent = answerArray.join (" ");
        wordGuessesText.textContent = remainingGuesses
        lettersGuessedText.textContent = incorrectGuessesArray;










    }



    // if (letters.indexOf(guess) !== -1){

    //     for (var j = 0; j < word.length; j++){
    //         (word[j] === guess)
    //             answerArray[j] = guess;
    //             remainingLetters--; 
    //     }
    // } else {
    //     alert ("Please type letters only");
    // }
}

// while (remainingLetters > 0) {
//     // Show the player their progress
//     alert(answerArray.join(" "));
//     // Get a guess from the player
//     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if (guess === null) {
//         // Exit the game loop
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//     } else {
//         // Update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
// }











// alert(answerArray.join (""));
// alert("Good job! The answer was " + word)





// while (remainingLetters > 0){

//     // alert(answerArray.join(""));
//     wordText.textContent = (answerArray.join (""));

//     // 

//     document.onkeyup = function (event) {

//         var userGuessLower = event.key;
//         var guess = userGuessLower.toLowerCase();

//     if (guess === null){
//         break;
//     } else if (guess.length !== 1) {
//         alert ("Please enter a single letter.");
//     } else {
//         for (var j = 0; j < word.length; j++){
//             if (word[j] === guess){
//                 answerArray[j] = guess;
//                 remainingLetters--;
//         }
//             }
//     }
// }

// alert(answerArray.join (""));
// alert("Good job! The answer was " + word)












// var fruits = ['banana', 'apple', 'orange', 'grape', 'pear', 'kiwi', 'plum'];
// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var fruitToGuess = "";
// var fruitLetters = [];
// var winCount = 0;
// var lossCount = 0;
// var guessCount = 10;
// var lettersGuessed = [];
// var word ;              // Selected word
//   var guess ;             // Geuss
//   var geusses = [ ];

// var fruitToGuessText = document.getElementById("fruitToGuess");
// var winCountText = document.getElementById("winCount");
// var lossCountText = document.getElementById("lossCount");
// var guessCountText = document.getElementById("guessCount");
// var lettersGuessedText = document.getElementById("lettersGuessed");

// // FUNCTIONS


// // START RANDOM FRUIT GENERATOR

//         function randomFruitGenerator () {
//             var randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
//             return randomFruit;
//         };

//             fruitToGuess = randomFruitGenerator ();
//             // console.log ("The Variable fruitToGuess is set to: " + fruitToGuess);

// // END RANDOM FRUIT GENERATOR

// // START FRUIT WORD SPLIT

//         function fruitSplit () {
//             var fruitSplit = fruitToGuess.split('');
//             return fruitSplit;
//         };
//             // console.log ("The function fruitSplit is returning: " + fruitSplit ());

//             fruitLetters.push (fruitSplit ());
//             // console.log ("The fruitLetters array now holds: "+ fruitLetters);

//             // fruitToGuessText.textContent = fruitToGuess;

// // END FRUIT WORD SPLIT

// // START PRINT FRUIT WORD AS DASHES

//         function fruitDashes () {

//             for (var i = 0; i < fruitLetters.length; i++) {
//                 console.log (fruitLetters[i]);
//                 fruitDashes = fruitLetters[i]
//                 console.log (fruitLettersDashes);
//                 return fruitLettersDashes;
//             };
//         }

//         fruitDashes ();


// // END PRINT FRUIT WORD AS DASHES









//   // PROCESS


//         // STARTS GAME AND GENERATES A RANDOM FRUIT WITH ANY KEY PRESS

//         // document.onkeyup = function(event) {

//         //     var startGame = event.key;
//         //     var fruitToGuessText = document.getElementById("fruitToGuess");

//         //         if (startGame === event.key){

//         //                 console.log ("Key pressed was: " + startGame);
//         //                 console.log ("Variable fruitToGuess is set to: " + fruitToGuess);
//         //                 console.log ("Variable fruitToGuessText is set to: " + fruitToGuessText);

//         //                 fruitToGuessText.textContent = randomFruitGenerator ();
//         //             };

//     // }


