const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingforSecondOperand: false,
  operator: null
};
function updateDisplay() {
  const display = document.querySelector(".radek");
  display.value = calculator.displayValue;
}
updateDisplay();

function inputDigit(digit) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    if (calculator.displayValue === "0") {
      calculator.displayValue = digit;
    } else {
      calculator.displayValue = calculator.displayValue + digit;
    }
  }
}

function handleOperator(nextOperator) {
  if (calculator.firstOperand === null) {
    calculator.firstOperand = parseFloat(calculator.displayValue);
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

const keys = document.querySelector(".calculator");
keys.addEventListener("click", event => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("all-clear")) {
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});
