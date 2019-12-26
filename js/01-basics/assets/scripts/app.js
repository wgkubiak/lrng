const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operation, prevResult, operationNum, newRes) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: operationNum,
    result: newRes
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(type) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  
  if (type === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (type === 'SUBSTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (type === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(type, initialResult, enteredNumber, currentResult);
}

function add() {
  calculate('ADD');
}

function subtract() {
  calculate('SUBSTRACT');
}

function multiply() {
  calculate('MULTIPLY');
}

function divide() {
  calculate('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
