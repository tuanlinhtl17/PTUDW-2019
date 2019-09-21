let result = 0;
let operation = "";
let curEntry = 0;
let isDecimaling = false;

let inputResult = document.getElementById("result");

let pressButton = value => {
  if (!isDecimaling) {
    curEntry = value;
  } else {
    curEntry = curEntry + value;
  }
  inputResult.value = curEntry;
}

let decimal = () => {
  isDecimaling = true;
  curEntry = curEntry + "."
  inputResult.value = inputResult.value + "."
}

let calculateResult = () => {
  switch (operation) {
    case "+":
      result = result + curEntry
      break;
    case "-":
      result = result - curEntry
      break;
    case "*":
      result = result * curEntry
      break;
    case "/":
      result = result / curEntry
      break;
    default:
      break;
  }
}

let setOperation = opr => {
  curEntry = Number(curEntry);
  if (result === 0) {
    result = curEntry;
  } else {
    calculateResult()
  }
  operation = opr;
  isDecimaling = false;
}

let neg = () => {
  curEntry = "-" + curEntry;
  inputResult.value = curEntry;
}

let percent = () => {
  curEntry = Number(curEntry);
  if (result === 0) {
    result = curEntry;
  } else {
    calculateResult()
  }
  inputResult.value = (result * 100) + "%";
}

let getResult = () => {
  curEntry = Number(curEntry);
  calculateResult();
  inputResult.value = result;
  curEntry = 0;
}

let clearEntry = () => {
  curEntry = 0;
  inputResult.value = 0;
}

let clearAll = () => {
  curEntry = 0;
  result = 0;
  inputResult.value = 0;
}
