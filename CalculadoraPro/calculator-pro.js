function calculatorPro() {
  const numberList = [];

  let newNumber = "Enter a number or press cancel to stop";
  do {
    if (Number.isNaN(newNumber) || newNumber.length === 0 || newNumber === "") {
      newNumber = "Enter a number or press cancel to stop";
    } else {
      numberList.push(newNumber);
      newNumber = "Enter a number or press cancel to stop";
    }
  } while (newNumber !== null);

  if (numberList.length === 1) {
    const numberRoot = Math.sqrt(numberList[0]);
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
    const numbersArray = [];
    numbersArray = [numberRoot, totalRest, totalMult, totalDiv];
  }
}
calculatorPro();
