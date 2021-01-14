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

