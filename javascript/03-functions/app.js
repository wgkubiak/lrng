const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

    // No arguments () => {...} | One argument arg => {...} | One expression in function body (a, b) => a + b | 
    // More... (a, b) => { a *= 2; return a + b; }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let winner;

  if(playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }

  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerSelection}, therefore you `;

  if(winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }

  alert(message);
  gameIsRunning = false;
});



// Not related to the game

/*
 * REST OPERATOR
 */

const sumUp = (...params) => {
  let sum = 0;
  
  for(const num of params) {
    sum += num;
  }
  
  return sum;
}

const substractUp = function() {
  let sum = 0;
  
  for(const num of arguments) {
    sum -= num;
  }
  
  return sum;
}

console.log(sumUp(1, 2, 3, 4, 5, 6));
console.log(sumUp(1, 3, 5, 1, 2, 3, 4, 8, 5, 6, 4));
console.log(substractUp(1, 2, 3, 4, 1, 2, 3));

/*
 * FUNCTIONS INSIDE THE FUNCTIONS
 */

const multiplyUp = (...params) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  
  let sum = validateNumber(params[0]);

  for(let i = 1; i < params.length; i++) {
    sum *= validateNumber(params[i]);
  }
  
  return sum;
}

console.log(multiplyUp(1,2,3,4,5));

/*
 * CALLBACK
 */

const divideUp = (resultHandler, ...params) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 1 : number;
  };
  
  let sum = validateNumber(params[0]);

  for(let i = 1; i < params.length; i++) {
    sum /= validateNumber(params[i]);
  }
  
  resultHandler(sum);
}

const showResult = (text, result) => alert(`${text} ${result.toFixed(2)}`);

//divideUp(showResult, 2, 5, 'fdads', 2, 3, 4);

/*
 * WORKING WITH bind()
 */

const combine = function(resulthandler, operation, ...numbers) {
  const validateNumber = (number) => {
    return isNaN(number) ? 1 : number;
  };
  
  let sum = 0;
  
  for(const num of numbers) {
    if(operation === 'SUBSTRACT') {
      sum -= validateNumber(num);
    } else if (operation === 'ADD') {
      sum += validateNumber(num);
    }
  }
  
  resulthandler(sum);
}

combine(showResult.bind(this, 'The result of substract is '), 'SUBSTRACT', 2, 3, 1, 2, 3, 5);
combine(showResult.bind(this, 'The result of adding is '), 'ADD', 2, 3, 1, 2, 3, 5);