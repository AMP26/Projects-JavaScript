let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

totalScore();

function totalScore() {
  document.querySelector('.playerScore').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function displayResult(playerMove, computerMove, result) {
  console.log(`You picked ${playerMove} and the computer picked ${computerMove}. ${result} \n Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
//   alert(`You picked ${playerMove} and the computer picked ${computerMove}. ${result} 
// Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}

function gamePlay(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') { result = 'Tie!'; }
    else if (computerMove === 'Paper') { result = 'You lose!'; }
    else if (computerMove === 'Scissors') { result = 'You win!'; }
  } 
  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') { result = 'You win!'; }
    else if (computerMove === 'Paper') { result = 'Tie!'; }
    else if (computerMove === 'Scissors') { result = 'You lose!'; }
  } 
  else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') { result = 'You lose!'; }
    else if (computerMove === 'Paper') { result = 'You win!'; }
    else if (computerMove === 'Scissors') { result = 'Tie!'; }
  }

  // Update score based on result
  if (result === 'You win!') { score.wins += 1; }
  else if (result === 'You lose!') { score.losses += 1; }
  else { score.ties += 1; }

  document.querySelector('.result').innerHTML = result;
  document.querySelector('.moves').innerHTML = 
  `You <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
  totalScore();
  localStorage.setItem('score', JSON.stringify(score));
  displayResult(playerMove, computerMove, result);
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) return 'Rock';
  else if (randomNumber < 2 / 3) return 'Paper';
  return 'Scissors';
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  
  totalScore();
  document.querySelector('.result').innerHTML = '';
  localStorage.removeItem('score', JSON.stringify(score));
  document.querySelector('.moves').innerHTML = '';
  // alert(`Score Reset - Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
  console.log(`Score Reset \n Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}