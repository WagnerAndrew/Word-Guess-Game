//if letterGuessed = letter in word then it's true and is revealed, otherwise
//it's a dash

//VARIABLES

var fruits = ['banana', 'apple', 'orange', 'grape', 'pear', 'kiwi', 'plum'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var fruitToGuess = randomFruitGenerator ();
var fruitLetters = [];
var winCount = 0;
var lossCount = 0;
var guessCount = 10;
var lettersGuessed = [];

// var fruitToGuessText = document.getElementById("fruitToGuess");
var winCountText = document.getElementById("winCount");
var lossCountText = document.getElementById("lossCount");
var guessCountText = document.getElementById("guessCount");
var lettersGuessedText = document.getElementById("lettersGuessed");

// FUNCTIONS

function randomFruitGenerator () {
    var randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    return randomFruit; 
};

// PROCESS

randomFruitGenerator ();
console.log ("The function randomFruitGenerator returned a value of: " + randomFruitGenerator ());
console.log ("The Variable fruitToGuess is set to: " + fruitToGuess);

function fruitSplit () {
//   var fruitLetters = randomFruitGenerator ();
  var fruitSplit = fruitToGuess.split('');
  return fruitSplit;

}

fruitSplit ();
console.log ("The function fruitSplit returned a value of: "+ fruitSplit());
    
  
  
  
  
  
  
  
  
  
  
    // STARTS GAME AND GENERATES A RANDOM FRUIT WITH ANY KEY PRESS
    
    // document.onkeyup = function(event) {

    //     var startGame = event.key;
    //     var fruitToGuessText = document.getElementById("fruitToGuess");

    //         if (startGame === event.key){
                
    //                 console.log ("Key pressed was: " + startGame);
    //                 console.log ("Variable fruitToGuess is set to: " + fruitToGuess);
    //                 console.log ("Variable fruitToGuessText is set to: " + fruitToGuessText);

    //                 fruitToGuessText.textContent = randomFruitGenerator ();
    //             };

    // }


