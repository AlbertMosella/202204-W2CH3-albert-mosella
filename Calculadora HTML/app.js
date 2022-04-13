let result = "";
let operator = false;
let operation = "";
let x = "";
let y = "";
let display = "";

const clickButton = (input) => {
  if (!operator) {
    if (!isNaN(input)) {
      x = x.concat(input);
      showDisplay(input);
    } else if (input === ".") {
      x = x.concat(input);
      showDisplay(input);
    } else if (
      input === "+" ||
      input === "-" ||
      input === "x" ||
      input === "÷"
    ) {
      operator = true;
      operation = input;

      showDisplay(input);
    }
  }
  if (operator) {
    if (!isNaN(input)) {
      y = y.concat(input);
      showDisplay(input);
    } else if (input === ".") {
      y = y.concat(input);
      showDisplay(input);
    } else if (input === "=") {
      x = Number(x);
      y = Number(y);
      if (operation === "+") {
        result = sum();
      } else if (operation === "-") {
        result = substract();
      } else if (operation === "x") {
        result = multiplication();
      } else if (operation === "÷") {
        result = division();
      }
      display.innerHTML = Math.round(result * 1000) / 1000;
      x = result;
      x = String(x);
      operator = false;
      operation = "";
      y = "";
    }
  }
};

const showDisplay = (input) => {
  display = document.querySelector(".numbers-screen");
  display.innerHTML = display.innerHTML.concat(input);
};

const sum = () => x + y;

const substract = () => x - y;

const multiplication = () => x * y;

const division = () => x / y;

deleteAll = () => {
  result = "";
  operator = false;
  operation = "";
  x = "";
  y = "";
  display.innerHTML = "";
  showDisplay(display.innerHTML);
};

deleteParcial = () => {
  if (y.length > 0) {
    y = y.slice(0, -1);
    parcialDeleteDisplay();
  } else if (y.length === 0 && x.length > 0 && operator) {
    operator = false;
    operation = "";
    parcialDeleteDisplay();
  } else if (y.length === 0 && x.length > 0 && !operator) {
    x = x.slice(0, -1);
    parcialDeleteDisplay();
  }
};

const parcialDeleteDisplay = () => {
  display = document.querySelector(".numbers-screen");
  display.innerHTML = display.innerHTML.slice(0, -1);
};
