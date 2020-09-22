// // instead of declaring each one on a line, can declare them all together and deifn them later on
let scores, roundScore, activePlayer, dice;

// // keep track of the round score. only need one at a time.
scores = [0, 0];

// // keep track of all scores in one array
roundScore = 0;

// // need variable of current active player. 
// // We are using 0 for active player and 1 for the other as those numbers will be used to match with the 
// // index number of the array as there are 2 numbers, and it is 0 based and so 0 and 1.
activePlayer = 0;

// // create the dice - which is essentially a random number
// dice = Math.floor(Math.random() * 6) + 1;


// document.querySelector('#current-' + activePlayer).textContent = dice;

// function btn() {

// };

// document.querySelector('.btn-roll').addEventListener('click', btn);
// // this is a callback function. a function being called by another function

// these 4 lines of code will reset the score when the page loads all to 0
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';



// step 1 the button is pressed and the event listener hears this click and carries out the function
document.querySelector('.btn-roll').addEventListener('click', function () {
    // step 2 a random number between 1 and 6 is created
    var dice = Math.floor(Math.random() * 6) + 1;

    // step 3 - we have to display this random number on the dice image
    var diceDOM = document.querySelector('.dice ');
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + '.png';

    // step 4 - update the round score if it was not a 1

    if (dice !== 1) {
        // add score of dice to round score if its not 1
        roundScore += dice;
        // display the roundScore
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        // then move to next player
        // so if active play 0 then player 1 if not then player 2
        // use ternary operator to change the player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        // so each player current score reverts to 0 when there is a change in players
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";


    }



});