import { didUserWin } from './utils.js';

//buttons
const throwButton = document.querySelector('#throw-button');
const resetButton = document.querySelector('#reset-button');
//sections
const gameControlsSection = document.querySelector('#game-controls-section');
const userNotificationSection = document.querySelector('#user-notification-section');
//spans
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');
const totalGamesSpan = document.querySelector('#total-games-span');
//img
const playerThrowImg = document.querySelector('#player-throw-img');
const computerThrowImg = document.querySelector('#computer-throw-img');

const endgameMessage = document.querySelector('#endgame-message');

let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;

throwButton.addEventListener('click', () => {
    const userThrow = document.querySelector('#game-controls-section input:checked');
    if (userThrow === null) {
        alert('Please choose your throw.');
        return;
    }
    const computerThrow = getRandomThrow();
    const decision = didUserWin(Number(userThrow.value), computerThrow);
    tallyScoreTracker(decision);

});



function getRandomThrow() {
    return Math.floor(Math.random() * 3);
};

function tallyScoreTracker(gameOutcome) {
    if (gameOutcome === `Back to the drawing board...`) {
        totalDraws++;
    } else if (gameOutcome === `You're a machine... but the good kind!`) {
        totalWins++;
    } else {
        totalLosses++;
    }
    const totalGames = totalDraws + totalWins + totalLosses;
    winsSpan.textContent = `${totalWins} (${100 * totalWins / totalGames}%)`;
    lossesSpan.textContent = `${totalLosses} (${100 * totalLosses / totalGames}%)`;
    drawsSpan.textContent = `${totalDraws} (${100 * totalDraws / totalGames}%)`;
    totalGamesSpan.textContent = `${totalGames}`;
};

function updateUserNotification(decision) {


};