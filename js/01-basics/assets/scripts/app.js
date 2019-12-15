const defaultResult = 0;

let currentResult = defaultResult;

const getUserNumberInput = function() {
    return parseInt(userInput.value);
}

const createAndWriteOutput = function(operator, resultBefore, resultAfter) {
    const description = `${resultBefore} ${operator} ${resultAfter}`;
    outputResult(resultAfter, description);
}

const sum = function() {
    const input = getUserNumberInput();  
    let initialResult = currentResult;
    currentResult = currentResult + input;
    createAndWriteOutput('+', initialResult, currentResult);
} 

const substract = function() {
    const input = getUserNumberInput();  
    let initialResult = currentResult;
    currentResult = currentResult - input;
    createAndWriteOutput('-', initialResult, currentResult);
}

const multiply = function() {
    const input = getUserNumberInput();  
    let initialResult = currentResult;
    currentResult = currentResult * input;
    createAndWriteOutput('*', initialResult, currentResult);
}

const divide = function() {
    const input = getUserNumberInput();  
    let initialResult = currentResult;
    currentResult = currentResult / input;
    createAndWriteOutput('/', initialResult, currentResult);
}

addBtn.addEventListener('click', sum);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
