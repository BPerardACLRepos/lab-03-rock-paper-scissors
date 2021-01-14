# lab-03-rock-paper-scissors

// Functions
- getRandomThrow
 > generate throw for computer opponent
 > Math.floor(Math.random() * 3)
  * paper = 0
  * scissors = 1
  * rock = 2

- didUserWin
 > compare user & computer throw
 > if user === computer
  * draw
  * else user + computer = decision
 > if decision = 3
  * return (user === 2(rock)) ? 'win' : 'loss';
 > if decision = 2
  * return (user === 0(paper)) ? 'win' : 'loss';
 > else (decision = 1)
  * return (user === 1(scissors)) ? 'win' : 'loss';

