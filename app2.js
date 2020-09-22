// instead of declaring each one on a line, can declare them all together and deifn them later on
let scores, roundScore, activePlayer, dice, gamePlaying;
init()



gamePlaying = true;
var lastDice;
var diceDOM = document.querySelector('.dice');


// step 1 the button is pressed and the event listener hears this click and carries out the function
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        // step 2 a random number between 1 and 6 is created
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        // step 3 - we have to display this random number on the dice image
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // // step 4 - update the round score if it was not a 1
        // if (dice === 6 && lastDice === 6) {
        //     // player loses all score
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();

        // } else if (dice !== 1) {
        //     // add score of dice to round score if its not 1
        //     roundScore += dice;
        //     // display the roundScore
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // } else {
        //     // next player
        //     nextPlayer();
        // }


        // lastDice = dice;

        // step 4 - update the round score if it was not a 1

        if (dice !== 1 && dice2 != 1) {
            // add score of dice to round score if its not 1
            roundScore += dice1 + dice2;
            // display the roundScore
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }






    }
});

// creating the event listener for the hold button
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        // Step 1 - add current score to the global score
        // active player is either 0 or 1 which determine the index in the array scores
        scores[activePlayer] += roundScore;

        // Step 2 - update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        // Step 3 - check if player won the game
        let finalScore = document.querySelector('.final-score').value;
        let winningScore;
        // undefined, 0, null or "" are coerced to false
        // anythgin else is COERSED to true
        if (finalScore) {
            winningScore = finalScore;

        } else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner";
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // move to next player
            nextPlayer();
        }

    }


});

function nextPlayer() {
    var diceDOM = document.querySelector('.dice');
    // then move to next player
    // so if active play 0 then player 1 if not then player 2
    // use ternary operator to change the player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // so each player current score reverts to 0 when there is a change in players
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    // adding toggle instead of add and remove means that for each time a 1 is 
    // rolled the class status will toggle on off
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    // reset scores to 0
    scores = [0, 0];

    // active player back to 0;
    activePlayer = 0;

    // if there is roundscore then needs to 0
    roundScore = 0;


    // these 4 lines of code will reset the score when the page loads all to 0
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

};