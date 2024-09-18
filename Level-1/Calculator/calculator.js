let input1 = "";
let screen = document.getElementById("display_screen");
let lastResult = 0; //Store The Last Result

const addIntoString = (number) => {
  input1 += number;
  screen.value = input1;
};

const operation = () => {
  let result = input1.split(" ");
  let num1 = result[0];
  let operand = result[1];
  let num2 = result[2];
  let solution = 0;
  if (operand === "+") {
    solution = parseFloat(num1) + parseFloat(num2);
  } else if (operand === "-") {
    solution = parseFloat(num1) - parseFloat(num2);
  } else if (operand === "*") {
    solution = parseFloat(num1) * parseFloat(num2);
  } else {
    solution = parseFloat(num1) / parseFloat(num2);
  }
  lastResult = solution;
  let solutionValue = String(solution);
  screen.value = solutionValue;
  input1 = "";
};

const againAnswer = () => {
  input1 = lastResult.toString();
  screen.value = input1;
};

const clearScreen = () => {
  input1 = "";
  screen.value = "";
};
