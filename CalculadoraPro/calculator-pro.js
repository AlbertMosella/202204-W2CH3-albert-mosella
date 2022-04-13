calculatorPro();

function calculatorPro() {
  let newNumber;
  const numberList = [];

  newNumber = prompt("Enter a number or press cancel to stop");
  do {
    if (isNaN(newNumber) || newNumber.length === 0 || newNumber === "") {
      alert("Is not a number, enter a number or press cancel to stop");
      newNumber = prompt("Enter a number or press cancel to stop");
    } else {
      numberList.push(newNumber);
      newNumber = prompt("Enter a number or press cancel to stop");
    }
  } while (newNumber !== null);

  if (numberList.length === 1) {
    const numberRoot = Math.sqrt(numberList[0]);
    alert(
      `The square root of ${numberList[0]} is ${
        Math.round(numberRoot * 1000) / 1000
      }`
    );
  } else {
    let totalSum = numberList[0];
    let totalRest = numberList[0];
    let totalMult = numberList[0];
    let totalDiv = numberList[0];
    for (let i = 1; i < numberList.length; i++) {
      totalSum = Number(totalSum) + Number(numberList[i]);
      totalRest -= numberList[i];
      totalMult *= numberList[i];
      totalDiv /= numberList[i];
    }
    alert(`The result of the sum is: ${Math.round(totalSum * 1000) / 1000}`);
    alert(`The result of the rest is: ${Math.round(totalRest * 1000) / 1000}`);
    alert(
      `The result of the multiplication is: ${
        Math.round(totalMult * 1000) / 1000
      }`
    );
    alert(
      `The result of the division is: ${Math.round(totalDiv * 1000) / 1000}`
    );
  }

  let newCalc = prompt("New numbers? y/n");
  do {
    if (newCalc === "y") {
      calculatorPro();
    } else if (newCalc === "n") {
      alert("Bye!");
    } else {
      newCalc = prompt("Incorrect answer. New numbers? y/n");
    }
  } while (newCalc !== "n");
}
