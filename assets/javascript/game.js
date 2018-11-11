var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['banana', 'apple', 'orange', 'grape', 'pear', 'kiwi', 'plum'];
var word = words[Math.floor(Math.random() * words.length)];

var wordText = document.getElementById("wordText");
var lettersGuessedText = document.getElementById("lettersGuessed");

var answerArray = [];

for (var i = 0 ; i < word.length; i++){
    answerArray[i] = "_ ";
}

var remainingLetters = word.length;


wordText.textContent = (answerArray.join (""));

console.log ("word is: " + word);
console.log ("answerArray is: " + answerArray);



document.onkeyup = function(event) {

    while (remainingLetters > 0 ){

        answerArray.join(" ");

            var userGuessLower = event.key;
            var guess = userGuessLower.toLowerCase();

            console.log ("guess is: " + guess);

            if (letters.indexOf(guess)){
                
                for (var j = 0; j < word.length; j++){
                    (word[j] === guess)
                        answerArray[j] = guess;
                        remainingLetters--; 
                }
            } 
    }
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


