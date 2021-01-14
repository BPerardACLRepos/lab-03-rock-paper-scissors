# lab-03-rock-paper-scissors

// Functions
- getRandomThrow
 > generate throw for computer opponent
 > Math.floor(Math.random() * 3)
  * paper = 0
  * scissors = 1
  * rock = 2

- didUserWin
 > compare (userThrow) & (computerThrow)
 > if user === computer
  * draw
  * else user + computer = decision
 > if decision = 3
  * return (user === 2(rock)) ? 'win' : 'loss';
 > if decision = 2
  * return (user === 0(paper)) ? 'win' : 'loss';
 > else (decision = 1)
  * return (user === 1(scissors)) ? 'win' : 'loss';

// App Outline
- user chooses radio button (userThrow)

- throw button is pressed
 > #throw-button
 > click handler

- computerThrow returned from getRandomThrow

- userThrow taken radio:checked
 > #game-controls-section input:checked

- didUserWin(userThrow, computerThrow)
 > didUserWin returns 'draw'/'win'/'lose'

- user notification updates
 > img#player-throw
 > img#computer-throw
 > .setAttribute('src', 'throw.png')

- tally win/loss/draw/games
 > #wins-span
  * totalWins (wins/total)%
 > #losses-span
  * totalLosses (losses/total)%
 > #draws-span
  * totalDraws (draws/total)%
 > #total-games-span
  * totalWins + totalLosses + totalDraws
 > .textContent
  * classList.remove('hide') reset
  * classList.add('hide') throw

- reset button functional
 > click handler
 > classList.add('hide') reset
 > classList.remove('hide') throw
 