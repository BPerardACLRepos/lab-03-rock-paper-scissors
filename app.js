import { didUserWin, getRandomThrow } from './utils.js';

//buttons
const throwButton = document.querySelector('#throw-button');
const resetButton = document.querySelector('#reset-button');
const actualReset = document.querySelector('#actual-reset');
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

//Click Handlers
throwButton.addEventListener('click', () => {
    const userThrow = document.querySelector('#game-controls-section input:checked');
    if (userThrow === null) {
        alert('Please choose your throw.');
        return;
    }
    const computerThrow = getRandomThrow();
    const decision = didUserWin(Number(userThrow.value), computerThrow);
    tallyScoreTracker(decision);
    updateNotificationPicture(Number(userThrow.value), playerThrowImg);
    updateNotificationPicture(computerThrow, computerThrowImg);
    updateUserNotification(decision);
});

resetButton.addEventListener('click', () => {
    playerThrowImg.className = '';
    computerThrowImg.className = '';
    document.querySelector('#game-controls-section input:checked').checked = false;
    gameControlsSection.classList.remove('hide');
    userNotificationSection.classList.add('hide');
});

//Function Declarations
function tallyScoreTracker(gameOutcome) {
    if (gameOutcome === `You tied, back to the drawing board...`) {
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
}

function updateNotificationPicture(throwSelected, imgElement) {
    //throw values: paper(0), scissors(1), rock(2)
    if (throwSelected === 0) {
        imgElement.setAttribute('src', './assets/paperBattle.png');
    } else if (throwSelected === 1) {
        imgElement.setAttribute('src', './assets/scissorsBattle.png');
    } else {
        imgElement.setAttribute('src', './assets/theRockBattle.png');
    }
}

function updateUserNotification(decision) {
    gameControlsSection.classList.add('hide');
    userNotificationSection.classList.remove('hide');
    endgameMessage.textContent = decision;
    if (decision === `You won! You're a machine... but the good kind!`) {
        playerThrowImg.classList.add('win');
        computerThrowImg.classList.add('lose');
    } else if (decision === `You lost! The machines have won.`) {
        playerThrowImg.classList.add('lose');
        computerThrowImg.classList.add('win');
    }
}

actualReset.addEventListener('click', () => {
    totalDraws = 0;
    totalLosses = 0;
    totalWins = 0;
    
    
    winsSpan.textContent = 0;
    lossesSpan.textContent = 0;
    drawsSpan.textContent = 0;
    totalGamesSpan.textContent = 0;
});